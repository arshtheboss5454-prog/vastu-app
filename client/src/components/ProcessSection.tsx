import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Search, Users, PenTool, CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const steps = [
    {
      icon: Search,
      step: '01',
      title: 'Detailed Analysis',
      description: 'Comprehensive evaluation of your space, including astrological birth chart analysis and vastu assessment of the premises.',
      duration: '2-3 hours'
    },
    {
      icon: Users,
      step: '02', 
      title: 'Consultation Session',
      description: 'One-on-one discussion to understand your specific goals, challenges, and requirements for the vastu transformation.',
      duration: '1-2 hours'
    },
    {
      icon: PenTool,
      step: '03',
      title: 'Custom Solutions',
      description: 'Personalized vastu recommendations designed specifically for your space, lifestyle, and astrological profile.',
      duration: '3-5 days'
    },
    {
      icon: CheckCircle,
      step: '04',
      title: 'Implementation & Follow-up',
      description: 'Guided implementation of vastu changes with ongoing support and follow-up consultations for optimal results.',
      duration: 'Ongoing'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section 
      ref={ref} 
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: 'hsl(180 30% 82%)' }} // astro-teal
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-6">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A systematic approach combining ancient vastu principles with modern consultation methods 
            to deliver transformative results.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Step Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                      className="inline-flex items-center space-x-4 mb-6"
                    >
                      <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center">
                        <step.icon className="h-8 w-8" />
                      </div>
                      <div className="text-6xl font-serif font-bold text-primary/20">
                        {step.step}
                      </div>
                    </motion.div>

                    <h3 className="font-serif text-3xl font-bold text-primary mb-4">
                      {step.title}
                    </h3>

                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="flex items-center space-x-4">
                      <div className="px-4 py-2 bg-white/80 rounded-full">
                        <span className="text-sm font-medium text-primary">
                          Duration: {step.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step Visualization */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative aspect-square max-w-sm mx-auto"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/80 rounded-3xl shadow-2xl" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                          className="relative"
                        >
                          <step.icon className="h-24 w-24 text-primary/60" />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                            className="absolute inset-0 border-2 border-primary/30 rounded-full"
                          />
                        </motion.div>
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-golden-aura rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={inView ? { height: '100px' } : {}}
                    transition={{ delay: index * 0.3 + 0.8, duration: 0.8 }}
                    className="absolute left-1/2 -bottom-8 w-0.5 bg-gradient-to-b from-primary/60 to-primary/20 z-10"
                    style={{ marginLeft: '-1px' }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div variants={itemVariants} className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4"
            data-testid="button-start-journey"
          >
            Start Your Transformation Journey
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProcessSection;