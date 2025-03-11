
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ShoppingCart, Share2, Heart } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { getGiftCardById, getGiftCardsByCategory } from '@/data/giftcards';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';

const CardDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const card = getGiftCardById(id || '');
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  
  // If card not found, redirect to categories page
  if (!card) {
    navigate('/categories');
    return null;
  }
  
  const similarCards = getGiftCardsByCategory(card.category)
    .filter(c => c.id !== card.id)
    .slice(0, 4);
  
  const handleAddToCart = () => {
    if (!selectedValue) {
      toast({
        title: "Please select a value",
        description: "Select a gift card value before adding to cart",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Added to cart",
      description: `${card.title} ($${selectedValue}) has been added to your cart`,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{card.title} Gift Card | GiftOptima</title>
        <meta name="description" content={`${card.description} Purchase ${card.title} gift cards online with secure delivery.`} />
        <meta name="keywords" content={`${card.title}, gift card, ${card.category} gift card, buy gift cards, digital gift card`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://giftoptima.com/card/${card.id}`} />
        <meta property="og:title" content={`${card.title} Gift Card | GiftOptima`} />
        <meta property="og:description" content={card.description} />
        <meta property="og:image" content={card.imageUrl} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://giftoptima.com/card/${card.id}`} />
        <meta property="twitter:title" content={`${card.title} Gift Card | GiftOptima`} />
        <meta property="twitter:description" content={card.description} />
        <meta property="twitter:image" content={card.imageUrl} />
        
        {/* Product Specific */}
        <meta property="product:price:amount" content={card.valueOptions[0].toString()} />
        <meta property="product:price:currency" content="USD" />
        <meta property="product:availability" content="in stock" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="GiftOptima" />
        
        {/* Canonical */}
        <link rel="canonical" href={`https://giftoptima.com/card/${card.id}`} />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link 
            to="/categories" 
            className="inline-flex items-center text-foreground/70 hover:text-giftcard-blue mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all gift cards
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="animate-fade-in">
              <div className="bg-white p-6 rounded-2xl shadow-card overflow-hidden">
                <img 
                  src={card.imageUrl} 
                  alt={card.title}
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-giftcard-blue bg-giftcard-lightBlue rounded-full">
                {card.category.charAt(0).toUpperCase() + card.category.slice(1)}
              </span>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{card.title}</h1>
              
              <p className="text-foreground/70 mb-8">{card.description}</p>
              
              <div className="mb-8">
                <h3 className="font-medium mb-3">Select Gift Card Value</h3>
                <div className="flex flex-wrap gap-3">
                  {card.valueOptions.map((value) => (
                    <button
                      key={value}
                      onClick={() => setSelectedValue(value)}
                      className={cn(
                        "px-5 py-3 border rounded-lg transition-all duration-300",
                        selectedValue === value
                          ? "border-giftcard-blue bg-giftcard-lightBlue text-giftcard-blue font-medium"
                          : "border-border hover:border-giftcard-blue/30 hover:bg-giftcard-lightBlue/50"
                      )}
                    >
                      ${value}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-medium mb-3">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center border border-border rounded-lg hover:border-giftcard-blue/30 transition-colors duration-300"
                  >
                    -
                  </button>
                  <span className="w-10 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => Math.min(10, q + 1))}
                    className="w-10 h-10 flex items-center justify-center border border-border rounded-lg hover:border-giftcard-blue/30 transition-colors duration-300"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="w-full py-3 bg-giftcard-blue text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-giftcard-blue/90 transition-colors duration-300"
              >
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </button>
              
              <div className="flex items-center justify-between mt-6">
                <button className="flex items-center text-foreground/70 hover:text-giftcard-blue transition-colors duration-300">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </button>
                <button className="flex items-center text-foreground/70 hover:text-red-500 transition-colors duration-300">
                  <Heart className="h-4 w-4 mr-2" />
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          
          {similarCards.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-8">Similar Gift Cards</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {similarCards.map(similarCard => (
                  <Link
                    key={similarCard.id}
                    to={`/card/${similarCard.id}`}
                    className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-shadow duration-300"
                  >
                    <img
                      src={similarCard.imageUrl}
                      alt={similarCard.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-medium">{similarCard.title}</h3>
                      <p className="text-sm text-foreground/70 mt-1 truncate">
                        {similarCard.description}
                      </p>
                      <div className="mt-3 text-sm font-medium text-giftcard-blue">
                        From ${Math.min(...similarCard.valueOptions)}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CardDetail;
