import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Star, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Residential Vastu', path: '/residential' },
    { name: 'Commercial Vastu', path: '/commercial' },
    { name: 'Industrial Vastu', path: '/industrial' },
    { name: 'Yogdaan', path: '/yogdaan' },
    { name: 'Book Consultation', path: '/consultation' },
    { name: 'Our Process', path: '/process' },
  ];

  const isActive = (path: string) => location === path;

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Star className="h-8 w-8 text-golden-aura fill-current" />
              <div>
                <h1 className="font-serif text-2xl font-bold text-primary">Vishalaksha®</h1>
                <p className="text-xs text-muted-foreground font-sans">Astrology & Vastu Shastra</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path) 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-accent"
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-border"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path} data-testid={`mobile-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.path) 
                          ? 'bg-primary text-primary-foreground' 
                          : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                      }`}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;