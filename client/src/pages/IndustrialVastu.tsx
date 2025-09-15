import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Factory, Zap, Shield, TrendingUp, Cog, Users, ArrowRight, CheckCircle } from 'lucide-react';

const IndustrialVastu = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Enhanced Productivity',
      description: 'Optimize workflow and increase overall operational efficiency'
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Reduce accidents and create safer working environments'
    },
    {
      icon: Zap,
      title: 'Energy Efficiency',
      description: 'Improve power usage and reduce operational costs'
    },
    {
      icon: Users,
      title: 'Worker Welfare',
      description: 'Enhance employee satisfaction and reduce turnover'
    }
  ];

  const industrialTypes = [
    {
      name: 'Manufacturing Units',
      features: ['Production line layout', 'Machinery placement', 'Raw material storage', 'Quality control areas'],
      challenges: ['Workflow optimization', 'Machine efficiency', 'Product quality'],
      color: 'hsl(330 35% 88%)'
    },
    {
      name: 'Warehouses & Distribution',
      features: ['Storage rack arrangement', 'Loading dock positioning', 'Office area placement', 'Security systems'],
      challenges: ['Inventory management', 'Quick dispatch', 'Space utilization'],
      color: 'hsl(150 30% 85%)'
    },
    {
      name: 'Chemical & Pharmaceutical',
      features: ['Lab positioning', 'Chemical storage safety', 'Ventilation systems', 'Clean room design'],
      challenges: ['Safety compliance', 'Quality standards', 'Environmental concerns'],
      color: 'hsl(280 25% 85%)'
    },
    {
      name: 'Textile & Garment',
      features: ['Loom placement', 'Cutting section layout', 'Finishing area design', 'Dispatch arrangement'],
      challenges: ['Production speed', 'Quality consistency', 'Order fulfillment'],
      color: 'hsl(180 30% 82%)'
    }
  ];

  const vasturaShaping = [
    {
      zone: 'Northeast (Ishaan)',
      element: 'Water',
      functions: ['Main entrance', 'Water storage', 'Administrative offices', 'Planning rooms'],
      benefits: 'Knowledge, wisdom, and growth'
    },
    {
      zone: 'Southeast (Agni)',
      element: 'Fire',
      functions: ['Power generation', 'Electrical panels', 'Kitchen/canteen', 'Heating systems'],
      benefits: 'Energy and transformation'
    },
    {
      zone: 'Southwest (Nairitya)',
      element: 'Earth',
      functions: ['Heavy machinery', 'Raw material storage', 'Strong rooms', 'Main production'],
      benefits: 'Stability and strength'
    },
    {
      zone: 'Northwest (Vayavya)',
      element: 'Air',
      functions: ['Finished goods storage', 'Guest areas', 'Service facilities', 'Ventilation'],
      benefits: 'Movement and distribution'
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
              <Factory className="h-10 w-10 text-primary" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Industrial Vastu
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Scale your industrial operations with vastu principles that enhance efficiency, 
              safety, and profitability while ensuring worker welfare and environmental harmony.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              data-testid="button-book-consultation"
            >
              Book Industrial Consultation
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
              Industrial Vastu Benefits
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Transform your industrial facility into a powerhouse of productivity, 
              safety, and sustainable growth.
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

      {/* Industrial Types Section */}
      <section ref={ref} className="py-16" style={{ backgroundColor: 'hsl(280 25% 85%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Tailored vastu approaches for different industrial sectors and their unique requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {industrialTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                style={{ backgroundColor: type.color }}
              >
                <h3 className="text-2xl font-semibold text-primary mb-6">{type.name}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Key Focus Areas:</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Common Challenges:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.challenges.map((challenge, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-white/80 rounded-full text-sm text-gray-700"
                        >
                          {challenge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="mt-6 w-full border-primary text-primary hover:bg-primary/10"
                  data-testid={`button-learn-${type.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  Get Specific Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vastu Zones Section */}
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
              Industrial Vastu Zones
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Strategic placement of industrial functions according to elemental energies 
              for maximum efficiency and harmony.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {vasturaShaping.map((zone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/90 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-primary">{zone.zone}</h3>
                  <span className="ml-auto text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    {zone.element}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Optimal Functions:</h4>
                    <div className="grid sm:grid-cols-2 gap-1">
                      {zone.functions.map((func, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{func}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-3">
                    <span className="text-sm font-medium text-primary">Benefits: </span>
                    <span className="text-sm text-gray-700">{zone.benefits}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16" style={{ backgroundColor: 'hsl(25 40% 88%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">
              Implementation Approach
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A systematic methodology designed for large-scale industrial transformations 
              with minimal operational disruption.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Site Assessment',
                description: 'Comprehensive evaluation of current layout, workflow, and energy patterns',
                duration: '2-3 days'
              },
              {
                step: '02',
                title: 'Strategic Planning',
                description: 'Detailed vastu blueprint with phased implementation plan',
                duration: '1 week'
              },
              {
                step: '03',
                title: 'Phased Execution',
                description: 'Gradual implementation to minimize production disruption',
                duration: '2-6 months'
              },
              {
                step: '04',
                title: 'Monitoring & Optimization',
                description: 'Performance tracking and fine-tuning for optimal results',
                duration: 'Ongoing'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center bg-white/90 rounded-2xl p-6 shadow-lg"
              >
                <div className="text-3xl font-bold text-primary mb-4">{phase.step}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{phase.description}</p>
                <div className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary">
                  {phase.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: 'hsl(210 45% 80%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">
              Scale Your Industrial Success
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Partner with us to transform your industrial facility into a model of 
              efficiency, safety, and sustainable prosperity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                data-testid="button-book-now"
              >
                Book Industrial Consultation
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

export default IndustrialVastu;