import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Star, Sparkles, Compass } from 'lucide-react';
import chakraImage from '@assets/image_1757934569513.png';

const HeroSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, hsl(270 30% 25%) 0%, hsl(240 35% 30%) 50%, hsl(210 45% 35%) 100%)' }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 left-20 text-golden-aura/20"
        >
          <Star className="h-8 w-8" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
          className="absolute top-40 right-20 text-sacred-orange/20"
        >
          <Sparkles className="h-6 w-6" />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 left-40 text-golden-aura/20"
        >
          <Compass className="h-10 w-10" />
        </motion.div>
      </div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-golden-aura/20 text-golden-aura text-sm font-medium backdrop-blur-sm">
                Mahavastu Certified Aacharya
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Transform Your Life with{' '}
              <span className="text-golden-aura">Ancient Wisdom</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl"
            >
              Experience the profound harmony of astrology-based vastu consultations. 
              Guided by Mahavastu's principles and blessed by cosmic energies.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="bg-golden-aura hover:bg-golden-aura/90 text-black font-semibold px-8 py-4"
                data-testid="button-book-consultation"
              >
                Book Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left"
            >
              <div>
                <div className="text-2xl font-bold text-golden-aura">1000+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-golden-aura">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-golden-aura">500+</div>
                <div className="text-sm text-gray-300">Transformations</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Mahavastu Chakra */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={inView ? { scale: 1, opacity: 1, rotate: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 200, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-golden-aura/20 to-sacred-orange/20 rounded-full blur-3xl"
              />
              <motion.img
                src={chakraImage}
                alt="Mahavastu Chakra"
                className="relative z-10 w-full max-w-md lg:max-w-lg h-auto rounded-full shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
                data-testid="img-chakra"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 border-2 border-golden-aura/30 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;