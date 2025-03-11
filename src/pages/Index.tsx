
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import FeaturedCards from '@/components/FeaturedCards';
import CardCategory from '@/components/CardCategory';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>GiftOptima - Premium Gift Card Solutions</title>
        <meta name="description" content="Discover our exclusive collection of premium gift cards for all your giving needs. Find the perfect gift for every occasion." />
        <meta name="keywords" content="gift cards, digital gift cards, gift card solutions, gift card balance, retail gift cards, restaurant gift cards" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://giftoptima.com/" />
        <meta property="og:title" content="GiftOptima - Premium Gift Card Solutions" />
        <meta property="og:description" content="Discover our exclusive collection of premium gift cards for all your giving needs." />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://giftoptima.com/" />
        <meta property="twitter:title" content="GiftOptima - Premium Gift Card Solutions" />
        <meta property="twitter:description" content="Discover our exclusive collection of premium gift cards for all your giving needs." />
        <meta property="twitter:image" content="/og-image.png" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="GiftOptima" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://giftoptima.com/" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturedCards />
        <CardCategory />
        
        {/* Benefits Section */}
        <section className="py-20 bg-giftcard-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-giftcard-blue bg-giftcard-lightBlue rounded-full">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                The GiftOptima Advantage
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                We make giving gift cards simple, secure, and special
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Secure Transactions',
                  description: 'Our platform uses industry-leading security protocols to ensure your information is always protected.',
                },
                {
                  title: 'Instant Delivery',
                  description: 'Digital gift cards are delivered instantly to your recipient\'s email, making last-minute gifts a breeze.',
                },
                {
                  title: 'Premium Selection',
                  description: 'We offer gift cards from the world\'s top brands, ensuring there\'s something for everyone on your list.',
                }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-2xl shadow-card animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-12 w-12 flex items-center justify-center bg-giftcard-lightBlue rounded-xl text-giftcard-blue mb-6">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-foreground/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-giftcard-blue/5 to-giftcard-blue/10 z-0" />
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-giftcard-lightBlue rounded-full filter blur-3xl opacity-40" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Ready to Find Your Perfect Gift Card?
              </h2>
              <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                Browse our extensive collection of premium gift cards and make someone's day special.
              </p>
              <a 
                href="/categories"
                className="inline-flex items-center justify-center px-8 py-4 bg-giftcard-blue text-white font-medium rounded-lg transition-transform duration-300 hover:scale-105 shadow-sm"
              >
                Explore All Gift Cards
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
