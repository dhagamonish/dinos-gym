
import React from 'react';
import { NavItem, MembershipPlan, Facility, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'MEMBERSHIPS', href: '#memberships' },
  { label: 'FACILITIES', href: '#facilities' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'CONTACT', href: '#contact' },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    name: 'STANDARD MEMBERSHIP',
    price: 'Contact for Pricing',
    benefits: ['Unlimited Gym Access', 'All Equipment Included', 'Community Events', 'No Long Contracts'],
    cta: 'SIGN UP'
  },
  {
    name: 'STUDENT OFFER',
    price: 'Discounted Rate',
    benefits: ['Valid Student ID Required', 'All Standard Benefits', 'Peak & Off-Peak Access', 'Performance Tracking'],
    cta: 'STUDENT SIGN UP',
    isSpecial: true
  },
  {
    name: 'JLR DISCOUNT',
    price: 'Corporate Rate',
    benefits: ['For JLR Employees', 'Show Employee ID', 'All Standard Benefits', 'Priority Support'],
    cta: 'LEARN MORE'
  }
];

export const FACILITIES: Facility[] = [
  {
    title: 'FREE WEIGHTS ZONE',
    description: 'Massive range of dumbbells up to 80kg+, olympic barbells, and hundreds of plates.',
    imageUrl: 'https://picsum.photos/seed/dinos1/800/600?grayscale'
  },
  {
    title: 'POWERLIFTING AREA',
    description: 'Competition-grade squat racks, benches, and deadlift platforms with chalk provided.',
    imageUrl: 'https://picsum.photos/seed/dinos2/800/600?grayscale'
  },
  {
    title: 'BODYBUILDING MACHINES',
    description: 'Vintage iron meets modern engineering: Cybex, Gym80, Hammer Strength.',
    imageUrl: 'https://picsum.photos/seed/dinos3/800/600?grayscale'
  },
  {
    title: 'STRONGMAN TRAINING',
    description: 'Log press, atlas stones, and yolks for those who want to lift the impossible.',
    imageUrl: 'https://picsum.photos/seed/dinos4/800/600?grayscale'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "The atmosphere is unmatched - real lifting, real results. If you want to train hard, this is the only place.",
    author: "James T.",
    role: "Powerlifter"
  },
  {
    quote: "Best gym I've ever trained at, proper old-school iron. The community here is like family.",
    author: "Sarah M.",
    role: "Bodybuilder"
  },
  {
    quote: "Does exactly what it says on the tin. No ego, just hard work and great people.",
    author: "Mike R.",
    role: "Member since 2018"
  }
];

export const SIGNUP_URL = "https://secure.ashbournemanagement.co.uk/signupUK/index.aspx?fn=DF80";
export const INSTAGRAM_URL = "https://www.instagram.com/dinos.gym.solihull/";
