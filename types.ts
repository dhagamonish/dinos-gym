
export interface NavItem {
  label: string;
  href: string;
}

export interface MembershipPlan {
  name: string;
  price: string;
  benefits: string[];
  cta: string;
  isSpecial?: boolean;
}

export interface Facility {
  title: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}
