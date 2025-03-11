
export interface GiftCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  popular: boolean;
  valueOptions: number[];
  featured: boolean;
}

export const giftCardCategories = [
  { id: 'retail', name: 'Retail', description: 'Shop at your favorite retail stores with these gift cards' },
  { id: 'restaurants', name: 'Restaurants', description: 'Treat yourself or someone special to a delicious meal' },
  { id: 'entertainment', name: 'Entertainment', description: 'Enjoy movies, games, and more with these entertainment gift cards' },
  { id: 'travel', name: 'Travel', description: 'Perfect for the traveler in your life' },
  { id: 'online', name: 'Online Services', description: 'Digital gift cards for online shopping and subscriptions' }
];

export const giftCards: GiftCard[] = [
  {
    id: 'amazon-gift-card',
    title: 'Amazon Gift Card',
    description: 'Give the gift of choice with Amazon Gift Cards. Perfect for anyone, anytime. Recipients can choose from millions of items store-wide.',
    imageUrl: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=500&auto=format&fit=crop',
    category: 'retail',
    popular: true,
    valueOptions: [25, 50, 100, 200, 500],
    featured: true
  },
  {
    id: 'apple-gift-card',
    title: 'Apple Gift Card',
    description: 'Apple Gift Cards are perfect for anyone who enjoys Apple products and services. Use for Apps, Games, Music, TV, Movies, iCloud, and more.',
    imageUrl: 'https://images.unsplash.com/photo-1617625802912-cde586faf331?q=80&w=500&auto=format&fit=crop',
    category: 'retail',
    popular: true,
    valueOptions: [25, 50, 100, 200],
    featured: true
  },
  {
    id: 'starbucks-gift-card',
    title: 'Starbucks Gift Card',
    description: 'The Starbucks Gift Card is a convenient way to pay and earn stars toward rewards. This card is perfect for coffee lovers.',
    imageUrl: 'https://images.unsplash.com/photo-1507226983735-a838615193b0?q=80&w=500&auto=format&fit=crop',
    category: 'restaurants',
    popular: true,
    valueOptions: [10, 25, 50, 100],
    featured: false
  },
  {
    id: 'target-gift-card',
    title: 'Target Gift Card',
    description: 'A Target GiftCard is your opportunity to shop for thousands of items at Target stores or online at Target.com.',
    imageUrl: 'https://images.unsplash.com/photo-1550565118-a102628690a6?q=80&w=500&auto=format&fit=crop',
    category: 'retail',
    popular: false,
    valueOptions: [25, 50, 100, 200],
    featured: false
  },
  {
    id: 'netflix-gift-card',
    title: 'Netflix Gift Card',
    description: 'Give the gift of entertainment with a Netflix Gift Card. Recipients can watch TV shows and movies on their favorite devices.',
    imageUrl: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=500&auto=format&fit=crop',
    category: 'entertainment',
    popular: true,
    valueOptions: [25, 50, 100],
    featured: true
  },
  {
    id: 'airbnb-gift-card',
    title: 'Airbnb Gift Card',
    description: 'Give the gift of travel with an Airbnb gift card. Perfect for weekend getaways or dream vacations.',
    imageUrl: 'https://images.unsplash.com/photo-1549294413-26f195471c9a?q=80&w=500&auto=format&fit=crop',
    category: 'travel',
    popular: false,
    valueOptions: [50, 100, 200, 500],
    featured: false
  },
  {
    id: 'spotify-gift-card',
    title: 'Spotify Gift Card',
    description: 'Give the gift of millions of songs with a Spotify Premium gift card. Perfect for music lovers.',
    imageUrl: 'https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?q=80&w=500&auto=format&fit=crop',
    category: 'entertainment',
    popular: false,
    valueOptions: [10, 30, 60, 99],
    featured: false
  },
  {
    id: 'xbox-gift-card',
    title: 'Xbox Gift Card',
    description: 'Use Xbox Gift Cards to buy games, game add-ons, movies, TV shows, devices, and more at Microsoft Store online.',
    imageUrl: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=500&auto=format&fit=crop',
    category: 'entertainment',
    popular: true,
    valueOptions: [15, 25, 50, 100],
    featured: true
  },
  {
    id: 'sephora-gift-card',
    title: 'Sephora Gift Card',
    description: 'Give the gift of beauty with a Sephora Gift Card. Perfect for makeup and skincare enthusiasts.',
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=500&auto=format&fit=crop',
    category: 'retail',
    popular: false,
    valueOptions: [25, 50, 100, 150],
    featured: false
  },
  {
    id: 'uber-gift-card',
    title: 'Uber Gift Card',
    description: 'Uber gift cards can be used for Uber rides and Uber Eats. Perfect for those always on the go.',
    imageUrl: 'https://images.unsplash.com/photo-1568096889942-6eedde686635?q=80&w=500&auto=format&fit=crop',
    category: 'travel',
    popular: false,
    valueOptions: [25, 50, 100],
    featured: false
  }
];

export const getFeaturedGiftCards = () => {
  return giftCards.filter(card => card.featured);
};

export const getPopularGiftCards = () => {
  return giftCards.filter(card => card.popular);
};

export const getGiftCardsByCategory = (category: string) => {
  return giftCards.filter(card => card.category === category);
};

export const getGiftCardById = (id: string) => {
  return giftCards.find(card => card.id === id);
};
