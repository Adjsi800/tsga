
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Frequently Asked Questions | GiftOptima</title>
        <meta name="description" content="Find answers to common questions about GiftOptima's gift card services, delivery options, redemption process, and more." />
        <link rel="canonical" href="https://giftoptima.netlify.app/faq" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-32 pb-20">
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-giftcard-blue bg-giftcard-lightBlue rounded-full">
                Support
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Everything you need to know about GiftOptima and our gift cards
              </p>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold mb-6">Gift Card Basics</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "What is a gift card?",
                    answer: "A gift card is a prepaid card containing a specific amount of money that can be used for purchases at specific retailers, restaurants, or service providers. Gift cards are a popular gift option because they allow recipients to choose exactly what they want."
                  },
                  {
                    question: "What types of gift cards does GiftOptima offer?",
                    answer: "GiftOptima offers a wide range of gift cards across multiple categories including retail, restaurants, entertainment, travel, and online services. We partner with many popular brands to provide you with extensive options."
                  },
                  {
                    question: "Are digital and physical gift cards the same value?",
                    answer: "Yes, digital and physical gift cards hold the same monetary value. The difference is in the delivery method - digital cards are delivered via email, while physical cards are mailed to a specified address."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-border">
                    <h3 className="text-lg font-semibold mb-3 flex items-start">
                      <Check className="h-5 w-5 text-giftcard-blue mr-2 flex-shrink-0 mt-0.5" />
                      {item.question}
                    </h3>
                    <p className="text-foreground/70 pl-7">{item.answer}</p>
                  </div>
                ))}
              </div>
              
              <h2 className="text-2xl font-semibold mb-6 mt-12">Purchasing Gift Cards</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "How do I purchase a gift card?",
                    answer: "Purchasing a gift card is simple. Browse our collection, select the brand you want, choose the value, and proceed to checkout. You can choose between digital delivery via email or a physical card shipped to the recipient."
                  },
                  {
                    question: "Can I customize my gift card?",
                    answer: "Yes, you can add a personalized message to your gift card during the checkout process. For digital gift cards, you can also select a delivery date if you want the card to arrive on a specific occasion."
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay. All transactions are processed securely through our payment processors."
                  },
                  {
                    question: "Are there any fees when purchasing gift cards?",
                    answer: "GiftOptima does not charge any additional fees when purchasing gift cards. The price you see is the price you pay, plus any applicable sales tax or shipping fees for physical cards."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-border">
                    <h3 className="text-lg font-semibold mb-3 flex items-start">
                      <Check className="h-5 w-5 text-giftcard-blue mr-2 flex-shrink-0 mt-0.5" />
                      {item.question}
                    </h3>
                    <p className="text-foreground/70 pl-7">{item.answer}</p>
                  </div>
                ))}
              </div>
              
              <h2 className="text-2xl font-semibold mb-6 mt-12">Delivery and Redemption</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "How quickly will my gift card be delivered?",
                    answer: "Digital gift cards are delivered instantly via email. Physical gift cards are typically shipped within 1-2 business days and delivered according to the shipping method selected at checkout."
                  },
                  {
                    question: "Can I send a gift card to someone outside the United States?",
                    answer: "Yes, digital gift cards can be sent to recipients worldwide. However, please note that some brands may have regional restrictions on where their gift cards can be redeemed."
                  },
                  {
                    question: "How do I redeem my gift card?",
                    answer: "Redemption instructions are included with every gift card. Generally, for online retailers, you'll enter the gift card number and PIN (if applicable) at checkout. For in-store redemption, you'll present the physical card or show the digital card on your mobile device."
                  },
                  {
                    question: "What if the recipient loses their gift card?",
                    answer: "Digital gift cards can be resent at any time from your account dashboard. For physical gift cards, the policy varies by brand. Please contact our customer support team if a physical gift card is lost."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-border">
                    <h3 className="text-lg font-semibold mb-3 flex items-start">
                      <Check className="h-5 w-5 text-giftcard-blue mr-2 flex-shrink-0 mt-0.5" />
                      {item.question}
                    </h3>
                    <p className="text-foreground/70 pl-7">{item.answer}</p>
                  </div>
                ))}
              </div>
              
              <h2 className="text-2xl font-semibold mb-6 mt-12">Returns and Refunds</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "Are GiftOptima gift cards refundable?",
                    answer: "Once purchased, gift cards cannot be refunded. However, if you encounter any issues with your gift card, please contact our customer support team, and we'll work with you to resolve the issue."
                  },
                  {
                    question: "What if I receive a damaged physical gift card?",
                    answer: "If you receive a damaged physical gift card, please contact our customer support team immediately. We will verify your purchase and arrange for a replacement to be sent."
                  },
                  {
                    question: "Can I exchange my gift card for a different brand?",
                    answer: "Gift cards cannot be exchanged for different brands after purchase. Please ensure you select the correct brand before completing your purchase."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-border">
                    <h3 className="text-lg font-semibold mb-3 flex items-start">
                      <Check className="h-5 w-5 text-giftcard-blue mr-2 flex-shrink-0 mt-0.5" />
                      {item.question}
                    </h3>
                    <p className="text-foreground/70 pl-7">{item.answer}</p>
                  </div>
                ))}
              </div>
              
              <h2 className="text-2xl font-semibold mb-6 mt-12">Account and Security</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "Do I need an account to purchase gift cards?",
                    answer: "While you can make a purchase as a guest, creating an account allows you to track your orders, resend digital gift cards, and save your payment information for future purchases."
                  },
                  {
                    question: "How does GiftOptima protect my information?",
                    answer: "GiftOptima uses industry-standard security measures to protect your personal and payment information. All sensitive data is encrypted, and we regularly update our security protocols to ensure your information remains safe."
                  },
                  {
                    question: "What should I do if I suspect fraudulent activity on my account?",
                    answer: "If you notice any suspicious activity on your account, please contact our customer support team immediately. We recommend changing your password and reviewing your recent orders."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-border">
                    <h3 className="text-lg font-semibold mb-3 flex items-start">
                      <Check className="h-5 w-5 text-giftcard-blue mr-2 flex-shrink-0 mt-0.5" />
                      {item.question}
                    </h3>
                    <p className="text-foreground/70 pl-7">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-16 bg-giftcard-lightBlue p-8 rounded-2xl">
              <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
              <p className="text-foreground/70 mb-6">
                If you couldn't find the answer to your question, our customer support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:support@giftoptima.com" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-giftcard-blue text-white font-medium rounded-lg transition-transform duration-300 hover:scale-105 shadow-sm"
                >
                  Email Support
                </a>
                <a 
                  href="tel:+1234567890" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-giftcard-blue font-medium border border-giftcard-blue/20 rounded-lg transition-colors duration-300 hover:bg-giftcard-blue/5"
                >
                  Call Us: (123) 456-7890
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
