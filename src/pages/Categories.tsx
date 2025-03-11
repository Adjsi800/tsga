import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { giftCards, giftCardCategories, GiftCard } from '@/data/giftcards';
import { cn } from '@/lib/utils';

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredCards, setFilteredCards] = useState<GiftCard[]>(giftCards);

  // Initialize from URL params
  useEffect(() => {
    const category = searchParams.get('category');
    const query = searchParams.get('q');
    
    if (category) {
      setActiveCategory(category);
    }
    
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  // Filter cards when category or search query changes
  useEffect(() => {
    let filtered = [...giftCards];
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(card => card.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const lowercaseQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(card => 
        card.title.toLowerCase().includes(lowercaseQuery) || 
        card.description.toLowerCase().includes(lowercaseQuery)
      );
    }
    
    setFilteredCards(filtered);
    
    // Update URL parameters
    const newParams = new URLSearchParams();
    if (activeCategory !== 'all') {
      newParams.set('category', activeCategory);
    }
    if (searchQuery.trim()) {
      newParams.set('q', searchQuery);
    }
    setSearchParams(newParams, { replace: true });
  }, [activeCategory, searchQuery, setSearchParams]);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSearchQuery('');
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the useEffect
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Gift Cards - Browse Our Premium Collection | GiftOptima</title>
        <meta name="description" content="Browse our extensive collection of premium gift cards. Find the perfect gift card for any occasion from top brands in retail, dining, entertainment, and more." />
        <meta name="keywords" content="gift cards, gift card collection, retail gift cards, restaurant gift cards, entertainment gift cards, travel gift cards, browse gift cards" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://giftoptima.com/categories" />
        <meta property="og:title" content="Gift Cards - Browse Our Premium Collection | GiftOptima" />
        <meta property="og:description" content="Browse our extensive collection of premium gift cards." />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://giftoptima.com/categories" />
        <meta property="twitter:title" content="Gift Cards - Browse Our Premium Collection | GiftOptima" />
        <meta property="twitter:description" content="Browse our extensive collection of premium gift cards." />
        <meta property="twitter:image" content="/og-image.png" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="GiftOptima" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://giftoptima.com/categories" />
      </Helmet>
      
      
        <NavBar />
        
        <main className="flex-grow pt-32 pb-20">
          {/* Header */}
          <section className="pb-12">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-giftcard-blue bg-giftcard-lightBlue rounded-full">
                  Discover
                </span>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                  Browse Gift Cards
                </h1>
                <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                  Find the perfect gift card from our extensive collection
                </p>
              </div>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search gift cards..."
                    className="w-full py-3 px-5 pl-12 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-giftcard-blue/20 transition-all duration-300"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/40 h-5 w-5" />
                </form>
              </div>

              {/* Categories Filter */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                    activeCategory === 'all'
                      ? "bg-giftcard-blue text-white shadow-sm"
                      : "bg-white text-foreground/70 hover:bg-giftcard-lightBlue hover:text-giftcard-blue border border-border"
                  )}
                >
                  All Cards
                </button>
                
                {giftCardCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={cn(
                      "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                      activeCategory === category.id
                        ? "bg-giftcard-blue text-white shadow-sm"
                        : "bg-white text-foreground/70 hover:bg-giftcard-lightBlue hover:text-giftcard-blue border border-border"
                    )}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Gift Card Grid */}
          <section>
            <div className="container mx-auto px-4">
              {filteredCards.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredCards.map((card, index) => (
                      <GiftCardItem 
                        key={card.id} 
                        card={card} 
                        index={index} 
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl font-medium mb-2">No gift cards found</p>
                  <p className="text-foreground/70 mb-6">
                    Try adjusting your search or browse a different category
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory('all');
                      setSearchQuery('');
                    }}
                    className="px-4 py-2 bg-giftcard-blue text-white rounded-lg transition-transform duration-300 hover:scale-105"
                  >
                    Show all gift cards
                  </button>
                </div>
              )}
            </div>
          </section>
        </main>
        
        <Footer />
      
    </div>
  );
};

interface GiftCardItemProps {
  card: GiftCard;
  index: number;
}

const GiftCardItem: React.FC<GiftCardItemProps> = ({ card, index }) => {
  return (
    <Link 
      to={`/card/${card.id}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-card card-hover animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={card.imageUrl} 
          alt={card.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {card.popular && (
          <span className="absolute top-4 right-4 bg-giftcard-blue/90 text-white text-xs px-2 py-1 rounded-full">
            Popular
          </span>
        )}
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

export default Categories;
