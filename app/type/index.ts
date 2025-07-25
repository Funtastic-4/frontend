export interface OrganizationProfile {
  id: string;
  name: string;
  handle: string;
  location: string;
  description: string;
  coverPhoto: string;
  profilePicture: string;
  achievements: Achievement[];
  events: Event[];
  reviews: Review[];
  contact?: {
    instagram?: string;
    phone?: string;
    website?: string;
  };
  slug: string;
}

export interface Achievement {
  label: string;
  value?: string;
}

export interface Event {
  date: {
    day: string;
    month: string;
  };
  title: string;
  description: string;
  location: string;
  registrationFee?: number;
}

export interface Review {
  author: {
    name: string;
    location: string;
    avatar: string;
  };
  rating: number;
  comment: string;
}

export interface EventDetail {
  id: string;
  coverPhoto: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  registrationFee: number;
  additionalImages: string[];
  slug: string;
}
