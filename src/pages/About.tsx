
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, Gift } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About GiftOptima | Premium Gift Card Solutions</title>
        <meta name="description" content="Learn about GiftOptima, your trusted source for premium gift cards. Discover our mission, values, and commitment to providing the perfect gift for every occasion." />
        <meta name="keywords" content="about giftoptima, gift card solutions, gift card retailer, premium gift cards, about us" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://giftoptima.com/about" />
        <meta property="og:title" content="About GiftOptima | Premium Gift Card Solutions" />
        <meta property="og:description" content="Learn about GiftOptima, your trusted source for premium gift cards." />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://giftoptima.com/about" />
        <meta property="twitter:title" content="About GiftOptima | Premium Gift Card Solutions" />
        <meta property="twitter:description" content="Learn about GiftOptima, your trusted source for premium gift cards." />
        <meta property="twitter:image" content="/og-image.png" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="GiftOptima" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://giftoptima.com/about" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-32 pb-20">
        {/* Hero Section */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-giftcard-blue bg-giftcard-lightBlue rounded-full">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                About GiftOptima
              </h1>
              <p className="text-lg text-foreground/70">
                We're dedicated to making gift-giving simple, thoughtful, and memorable
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-foreground/70 mb-6">
                  At GiftOptima, our mission is to transform the way people give and receive gifts. We believe that the perfect gift is one that offers choice, convenience, and a touch of luxury.
                </p>
                <p className="text-foreground/70 mb-6">
                  We've curated an exclusive collection of premium gift cards from the world's most respected brands, making it easy to find the perfect gift for any occasion, whether it's a birthday, holiday, anniversary, or just because.
                </p>
                <p className="text-foreground/70">
                  Our platform is designed with simplicity and elegance in mind, ensuring that every step of your gift-giving journey is as pleasant as the moment your recipient opens their gift.
                </p>
              </div>
              
              <div className="relative animate-fade-in-right h-80 rounded-2xl overflow-hidden shadow-card">
                <img 
                  src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1000&auto=format&fit=crop" 
                  alt="Gift cards collection" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                  <div className="p-8">
                    <span className="text-white text-xl font-semibold">Thoughtfully Curated Gifts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-giftcard-gray">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-giftcard-blue bg-giftcard-lightBlue rounded-full">
                What We Stand For
              </span>
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-foreground/70">
                These principles guide everything we do at GiftOptima
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Excellence',
                  description: 'We strive for excellence in every aspect of our service, from the brands we partner with to the user experience on our platform.',
                },
                {
                  title: 'Simplicity',
                  description: 'We believe that gift-giving should be simple and stress-free. Our intuitive platform makes finding and sending the perfect gift card effortless.',
                },
                {
                  title: 'Trust',
                  description: 'We\'ve built our business on trust and transparency. When you purchase a gift card from GiftOptima, you can be confident in its authenticity and value.',
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-2xl shadow-card animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-12 w-12 flex items-center justify-center bg-giftcard-lightBlue rounded-xl text-giftcard-blue mb-6">
                    <Gift className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-giftcard-blue bg-giftcard-lightBlue rounded-full">
                FAQs
              </span>
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-foreground/70">
                Everything you need to know about GiftOptima and our gift cards
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: 'How do I purchase a gift card?',
                  answer: 'Purchasing a gift card is simple. Browse our collection, select the brand you want, choose the value, and proceed to checkout. You can choose between digital delivery via email or a physical card shipped to the recipient.'
                },
                {
                  question: 'Are GiftOptima gift cards refundable?',
                  answer: 'Once purchased, gift cards cannot be refunded. However, if you encounter any issues with your gift card, please contact our customer support team, and we\'ll work with you to resolve the issue.'
                },
                {
                  question: 'How quickly will my gift card be delivered?',
                  answer: 'Digital gift cards are delivered instantly via email. Physical gift cards are typically shipped within 1-2 business days and delivered according to the shipping method selected at checkout.'
                },
                {
                  question: 'Can I send a gift card to someone outside the United States?',
                  answer: 'Yes, digital gift cards can be sent to recipients worldwide. However, please note that some brands may have regional restrictions on where their gift cards can be redeemed.'
                },
                {
                  question: 'What if the recipient loses their gift card?',
                  answer: 'Digital gift cards can be resent at any time from your account dashboard. For physical gift cards, the policy varies by brand. Please contact our customer support team if a physical gift card is lost.'
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="mb-6 p-6 bg-white rounded-xl shadow-sm border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-lg font-semibold mb-3 flex items-start">
                    <Check className="h-5 w-5 text-giftcard-blue mr-2 flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-foreground/70 pl-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-giftcard-blue/5 to-giftcard-blue/10 z-0" />
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-giftcard-lightBlue rounded-full filter blur-3xl opacity-40" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Find the Perfect Gift?
              </h2>
              <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                Browse our collection of premium gift cards and make someone's day special.
              </p>
              <a 
                href="/categories"
                className="inline-flex items-center justify-center px-8 py-4 bg-giftcard-blue text-white font-medium rounded-lg transition-transform duration-300 hover:scale-105 shadow-sm"
              >
                Explore Gift Cards
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
