
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home, ArrowLeft } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Page Not Found | GiftOptima</title>
        <meta name="description" content="The page you are looking for could not be found. Return to the GiftOptima homepage to browse our gift card collection." />
        <meta name="robots" content="noindex, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://giftoptima.com/404" />
        <meta property="og:title" content="Page Not Found | GiftOptima" />
        <meta property="og:description" content="The page you are looking for could not be found." />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://giftoptima.com/404" />
        <meta property="twitter:title" content="Page Not Found | GiftOptima" />
        <meta property="twitter:description" content="The page you are looking for could not be found." />
        
        {/* Canonical - pointing to homepage as this is a 404 */}
        <link rel="canonical" href="https://giftoptima.com/" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="text-center max-w-md mx-auto py-16">
          <div className="bg-giftcard-lightBlue h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl font-bold text-giftcard-blue">404</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-foreground/70 mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-6 py-3 bg-giftcard-blue text-white font-medium rounded-lg transition-transform duration-300 hover:scale-105 shadow-sm"
            >
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-giftcard-blue font-medium border border-giftcard-blue/20 rounded-lg transition-colors duration-300 hover:bg-giftcard-lightBlue"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
