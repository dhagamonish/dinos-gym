
import { NavItem, MembershipPlan, Facility, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'ABOUT', href: '#about' },
  { label: 'PROGRAMS', href: '#programs' },
  { label: 'PRICING', href: '#memberships' },
  { label: 'TESTIMONIALS', href: '#testimonials' },
];

export const PROGRAMS = [
  { id: '01', title: 'TRANSFORMATION PROGRAMS', desc: 'Focus on structured, result-driven training cycles with nutrition support.' },
  { id: '02', title: 'PERSONAL TRAINING', desc: 'One-on-one sessions with our elite coaching staff tailored to your specific goals.' },
  { id: '03', title: 'POWERLIFTING CLUB', desc: 'Master the Big 3 with specialized coaching and competition-grade equipment.' },
  { id: '04', title: 'NUTRITION COACHING', desc: 'Custom meal planning and macro tracking to fuel your progress correctly.' },
  { id: '05', title: 'ONLINE COACHING', desc: 'World-class guidance from Dino\'s staff, no matter where you train.' }
];

export const TRAINERS = [
  { name: 'Dino V.', role: 'Head Coach & Founder', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=800' },
  { name: 'Alex Harrington', role: 'Strength Specialist', img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800' },
  { name: 'Blake Hudson', role: 'Bodybuilding Expert', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800' },
  { name: 'Sarah Miller', role: 'Transformation Coach', img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800' }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    name: 'STARTER PLAN',
    price: '29',
    benefits: ['Gym access off-peak', '2 Group classes per month', 'Access to workout app', 'Monthly billing'],
    cta: 'GET STARTED'
  },
  {
    name: 'PRO PLAN',
    price: '53',
    benefits: ['Unlimited 24/7 gym access', '8 Group classes per month', 'Personalized workout plan', 'Monthly billing'],
    cta: 'GET STARTED',
    isSpecial: true
  },
  {
    name: 'ELITE MEMBERSHIP',
    price: '99',
    benefits: ['Everything in Pro Plan', '2 Personal training sessions', 'Nutrition planning & support', 'Premium customer support'],
    cta: 'GET STARTED'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "I noticed how organized and supportive everything was. The onboarding process was smooth.", author: "CLAYTON ADAMS", role: "Powerlifter" },
  { quote: "As someone who's been to multiple gyms, I can confidently say Dino's offers a premium experience.", author: "BILLY PEARSON", role: "Bodybuilder" },
  { quote: "It sounds like a challenge but they really support you. From day one, I felt I belonged.", author: "IRENE RAY", role: "Fitness Enthusiast" },
  { quote: "They walk you through your journey, adapt based on results, and offer both physical and mental support.", author: "ALEX DOYLE", role: "Member" }
];

// Added missing FACILITIES constant
export const FACILITIES: Facility[] = [
  {
    title: 'HAMMER STRENGTH',
    description: 'Full suite of plate-loaded machines for maximum muscle isolation and safe heavy lifting.',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800'
  },
  {
    title: 'POWERLIFTING ZONE',
    description: 'Competition-grade racks, Eleiko plates, and specialized bars for the serious strength athlete.',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800'
  },
  {
    title: 'DUMBBELL ROW',
    description: 'Extensive range of dumbbells going up to 100kg+ for those who dare to push their limits.',
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800'
  },
  {
    title: 'CARDIO SUITE',
    description: 'Modern conditioning equipment to support your fat loss and heart health goals.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800'
  }
];

// Added missing INSTAGRAM_URL constant
export const INSTAGRAM_URL = "https://www.instagram.com/dinos.gym.solihull/";

export const SIGNUP_URL = "https://secure.ashbournemanagement.co.uk/signupUK/index.aspx?fn=DF80";
