import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Star, Award, Users, BookOpen } from 'lucide-react';

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const achievements = [
    {
      icon: Award,
      number: '15+',
      label: 'Years of Experience',
      description: 'Dedicated service in astrology and vastu'
    },
    {
      icon: Users,
      number: '1000+',
      label: 'Happy Clients',
      description: 'Lives transformed through our guidance'
    },
    {
      icon: Star,
      number: '500+',
      label: 'Successful Projects',
      description: 'Residential and commercial transformations'
    },
    {
      icon: BookOpen,
      number: '100+',
      label: 'Workshops Conducted',
      description: 'Spreading vastu knowledge and wisdom'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
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
      style={{ backgroundColor: 'hsl(280 25% 85%)' }} // astro-lilac
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 right-10"
        >
          <Star className="h-16 w-16 text-primary" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 left-10"
        >
          <BookOpen className="h-12 w-12 text-primary" />
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-6">
            About Shri Vishal Singla
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Mahavastu Certified Aacharya and founder of Vishalaksha®, 
            mentored by the renowned Khushdeep Bansal of Mahavastu.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative max-w-md mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative aspect-[4/5] bg-gradient-to-br from-primary/20 to-golden-aura/20 rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* //todo: replace with actual photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-golden-aura/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Users className="h-20 w-20 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-semibold">Shri Vishal Singla</p>
                    <p className="text-sm opacity-90">Placeholder Photo</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-golden-aura rounded-full flex items-center justify-center shadow-lg"
              >
                <Star className="h-6 w-6 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Biography */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p className="leading-relaxed">
                With over 15 years of dedicated practice in the ancient sciences of astrology and vastu shastra, 
                Shri Vishal Singla has emerged as a trusted guide for thousands seeking harmony and prosperity 
                in their lives.
              </p>
              <p className="leading-relaxed">
                Under the mentorship of the legendary Khushdeep Bansal from Mahavastu, he has mastered the 
                intricate principles of vastu that blend seamlessly with astrological insights, creating 
                transformative solutions for modern living.
              </p>
              <p className="leading-relaxed">
                His holistic approach combines traditional wisdom with contemporary understanding, making 
                ancient practices accessible and relevant for today's lifestyle challenges.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-4 py-2 bg-white/80 rounded-full text-sm font-medium text-primary">
                Mahavastu Certified
              </div>
              <div className="px-4 py-2 bg-white/80 rounded-full text-sm font-medium text-primary">
                15+ Years Experience
              </div>
              <div className="px-4 py-2 bg-white/80 rounded-full text-sm font-medium text-primary">
                Astrology Expert
              </div>
            </div>

            <Button 
              className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
              data-testid="button-read-more-about"
            >
              Read Full Biography
            </Button>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div variants={itemVariants}>
          <h3 className="font-serif text-3xl font-bold text-center text-primary mb-12">
            Our Journey in Numbers
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-white/80 rounded-2xl shadow-lg backdrop-blur-sm"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4"
                >
                  <achievement.icon className="h-8 w-8 text-primary" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.5, type: 'spring', stiffness: 200 }}
                  className="text-3xl font-bold text-primary mb-2"
                >
                  {achievement.number}
                </motion.div>
                <h4 className="font-semibold text-gray-900 mb-2">{achievement.label}</h4>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;