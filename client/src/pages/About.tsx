import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Award, Users, BookOpen, Star, Heart, Target } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const milestones = [
    {
      year: '2009',
      title: 'Journey Begins',
      description: 'Started learning ancient vastu principles under renowned masters'
    },
    {
      year: '2012',
      title: 'Mahavastu Training',
      description: 'Completed intensive training under Khushdeep Bansal at Mahavastu'
    },
    {
      year: '2015',
      title: 'Certified Aacharya',
      description: 'Became Mahavastu Certified Aacharya with specialization in astrology-based vastu'
    },
    {
      year: '2018',
      title: 'Vishalaksha® Founded',
      description: 'Established Vishalaksha® to bring authentic vastu wisdom to modern homes'
    },
    {
      year: '2024',
      title: 'Digital Expansion',
      description: 'Launched online consultations to reach clients across India and globally'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'We stay true to ancient vastu principles while adapting to modern needs'
    },
    {
      icon: Target,
      title: 'Results-Oriented',
      description: 'Every recommendation is designed to create measurable positive changes'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your unique situation guides our personalized vastu solutions'
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
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              About Shri Vishal Singla
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A journey of dedication, learning, and transformation in the sacred sciences of astrology and vastu shastra.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16" style={{ backgroundColor: 'hsl(150 30% 85%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-golden-aura/20 rounded-3xl overflow-hidden shadow-2xl">
                {/* //todo: replace with actual photo */}
                <div className="h-full bg-gradient-to-br from-primary/40 to-golden-aura/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Users className="h-20 w-20 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-semibold">Shri Vishal Singla</p>
                    <p className="text-sm opacity-90">Founder & Aacharya</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl font-bold text-primary">
                The Man Behind the Mission
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Shri Vishal Singla's journey into the ancient sciences began over 15 years ago, 
                  driven by a deep fascination with the cosmic connections that influence our daily lives. 
                  His quest for authentic knowledge led him to the prestigious Mahavastu Institute.
                </p>
                <p>
                  Under the direct mentorship of the legendary Khushdeep Bansal, founder of Mahavastu, 
                  Shri Vishal mastered the intricate relationship between astrology and vastu shastra. 
                  This rare combination of expertise sets him apart in the field.
                </p>
                <p>
                  Today, as a Mahavastu Certified Aacharya, he has transformed the lives of over 1000 families 
                  across India, helping them achieve harmony, prosperity, and spiritual well-being through 
                  scientifically-backed vastu solutions.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3 bg-white/80 rounded-lg p-4">
                  <Award className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold text-primary">Mahavastu Certified</p>
                    <p className="text-sm text-gray-600">Aacharya Degree</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white/80 rounded-lg p-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold text-primary">15+ Years</p>
                    <p className="text-sm text-gray-600">Experience</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section ref={ref} className="py-16" style={{ backgroundColor: 'hsl(280 25% 85%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">
              Journey of Excellence
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Every milestone in our journey has been a step towards mastering the ancient wisdom 
              and making it accessible to modern families.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'md:col-start-2 md:text-left' : 'md:text-right'} 
                    text-center md:text-left`}>
                    <div className="bg-white/90 rounded-2xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The principles that guide every consultation and recommendation we provide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center bg-white/90 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;