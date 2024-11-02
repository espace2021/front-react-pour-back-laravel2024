import { loadStripe } from '@stripe/stripe-js';

// Make sure to use the actual public key from your .env file
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export { stripePromise }; 