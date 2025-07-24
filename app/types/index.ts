export interface OrganizationProfile {
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
  participants: number;
  location: string;
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
