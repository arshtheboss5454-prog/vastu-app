import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Home, Building, Factory, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const services = [
    {
      icon: Home,
      title: 'Residential Vastu',
      description: 'Transform your home into a sanctuary of positive energy. Our residential vastu services ensure harmony, prosperity, and well-being for your family.',
      features: ['Home Layout Analysis', 'Energy Flow Optimization', 'Room-wise Guidance', 'Remedial Solutions'],
      bgColor: 'hsl(330 35% 88%)', // astro-rose
      link: '/residential'
    },
    {
      icon: Building,
      title: 'Commercial Vastu',
      description: 'Boost your business success with commercial vastu expertise. Enhance productivity, attract customers, and increase profitability.',
      features: ['Office Layout Design', 'Business Energy Analysis', 'Customer Flow Enhancement', 'Wealth Corner Activation'],
      bgColor: 'hsl(150 30% 85%)', // astro-mint
      link: '/commercial'
    },
    {
      icon: Factory,
      title: 'Industrial Vastu',
      description: 'Optimize large-scale operations with industrial vastu principles. Improve efficiency, safety, and overall business performance.',
      features: ['Factory Layout Planning', 'Machinery Placement', 'Worker Welfare Enhancement', 'Production Optimization'],
      bgColor: 'hsl(25 40% 88%)', // astro-peach
      link: '/industrial'
    },
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
    <section ref={ref} className="py-24 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-6">
            Our Vastu Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive vastu solutions tailored to your specific needs, 
            combining ancient wisdom with modern lifestyle requirements.
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="relative"
            >
              <div 
                className="rounded-3xl p-8 sm:p-12 lg:p-16"
                style={{ backgroundColor: service.bgColor }}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-white/90 rounded-2xl mb-6 shadow-lg"
                    >
                      <service.icon className="h-8 w-8 text-primary" />
                    </motion.div>

                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-6">
                      {service.title}
                    </h3>

                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm font-medium text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Button 
                      className="group bg-primary hover:bg-primary/90 text-primary-foreground"
                      data-testid={`button-learn-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Visual Element */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative aspect-square max-w-md mx-auto"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-golden-aura/20 rounded-3xl transform rotate-6" />
                      <div className="absolute inset-0 bg-white/90 rounded-3xl flex items-center justify-center shadow-xl">
                        <service.icon className="h-32 w-32 text-primary/80" />
                      </div>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="absolute -top-4 -right-4 w-8 h-8 bg-golden-aura rounded-full flex items-center justify-center"
                      >
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;