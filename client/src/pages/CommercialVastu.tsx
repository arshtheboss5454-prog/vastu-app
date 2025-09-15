import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Building, TrendingUp, Users, Shield, Target, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';

const CommercialVastu = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Revenue',
      description: 'Optimize energy flow to attract more customers and boost sales'
    },
    {
      icon: Users,
      title: 'Better Team Productivity',
      description: 'Create harmonious workspace for improved employee performance'
    },
    {
      icon: Shield,
      title: 'Business Stability',
      description: 'Ensure long-term business success and reduced obstacles'
    },
    {
      icon: Target,
      title: 'Strategic Advantage',
      description: 'Gain competitive edge through optimal space utilization'
    }
  ];

  const businessTypes = [
    {
      name: 'Retail Stores',
      icon: Building,
      features: ['Customer flow optimization', 'Product placement guidance', 'Cash counter positioning', 'Entrance design'],
      color: 'hsl(330 35% 88%)'
    },
    {
      name: 'Corporate Offices',
      icon: Briefcase,
      features: ['CEO cabin placement', 'Meeting room locations', 'Employee seating arrangement', 'Reception area design'],
      color: 'hsl(150 30% 85%)'
    },
    {
      name: 'Hotels & Restaurants',
      icon: Users,
      features: ['Kitchen placement', 'Dining area layout', 'Guest room orientation', 'Reception positioning'],
      color: 'hsl(280 25% 85%)'
    },
    {
      name: 'Medical Centers',
      icon: Shield,
      features: ['Treatment room locations', 'Waiting area design', 'Equipment placement', 'Healing environment'],
      color: 'hsl(180 30% 82%)'
    }
  ];

  const successStories = [
    {
      business: 'Retail Chain',
      problem: '30% drop in sales over 6 months',
      solution: 'Relocated cash counter and entrance modifications',
      result: '45% increase in sales within 3 months'
    },
    {
      business: 'IT Company',
      problem: 'High employee turnover and low productivity',
      solution: 'CEO cabin relocation and workspace reorganization',
      result: '60% reduction in attrition, 35% productivity boost'
    },
    {
      business: 'Restaurant',
      problem: 'Poor customer footfall despite good location',
      solution: 'Kitchen repositioning and seating layout changes',
      result: '70% increase in daily customers'
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
              <Building className="h-10 w-10 text-primary" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Commercial Vastu
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Unlock your business potential with commercial vastu solutions that enhance 
              prosperity, productivity, and long-term success.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              data-testid="button-book-consultation"
            >
              Book Commercial Consultation
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
              Transform Your Business Success
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Commercial vastu principles help create an environment that naturally attracts 
              prosperity, enhances productivity, and ensures sustainable growth.
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

      {/* Business Types Section */}
      <section ref={ref} className="py-16" style={{ backgroundColor: 'hsl(280 25% 85%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">
              Specialized Business Solutions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Every business type has unique vastu requirements. Our specialized approach 
              addresses the specific needs of your industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {businessTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                style={{ backgroundColor: type.color }}
              >
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/90 rounded-xl mr-4">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary">{type.name}</h3>
                </div>
                
                <div className="space-y-3">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="mt-6 w-full border-primary text-primary hover:bg-primary/10"
                  data-testid={`button-learn-${type.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              Success Stories
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real businesses, real transformations, real results through the power of commercial vastu.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/90 rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-primary mb-3">{story.business}</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium text-red-600">Problem:</span>
                    <p className="text-gray-700 mt-1">{story.problem}</p>
                  </div>
                  
                  <div>
                    <span className="font-medium text-blue-600">Solution:</span>
                    <p className="text-gray-700 mt-1">{story.solution}</p>
                  </div>
                  
                  <div>
                    <span className="font-medium text-green-600">Result:</span>
                    <p className="text-gray-700 mt-1 font-semibold">{story.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Areas Section */}
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
              Key Commercial Vastu Areas
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Critical aspects we focus on for maximum business impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Entrance & Reception',
                description: 'First impression and energy entry point',
                points: ['Direction alignment', 'Obstacle removal', 'Welcoming atmosphere']
              },
              {
                title: 'Cash Counter & Accounts',
                description: 'Financial stability and cash flow',
                points: ['Optimal positioning', 'Secure placement', 'Wealth corner activation']
              },
              {
                title: 'Owner/CEO Cabin',
                description: 'Leadership effectiveness and decision making',
                points: ['Power position', 'Authority enhancement', 'Clear vision']
              },
              {
                title: 'Employee Workstations',
                description: 'Productivity and job satisfaction',
                points: ['Energy optimization', 'Stress reduction', 'Team harmony']
              },
              {
                title: 'Meeting Rooms',
                description: 'Successful negotiations and collaborations',
                points: ['Favorable directions', 'Positive atmosphere', 'Clear communication']
              },
              {
                title: 'Storage & Inventory',
                description: 'Stock management and supply chain',
                points: ['Organized systems', 'Easy accessibility', 'Efficient flow']
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/90 rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">{area.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{area.description}</p>
                <div className="space-y-2">
                  {area.points.map((point, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{point}</span>
                    </div>
                  ))}
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
              Ready to Boost Your Business?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Schedule a commercial vastu consultation and discover how ancient wisdom 
              can transform your business success in the modern world.
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

export default CommercialVastu;