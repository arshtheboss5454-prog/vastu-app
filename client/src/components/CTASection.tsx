import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Star, Sparkles, Phone } from 'lucide-react';

const CTASection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section 
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, hsl(45 60% 70%) 0%, hsl(20 55% 75%) 50%, hsl(330 35% 88%) 100%)'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 left-10 text-white/20"
        >
          <Star className="h-16 w-16" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360, y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-20 text-white/20"
        >
          <Sparkles className="h-12 w-12" />
        </motion.div>
        <motion.div
          animate={{ rotate: 360, x: [0, 10, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-1/3 text-white/20"
        >
          <Star className="h-10 w-10" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-8"
        >
          <Star className="h-10 w-10 text-white" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Ready to Transform Your Life?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto"
        >
          Join thousands who have discovered harmony, prosperity, and peace through our 
          expert astrology-based vastu consultations. Your journey to a better life starts here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 shadow-2xl"
            data-testid="button-book-now"
          >
            <Phone className="mr-2 h-5 w-5" />
            Book Your Consultation Now
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4"
            data-testid="button-call-us"
          >
            Call Us: +91 98765 43210
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 flex justify-center items-center space-x-8 text-white/80"
        >
          <div className="text-center">
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm">Support Available</div>
          </div>
          <div className="w-px h-12 bg-white/30" />
          <div className="text-center">
            <div className="text-2xl font-bold">100%</div>
            <div className="text-sm">Satisfaction Guaranteed</div>
          </div>
          <div className="w-px h-12 bg-white/30" />
          <div className="text-center">
            <div className="text-2xl font-bold">15+</div>
            <div className="text-sm">Years of Excellence</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;