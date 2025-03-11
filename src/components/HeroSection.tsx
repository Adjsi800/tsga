
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className={cn("relative overflow-hidden pt-32 pb-20", className)}>
      {/* Background elements */}
      <div className="absolute top-20 right-0 w-1/2 h-1/2 bg-giftcard-lightBlue rounded-full filter blur-3xl opacity-40 animate-pulse-soft" />
      <div className="absolute bottom-0 left-10 w-1/3 h-1/3 bg-primary/5 rounded-full filter blur-3xl opacity-40 -z-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium text-giftcard-blue bg-giftcard-lightBlue rounded-full animate-fade-in">
            Premium Gift Card Solutions
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
            The Perfect Gift for <span className="text-giftcard-blue">Every Occasion</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Discover our exclusive collection of gift cards for all your giving needs. 
            Thoughtfully designed, easy to purchase, and guaranteed to delight.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Link 
              to="/categories" 
              className="inline-flex items-center justify-center px-6 py-3 bg-giftcard-blue text-white font-medium rounded-lg transition-transform duration-300 hover:scale-105 shadow-sm"
            >
              Explore Gift Cards
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-giftcard-blue font-medium border border-giftcard-blue/20 rounded-lg transition-colors duration-300 hover:bg-giftcard-lightBlue"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
