import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { Star, Upload, Send } from 'lucide-react';

const Yogdaan = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    dob: '',
    placeOfBirth: '',
    query: ''
  });
  const [files, setFiles] = useState({
    kundliMap: null as File | null,
    kundliScheme: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fileType: 'kundliMap' | 'kundliScheme') => {
    const file = e.target.files?.[0] || null;
    setFiles(prev => ({ ...prev, [fileType]: file }));
  };

  const uploadFile = async (file: File, path: string): Promise<string> => {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Upload files if they exist
      let kundliMapUrl = '';
      let kundliSchemeUrl = '';

      if (files.kundliMap) {
        kundliMapUrl = await uploadFile(files.kundliMap, `yogdaan/kundli-maps/${Date.now()}-${files.kundliMap.name}`);
      }

      if (files.kundliScheme) {
        kundliSchemeUrl = await uploadFile(files.kundliScheme, `yogdaan/kundli-schemes/${Date.now()}-${files.kundliScheme.name}`);
      }

      // Save form data to Firestore
      await addDoc(collection(db, 'yogdaan-submissions'), {
        ...formData,
        kundliMapUrl,
        kundliSchemeUrl,
        submittedAt: new Date(),
        status: 'pending'
      });

      toast({
        title: "Submission Successful!",
        description: "Your Yogdaan request has been submitted. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        mobile: '',
        dob: '',
        placeOfBirth: '',
        query: ''
      });
      setFiles({
        kundliMap: null,
        kundliScheme: null
      });

    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact us directly.",
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
              <Star className="h-10 w-10 text-primary" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Yogdaan
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Your contribution to spiritual growth. Share your kundli and questions with us 
              for personalized astrological guidance and vastu recommendations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section ref={sectionRef} className="py-16" style={{ backgroundColor: 'hsl(150 30% 85%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white/90 rounded-3xl p-8 lg:p-12 shadow-2xl"
          >
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">
                Submit Your Yogdaan Request
              </h2>
              <p className="text-gray-700">
                Please provide your details and questions. Our expert aacharya will review 
                your submission and provide personalized guidance.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="dob" className="text-sm font-medium text-gray-700">
                    Date of Birth *
                  </Label>
                  <Input
                    id="dob"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    data-testid="input-dob"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="placeOfBirth" className="text-sm font-medium text-gray-700">
                    Place of Birth *
                  </Label>
                  <Input
                    id="placeOfBirth"
                    name="placeOfBirth"
                    value={formData.placeOfBirth}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    data-testid="input-place-of-birth"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="kundliMap" className="text-sm font-medium text-gray-700">
                    Upload Kundli Map
                  </Label>
                  <div className="relative">
                    <Input
                      id="kundliMap"
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileChange(e, 'kundliMap')}
                      className="w-full"
                      data-testid="input-kundli-map"
                    />
                    <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                  {files.kundliMap && (
                    <p className="text-sm text-green-600">✓ {files.kundliMap.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="kundliScheme" className="text-sm font-medium text-gray-700">
                    Upload Kundli Scheme
                  </Label>
                  <div className="relative">
                    <Input
                      id="kundliScheme"
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileChange(e, 'kundliScheme')}
                      className="w-full"
                      data-testid="input-kundli-scheme"
                    />
                    <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                  {files.kundliScheme && (
                    <p className="text-sm text-green-600">✓ {files.kundliScheme.name}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="query" className="text-sm font-medium text-gray-700">
                  What do you want to ask us? *
                </Label>
                <Textarea
                  id="query"
                  name="query"
                  value={formData.query}
                  onChange={handleInputChange}
                  required
                  maxLength={200}
                  rows={4}
                  className="w-full"
                  placeholder="Please describe your questions or concerns (maximum 200 words)"
                  data-testid="textarea-query"
                />
                <p className="text-sm text-gray-500">
                  {formData.query.length}/200 characters
                </p>
              </div>

              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
                  data-testid="button-submit-yogdaan"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Submit Yogdaan Request
                    </span>
                  )}
                </Button>
              </div>
            </form>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> All submissions are reviewed personally by our aacharya. 
                You will receive a response within 48-72 hours. For urgent consultations, 
                please book a direct consultation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Yogdaan;