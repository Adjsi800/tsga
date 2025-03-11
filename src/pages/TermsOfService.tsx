
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Terms of Service | GiftOptima</title>
        <meta name="description" content="Read GiftOptima's terms of service to understand the rules and guidelines for using our gift card platform." />
        <link rel="canonical" href="https://giftoptima.netlify.app/terms-of-service" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow pt-32 pb-20">
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">1. Acceptance of Terms</h2>
              <p>By accessing or using the GiftOptima website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">2. Use of Services</h2>
              <p>GiftOptima provides a platform for purchasing and managing gift cards. By using our services, you agree to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Provide accurate and complete information when creating an account or making a purchase</li>
                <li>Maintain the security of your account information</li>
                <li>Use the service only for lawful purposes and in accordance with these terms</li>
                <li>Not engage in any activity that interferes with or disrupts the service</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">3. Gift Card Purchases</h2>
              <p>When purchasing gift cards through GiftOptima:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>All sales are final and non-refundable unless otherwise required by law</li>
                <li>Gift cards are subject to the terms and conditions of the issuing retailer</li>
                <li>GiftOptima is not responsible for lost, stolen, or damaged gift cards after delivery</li>
                <li>Delivery times for physical gift cards are estimates and not guaranteed</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">4. Intellectual Property</h2>
              <p>All content on the GiftOptima website, including text, graphics, logos, images, and software, is the property of GiftOptima or its content suppliers and is protected by copyright and other intellectual property laws. You may not use, reproduce, distribute, or create derivative works from this content without explicit permission.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">5. User Accounts</h2>
              <p>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">6. Limitation of Liability</h2>
              <p>GiftOptima is not liable for any damages of any kind arising from the use of our service, including but not limited to direct, indirect, incidental, punitive, and consequential damages. In no event shall our liability exceed the amount paid by you for the specific gift card purchase in question.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">7. Indemnification</h2>
              <p>You agree to indemnify and hold harmless GiftOptima and its affiliates, officers, agents, and employees from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of the service, your violation of these terms, or your violation of any rights of another.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">8. Modifications to Service</h2>
              <p>GiftOptima reserves the right to modify or discontinue, temporarily or permanently, the service with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">9. Governing Law</h2>
              <p>These terms shall be governed by and construed in accordance with the laws of the state of New York, without regard to its conflict of law provisions.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">10. Changes to Terms</h2>
              <p>We reserve the right to update or change these terms at any time. The most current version will be posted on our website with the effective date.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">11. Contact Us</h2>
              <p>If you have any questions about these terms, please contact us at:</p>
              <p className="mb-6">
                Email: <a href="mailto:legal@giftoptima.com" className="text-giftcard-blue hover:underline">legal@giftoptima.com</a><br />
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

export default TermsOfService;
