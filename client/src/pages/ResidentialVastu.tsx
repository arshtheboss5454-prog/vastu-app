import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Home, Heart, Shield, Coins, Baby, Book, ArrowRight, CheckCircle } from 'lucide-react';

const ResidentialVastu = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const benefits = [
    {
      icon: Heart,
      title: 'Family Harmony',
      description: 'Enhance relationships and create a peaceful home environment'
    },
    {
      icon: Shield,
      title: 'Health & Well-being',
      description: 'Promote physical and mental health through proper energy flow'
    },
    {
      icon: Coins,
      title: 'Financial Prosperity',
      description: 'Activate wealth corners and improve financial stability'
    },
    {
      icon: Baby,
      title: 'Children\'s Growth',
      description: 'Create optimal conditions for children\'s education and development'
    }
  ];

  const rooms = [
    {
      name: 'Main Entrance',
      importance: 'First impression energy entry point',
      recommendations: ['Face auspicious directions', 'Remove obstacles', 'Proper lighting']
    },
    {
      name: 'Living Room',
      importance: 'Family gathering and social interactions',
      recommendations: ['Central or north location', 'Light colors', 'Proper seating arrangement']
    },
    {
      name: 'Master Bedroom',
      importance: 'Rest, relationships, and personal energy',
      recommendations: ['Southwest direction ideal', 'Avoid mirrors facing bed', 'Calming colors']
    },
    {
      name: 'Kitchen',
      importance: 'Health and nourishment center',
      recommendations: ['Southeast direction preferred', 'Clean and organized', 'Proper ventilation']
    },
    {
      name: 'Study Room',
      importance: 'Knowledge and career growth',
      recommendations: ['Northeast or east direction', 'Face east while studying', 'Clutter-free environment']
    },
    {
      name: 'Pooja Room',
      importance: 'Spiritual energy and divine blessings',
      recommendations: ['Northeast corner ideal', 'Clean and sacred', 'Proper idol placement']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Site Analysis',
      description: 'Detailed evaluation of your home\'s layout, directions, and current energy flow'
    },
    {
      step: '02',
      title: 'Astrological Mapping',
      description: 'Correlation of your birth chart with the house vastu for personalized solutions'
    },
    {
      step: '03',
      title: 'Custom Recommendations',
      description: 'Room-wise guidance with practical and achievable vastu corrections'
    },
    {
      step: '04',
      title: 'Implementation Support',
      description: 'Ongoing guidance during implementation with follow-up consultations'
    }
  ];

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
              <Home className="h-10 w-10 text-primary" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Residential Vastu
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform your house into a harmonious home where positive energy flows freely, 
              bringing health, happiness, and prosperity to your family.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              data-testid="button-book-consultation"
            >
              Book Residential Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16" style={{ backgroundColor: 'hsl(150 30% 85%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">
              Why Residential Vastu Matters
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your home is more than just a building—it's the foundation of your family's well-being and success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center bg-white/90 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Room-wise Guidance */}
      <section ref={ref} className="py-16" style={{ backgroundColor: 'hsl(280 25% 85%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">
              Room-wise Vastu Guidelines
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Each room in your home serves a specific purpose and requires tailored vastu attention.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-white/90 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">{room.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{room.importance}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Key Recommendations:</h4>
                  {room.recommendations.map((rec, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{rec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16" style={{ backgroundColor: 'hsl(180 30% 82%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">
              Our Consultation Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A systematic approach to transform your home into a vastu-compliant sanctuary.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/90 rounded-2xl p-6 shadow-lg mb-4">
                  <div className="text-3xl font-bold text-primary mb-4">{step.step}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700 text-sm">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary/60" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: 'hsl(25 40% 88%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Book a personalized residential vastu consultation and start your journey 
              towards a harmonious and prosperous home environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                data-testid="button-book-now"
              >
                Book Consultation Now
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
                data-testid="button-call"
              >
                Call: +91 98765 43210
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResidentialVastu;