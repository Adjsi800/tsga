
import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Instagram, Twitter, Facebook, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("bg-giftcard-gray py-16", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center space-x-2 text-giftcard-blue mb-4">
              <CreditCard className="h-6 w-6" />
              <span className="font-semibold text-xl">GiftOptima</span>
            </Link>
            <p className="text-sm text-foreground/70 mb-6">
              Discover our exclusive collection of premium gift cards for all your giving needs.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-giftcard-darkGray hover:text-giftcard-blue transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-giftcard-darkGray hover:text-giftcard-blue transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-giftcard-darkGray hover:text-giftcard-blue transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-base mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Gift Cards', path: '/categories' },
                { name: 'About', path: '/about' },
                { name: 'FAQ', path: '/faq' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-sm text-foreground/70 hover:text-giftcard-blue transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-medium text-base mb-4">Categories</h3>
            <ul className="space-y-3">
              {['Retail', 'Restaurants', 'Entertainment', 'Travel', 'Online Services'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/categories?category=${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-foreground/70 hover:text-giftcard-blue transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-base mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-sm text-foreground/70">
                1234 Gift Card Lane<br />
                New York, NY 10001
              </li>
              <li>
                <a 
                  href="mailto:info@giftoptima.com" 
                  className="text-sm text-foreground/70 hover:text-giftcard-blue transition-colors duration-300"
                >
                  info@giftoptima.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+1234567890" 
                  className="text-sm text-foreground/70 hover:text-giftcard-blue transition-colors duration-300"
                >
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} GiftOptima. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <Link to="/privacy-policy" className="text-xs text-foreground/60 hover:text-giftcard-blue transition-colors duration-300 mb-2 md:mb-0">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-xs text-foreground/60 hover:text-giftcard-blue transition-colors duration-300 mb-2 md:mb-0">
              Terms of Service
            </Link>
            <a 
              href="https://amexgiftcardbalances.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-foreground/60 hover:text-giftcard-blue transition-colors duration-300 flex items-center"
            >
              Powered by <span className="font-medium ml-1">Amex Gift Card Balances</span>
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
