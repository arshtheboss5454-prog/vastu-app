import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Star, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Yogdaan', path: '/yogdaan' },
  ];

  const services = [
    { name: 'Residential Vastu', path: '/residential' },
    { name: 'Commercial Vastu', path: '/commercial' },
    { name: 'Industrial Vastu', path: '/industrial' },
    { name: 'Book Consultation', path: '/consultation' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: 'hsl(270 30% 25%)' }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 right-20"
        >
          <Star className="h-12 w-12 text-golden-aura" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 left-20"
        >
          <Star className="h-8 w-8 text-sacred-orange" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Star className="h-8 w-8 text-golden-aura fill-current" />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">Vishalaksha®</h3>
                  <p className="text-sm text-gray-300">Astrology & Vastu Shastra</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Transforming lives through the ancient wisdom of astrology-based vastu consultations. 
                Guided by Mahavastu principles.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 hover:bg-golden-aura/20 rounded-lg flex items-center justify-center transition-colors"
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="h-5 w-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-serif text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="text-gray-300 hover:text-golden-aura transition-colors cursor-pointer"
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-serif text-lg font-semibold text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.path}>
                    <Link href={service.path} data-testid={`footer-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="text-gray-300 hover:text-golden-aura transition-colors cursor-pointer"
                      >
                        {service.name}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-serif text-lg font-semibold text-white mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-golden-aura mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">+91 98765 43210</p>
                    <p className="text-sm text-gray-400">Mon - Sat: 9 AM - 7 PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-golden-aura mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">info@vishalaksha.com</p>
                    <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-golden-aura mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">New Delhi, India</p>
                    <p className="text-sm text-gray-400">Available for pan-India consultations</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Vishalaksha®. All rights reserved. | Mahavastu Certified Aacharya
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-golden-aura transition-colors" data-testid="link-privacy">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-golden-aura transition-colors" data-testid="link-terms">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;