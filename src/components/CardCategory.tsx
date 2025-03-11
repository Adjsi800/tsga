
import React from 'react';
import { Link } from 'react-router-dom';
import { giftCardCategories, getGiftCardsByCategory } from '@/data/giftcards';
import { cn } from '@/lib/utils';

interface CardCategoryProps {
  className?: string;
}

const CardCategory: React.FC<CardCategoryProps> = ({ className }) => {
  return (
    <section className={cn("py-20", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-giftcard-blue bg-giftcard-lightBlue rounded-full">
            Discover
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Find the perfect gift card for any interest or passion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {giftCardCategories.map((category, index) => (
            <CategoryCard 
              key={category.id}
              category={category}
              count={getGiftCardsByCategory(category.id).length}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    description: string;
  };
  count: number;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, count, index }) => {
  return (
    <Link 
      to={`/categories?category=${category.id}`}
      className="group flex flex-col h-full bg-white rounded-2xl p-8 shadow-card card-hover animate-fade-in relative overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute top-0 right-0 h-32 w-32 bg-giftcard-lightBlue rounded-full -translate-y-1/2 translate-x-1/2 opacity-30 group-hover:scale-125 transition-transform duration-700" />
      
      <h3 className="text-xl font-semibold mb-3 group-hover:text-giftcard-blue transition-colors duration-300 relative z-10">
        {category.name}
      </h3>
      
      <p className="text-foreground/70 mb-6 relative z-10">
        {category.description}
      </p>
      
      <div className="mt-auto flex justify-between items-center relative z-10">
        <span className="text-sm font-medium text-giftcard-blue">
          View all {category.name}
        </span>
        <span className="px-2 py-1 bg-giftcard-lightBlue text-giftcard-blue text-xs font-medium rounded-full">
          {count} cards
        </span>
      </div>
    </Link>
  );
};

export default CardCategory;
