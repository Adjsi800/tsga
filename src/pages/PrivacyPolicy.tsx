
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Privacy Policy | GiftOptima</title>
        <meta name="description" content="Learn about GiftOptima's privacy policy and how we protect your personal information." />
        <link rel="canonical" href="https://giftoptima.netlify.app/privacy-policy" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-32 pb-20">
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">1. Introduction</h2>
              <p>At GiftOptima, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">2. Information We Collect</h2>
              <p>We may collect several types of information from and about users of our website, including:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Personal information (such as name, email address, and payment information)</li>
                <li>Information about your internet connection and the equipment you use to access our website</li>
                <li>Usage details and browsing history on our website</li>
                <li>Transaction history and gift card details</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Process transactions and deliver gift cards</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Improve our website and services</li>
                <li>Send promotional emails about new products or special offers</li>
                <li>Protect against fraudulent transactions</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">4. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">5. Cookies</h2>
              <p>Our website uses cookies to enhance your browsing experience. You can set your browser to refuse cookies, but some parts of our website may not function properly without them.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">6. Third-Party Disclosure</h2>
              <p>We do not sell, trade, or transfer your personally identifiable information to third parties without your consent, except as required to fulfill services (such as payment processing) or comply with legal requirements.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">7. Your Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>The right to access your personal data</li>
                <li>The right to correct inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to restrict processing of your data</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">8. Changes to This Policy</h2>
              <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">9. Contact Us</h2>
              <p>If you have any questions about this privacy policy, please contact us at:</p>
              <p className="mb-6">
                Email: <a href="mailto:privacy@giftoptima.com" className="text-giftcard-blue hover:underline">privacy@giftoptima.com</a><br />
                Address: 1234 Gift Card Lane, New York, NY 10001<br />
                Phone: (123) 456-7890
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
