import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Calendar, CreditCard, Phone, CheckCircle } from 'lucide-react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const BookConsultation = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1); // 1: Form, 2: Payment, 3: Confirmation
  const [consultationRate] = useState(11000); // Default rate per hour
  
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    issue: '',
    customIssue: ''
  });

  const issueOptions = [
    'Family Harmony Issues',
    'Financial Problems',
    'Health Concerns',
    'Career Stagnation',
    'Relationship Troubles',
    'Property/Land Related',
    'Business Growth Issues',
    'Children\'s Education',
    'Other (Please specify)'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, issue: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2); // Move to payment step
  };

  const initializeRazorpay = () => {
    return new Promise<boolean>((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setIsSubmitting(true);
    
    try {
      // Initialize Razorpay
      const isRazorpayLoaded = await initializeRazorpay();
      
      if (!isRazorpayLoaded) {
        throw new Error('Failed to load payment gateway');
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // You'll need to add this
        amount: consultationRate * 100, // Razorpay expects amount in paise
        currency: 'INR',
        name: 'Vishalaksha®',
        description: 'Vastu Consultation - 1 Hour',
        image: '/logo.png', // Add your logo
        handler: async function (response: any) {
          try {
            // Save booking to Firebase
            await addDoc(collection(db, 'consultation-bookings'), {
              ...formData,
              consultationRate,
              paymentId: response.razorpay_payment_id,
              bookingDate: new Date(),
              status: 'confirmed'
            });

            setStep(3); // Move to confirmation
            toast({
              title: "Booking Confirmed!",
              description: "Your consultation has been booked successfully. We'll contact you soon.",
            });
          } catch (error) {
            console.error('Booking save error:', error);
            toast({
              title: "Booking Error",
              description: "Payment successful but booking save failed. Please contact us.",
              variant: "destructive",
            });
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile,
        },
        theme: {
          color: '#6B46C1', // Your primary color
        },
        modal: {
          ondismiss: function() {
            setIsSubmitting(false);
            toast({
              title: "Payment Cancelled",
              description: "You can try again when ready.",
              variant: "destructive",
            });
          }
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 relative overflow-hidden"
        style={{ backgroundColor: 'hsl(330 35% 88%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-3xl mb-8">
              <Calendar className="h-10 w-10 text-primary" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Book Consultation
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Schedule a personalized vastu consultation with our Mahavastu certified aacharya 
              and transform your space with ancient wisdom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section ref={sectionRef} className="py-16" style={{ backgroundColor: 'hsl(150 30% 85%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white/90 rounded-3xl p-8 lg:p-12 shadow-2xl"
            >
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-4">
                  Consultation Details
                </h2>
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <span className="text-lg font-semibold text-primary">₹{consultationRate.toLocaleString()}</span>
                  </div>
                  <div className="text-gray-500">•</div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-lg font-semibold text-primary">1 Hour Session</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      data-testid="input-name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-sm font-medium text-gray-700">
                      Mobile Number *
                    </Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      data-testid="input-mobile"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    data-testid="input-email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                    Address *
                  </Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full"
                    data-testid="textarea-address"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="issue" className="text-sm font-medium text-gray-700">
                    Primary Issue/Concern *
                  </Label>
                  <Select onValueChange={handleSelectChange} required>
                    <SelectTrigger className="w-full" data-testid="select-issue">
                      <SelectValue placeholder="Select your primary concern" />
                    </SelectTrigger>
                    <SelectContent>
                      {issueOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {formData.issue === 'Other (Please specify)' && (
                  <div className="space-y-2">
                    <Label htmlFor="customIssue" className="text-sm font-medium text-gray-700">
                      Please specify your concern *
                    </Label>
                    <Textarea
                      id="customIssue"
                      name="customIssue"
                      value={formData.customIssue}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full"
                      data-testid="textarea-custom-issue"
                    />
                  </div>
                )}

                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
                    data-testid="button-proceed-payment"
                  >
                    Proceed to Payment
                  </Button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/90 rounded-3xl p-8 lg:p-12 shadow-2xl text-center"
            >
              <h2 className="font-serif text-3xl font-bold text-primary mb-8">
                Complete Your Payment
              </h2>
              
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Booking Summary</h3>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between">
                    <span>Consultation Type:</span>
                    <span className="font-medium">Vastu Consultation</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">1 Hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Issue:</span>
                    <span className="font-medium">{formData.issue}</span>
                  </div>
                  <div className="border-t pt-2 mt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Amount:</span>
                      <span className="text-primary">₹{consultationRate.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  onClick={handlePayment}
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
                  data-testid="button-pay-now"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Pay ₹{consultationRate.toLocaleString()} Now
                    </span>
                  )}
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="w-full"
                  data-testid="button-back"
                >
                  Back to Form
                </Button>
              </div>

              <p className="text-sm text-gray-600 mt-6">
                Secure payment powered by Razorpay. Your payment information is encrypted and safe.
              </p>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/90 rounded-3xl p-8 lg:p-12 shadow-2xl text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-8">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                Booking Confirmed!
              </h2>
              
              <p className="text-xl text-gray-700 mb-8">
                Thank you for booking your consultation with us. We'll contact you within 24 hours 
                to schedule your session.
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left">
                <h3 className="font-semibold text-gray-900 mb-4">What's Next?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <Phone className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Our team will call you to schedule the consultation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Calendar className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>You'll receive a confirmation with date and time</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Prepare any questions about your space in advance</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <Button
                  onClick={() => {
                    setStep(1);
                    setFormData({
                      name: '',
                      mobile: '',
                      email: '',
                      address: '',
                      issue: '',
                      customIssue: ''
                    });
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  data-testid="button-book-another"
                >
                  Book Another Consultation
                </Button>
                
                <a href="tel:+919876543210">
                  <Button variant="outline" className="w-full" data-testid="button-contact">
                    Contact Us: +91 98765 43210
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookConsultation;