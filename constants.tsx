
import { NavItem, MembershipPlan, Facility, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'THE METHOD', href: '#programs' },
  { label: 'CHAMPIONS', href: '#why-choose' },
  { label: 'THE TOOLS', href: '#facilities' },
  { label: 'JOIN', href: '#memberships' },
  { label: 'SUCCESS', href: '#testimonials' },
  { label: 'CONTACT', href: '#contact' },
];

export const PROGRAMS = [
  { id: '01', title: 'MUSCLES OF STEEL', desc: 'The famous "Body-Bild" method. Build maximum power in a few short weeks!' },
  { id: '02', title: 'COMBAT CONDITIONING', desc: 'Build Elite Strength! Forge your physique with vintage iron and modern grit.' },
  { id: '03', title: 'CHAMPIONS CIRCLE', desc: 'Used by the champions! Specialized training for those who demand the best.' },
  { id: '04', title: 'DINO\'S DIET SECRETS', desc: 'Fuel your transformation with our time-tested nutritional blueprints.' },
  { id: '05', title: 'REMOTE STRENGTH', desc: 'World-class guidance delivered via mail (or internet) to your doorstep!' }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    name: 'BEGINNER SET',
    price: '23.95',
    benefits: ['5 ft. Steel Bar access', 'Chrome plated weights', 'Basic coaching manual', 'Daylight access only'],
    cta: 'ENROLL TODAY'
  },
  {
    name: 'CHAMPION SET',
    price: '49.95',
    benefits: ['Full 24/7 Access', 'Unlimited Barbell use', 'Dumb-bell set included', 'Personalized training chart'],
    cta: 'MOST POPULAR!',
    isSpecial: true
  },
  {
    name: 'ELITE PRO SET',
    price: '89.95',
    benefits: ['Everything in Champion', 'Head-strap training', 'Private lockers', 'Free Dino\'s T-Shirt'],
    cta: 'BECOME ELITE'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "In just weeks, I built the physique I always dreamed of. Truly dynamic!", author: "ARTHUR STRONG", role: "Factory Worker" },
  { quote: "The weights are heavy, the spirit is high. Dino's is the only place for real iron.", author: "BILLY 'THE BULL'", role: "Powerlifter" },
  { quote: "I used to be a 90lb weakling. Not anymore! Thanks to Dino's method!", author: "CHARLIE VANE", role: "Member" },
];

export const FACILITIES: Facility[] = [
  {
    title: 'IRON DUMB-BELLS',
    description: 'The real deal. No rubber, just pure cast iron for pure strength.',
    imageUrl: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'THE RACK',
    description: 'Where champions are made. Built to withstand your heaviest sets.',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'CARDIO CORNER',
    description: 'Keep the heart pumping and the lungs expanding for a dynamic life!',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'VINTAGE MACHINES',
    description: 'The same machines that built the legends of the Golden Era.',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
  }
];

export const INSTAGRAM_URL = "https://www.instagram.com/dinos.gym.solihull/";
export const SIGNUP_URL = "http://secure.ashbournemanagement.co.uk/signupUK/index.aspx?fn=DF80";
