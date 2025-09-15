import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Search, Users, PenTool, CheckCircle, Calendar, Phone, MapPin, Clock } from 'lucide-react';

const OurProcess = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const detailedSteps = [
    {
      icon: Phone,
      step: '01',
      title: 'Initial Consultation Call',
      duration: '30-45 minutes',
      description: 'We begin with a detailed phone consultation to understand your specific needs, challenges, and goals.',
      activities: [
        'Discuss your current situation and concerns',
        'Understand your family/business background',
        'Explain our process and approach',
        'Schedule site visit if required'
      ],
      outcome: 'Clear understanding of your requirements and customized consultation plan'
    },
    {
      icon: MapPin,
      step: '02',
      title: 'Site Visit & Analysis',
      duration: '2-4 hours',
      description: 'Comprehensive on-site evaluation combining traditional vastu principles with modern lifestyle needs.',
      activities: [
        'Detailed measurement and mapping',
        'Direction and energy flow analysis',
        'Photography and documentation',
        'Identification of problematic areas'
      ],
      outcome: 'Complete vastu audit report with identified issues and opportunities'
    },
    {
      icon: Search,
      step: '03',
      title: 'Astrological Correlation',
      duration: '2-3 hours',
      description: 'Integration of your birth chart analysis with the property vastu for personalized recommendations.',
      activities: [
        'Birth chart preparation and analysis',
        'Planetary influence on property',
        'Personal favorable directions',
        'Timing recommendations for changes'
      ],
      outcome: 'Personalized vastu plan aligned with your astrological profile'
    },
    {
      icon: PenTool,
      step: '04',
      title: 'Custom Solution Design',
      duration: '3-5 days',
      description: 'Development of detailed, practical recommendations tailored to your specific space and requirements.',
      activities: [
        'Room-wise detailed recommendations',
        'Color and material suggestions',
        'Furniture placement guidelines',
        'Remedial measures and corrections'
      ],
      outcome: 'Comprehensive vastu blueprint with step-by-step implementation guide'
    },
    {
      icon: Users,
      step: '05',
      title: 'Presentation & Discussion',
      duration: '1-2 hours',
      description: 'Detailed presentation of findings and recommendations with opportunity for questions and clarifications.',
      activities: [
        'Comprehensive report presentation',
        'Priority-wise implementation plan',
        'Budget and timeline discussion',
        'Q&A session for clarifications'
      ],
      outcome: 'Clear roadmap for vastu implementation with agreed priorities'
    },
    {
      icon: CheckCircle,
      step: '06',
      title: 'Implementation Support',
      duration: 'Ongoing',
      description: 'Continuous guidance and support during the implementation phase to ensure optimal results.',
      activities: [
        'Regular progress monitoring',
        'Implementation guidance',
        'Obstacle resolution support',
        'Result tracking and optimization'
      ],
      outcome: 'Successful transformation with measurable positive outcomes'
    }
  ];

  const consultationTypes = [
    {
      type: 'Basic Consultation',
      price: '₹11,000',
      duration: '2-3 hours',
      includes: ['Site visit and analysis', 'Basic recommendations', 'Simple remedies', 'Follow-up call'],
      ideal: 'Small homes and apartments'
    },
    {
      type: 'Comprehensive Consultation',
      price: '₹25,000',
      duration: '4-6 hours',
      includes: ['Detailed site analysis', 'Astrological correlation', 'Complete vastu plan', 'Priority implementation guide', '2 follow-up sessions'],
      ideal: 'Large homes and commercial spaces'
    },
    {
      type: 'Premium Consultation',
      price: '₹50,000',
      duration: '8-10 hours',
      includes: ['Complete vastu transformation', 'Multiple site visits', 'Detailed blueprints', 'Implementation supervision', 'Quarterly follow-ups for 1 year'],
      ideal: 'Industrial and large commercial projects'
    }
  ];

  const whatToExpect = [
    {
      phase: 'Before Visit',
      timeline: '1-2 days',
      preparation: [
        'House/office floor plan (if available)',
        'Birth details of all residents/key personnel',
        'Current challenges and specific concerns',
        'Previous vastu consultations (if any)'
      ]
    },
    {
      phase: 'During Visit',
      timeline: '2-6 hours',
      activities: [
        'Detailed measurement and documentation',
        'Energy flow assessment',
        'Discussion of current issues',
        'Preliminary recommendations'
      ]
    },
    {
      phase: 'After Visit',
      timeline: '3-7 days',
      deliverables: [
        'Comprehensive written report',
        'Detailed recommendations',
        'Implementation timeline',
        'Follow-up schedule'
      ]
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
              <Search className="h-10 w-10 text-primary" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Our Process
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A systematic, thorough approach to vastu consultation that combines ancient wisdom 
              with modern methodology for lasting transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section ref={ref} className="py-16" style={{ backgroundColor: 'hsl(150 30% 85%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">
              Step-by-Step Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Every consultation follows our proven methodology to ensure comprehensive 
              analysis and effective solutions.
            </p>
          </motion.div>

          <div className="space-y-16">
            {detailedSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mr-4">
                      <step.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-primary">Step {step.step}</div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      <div className="flex items-center mt-1">
                        <Clock className="h-4 w-4 text-gray-500 mr-1" />
                        <span className="text-sm text-gray-600">{step.duration}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 mb-6">{step.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                      <div className="space-y-2">
                        {step.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-2">Expected Outcome:</h4>
                      <p className="text-sm text-gray-700">{step.outcome}</p>
                    </div>
                  </div>
                </div>

                {/* Visual Element */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative aspect-square max-w-sm mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-golden-aura/20 rounded-3xl transform rotate-6" />
                    <div className="absolute inset-0 bg-white/90 rounded-3xl flex items-center justify-center shadow-xl">
                      <step.icon className="h-24 w-24 text-primary/60" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-golden-aura rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm font-bold">{step.step}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Packages */}
      <section className="py-16" style={{ backgroundColor: 'hsl(280 25% 85%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">
              Consultation Packages
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the consultation package that best fits your needs and requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {consultationTypes.map((package_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className={`bg-white/90 rounded-2xl p-8 shadow-lg ${
                  index === 1 ? 'ring-2 ring-primary transform scale-105' : ''
                }`}
              >
                {index === 1 && (
                  <div className="text-center mb-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{package_.type}</h3>
                  <div className="text-3xl font-bold text-primary mb-1">{package_.price}</div>
                  <div className="text-sm text-gray-600">{package_.duration}</div>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Includes:</h4>
                    <div className="space-y-2">
                      {package_.includes.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3">
                    <span className="text-sm font-medium text-gray-900">Ideal for: </span>
                    <span className="text-sm text-gray-700">{package_.ideal}</span>
                  </div>
                </div>

                <Button
                  className={`w-full ${
                    index === 1 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-primary/10 hover:bg-primary/20 text-primary'
                  }`}
                  data-testid={`button-book-${package_.type.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  Book This Package
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
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
              What to Expect
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Understanding the timeline and preparation required for an effective consultation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {whatToExpect.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/90 rounded-2xl p-6 shadow-lg"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">{phase.phase}</h3>
                  <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-block">
                    {phase.timeline}
                  </div>
                </div>

                <div className="space-y-2">
                  {(phase.preparation || phase.activities || phase.deliverables)?.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
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
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Start your vastu journey with a consultation designed to create lasting 
              positive changes in your life and space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                data-testid="button-book-now"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Consultation
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
                data-testid="button-call"
              >
                <Phone className="mr-2 h-5 w-5" />
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

export default OurProcess;