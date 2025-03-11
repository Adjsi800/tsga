
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GiftCard, getFeaturedGiftCards } from '@/data/giftcards';
import { cn } from '@/lib/utils';

interface FeaturedCardsProps {
  className?: string;
  limit?: number;
}

const FeaturedCards: React.FC<FeaturedCardsProps> = ({ className, limit = 4 }) => {
  const featuredCards = getFeaturedGiftCards().slice(0, limit);

  return (
    <section className={cn("py-20 overflow-hidden", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-giftcard-blue bg-giftcard-lightBlue rounded-full">
            Featured Selection
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Most Popular Gift Cards
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover our exclusive collection of premium gift cards. Perfect for any occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCards.map((card, index) => (
            <FeaturedCardItem 
              key={card.id} 
              card={card} 
              index={index} 
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            to="/categories" 
            className="inline-flex items-center justify-center text-giftcard-blue hover:text-giftcard-blue/80 font-medium transition-colors duration-300"
          >
            View all gift cards
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

interface FeaturedCardItemProps {
  card: GiftCard;
  index: number;
}

const FeaturedCardItem: React.FC<FeaturedCardItemProps> = ({ card, index }) => {
  return (
    <Link 
      to={`/card/${card.id}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-card card-hover animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={card.imageUrl} 
          alt={card.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-giftcard-blue transition-colors duration-300">
          {card.title}
        </h3>
        <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
          {card.description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <span className="text-xs font-medium text-giftcard-blue bg-giftcard-lightBlue px-2 py-1 rounded-full">
            {card.category.charAt(0).toUpperCase() + card.category.slice(1)}
          </span>
          <span className="text-sm text-foreground/60">
            From ${Math.min(...card.valueOptions)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCards;
