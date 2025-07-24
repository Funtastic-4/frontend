import type { OrganizationProfile } from "~/types";

const mockProfile: OrganizationProfile = {
  name: "Cyrilus Yodha Maheswara Cultural Foundation",
  handle: "@cyrilusy",
  location: "Yogyakarta, Indonesia",
  description: "We are dedicated to preserving and promoting the rich cultural heritage of Yogyakarta. Our mission is to connect travelers with authentic local experiences while supporting traditional artisans and cultural practitioners. Through our programs, we bridge the gap between ancient traditions and modern tourism, ensuring that our cultural legacy continues to thrive for future generations.",
  coverPhoto: "/placeholder.png?height=320&width=800",
  profilePicture: "/placeholder.svg?height=128&width=128",
  achievements: [
    { value: "150+", label: "Cultural Sites Preserved" },
    { value: "5,000+", label: "Travelers Guided" },
    { label: "Fastest Growing NGO" },
    { label: "People's NGO Favourite" },
  ],
  events: [
    {
      date: { day: "15", month: "Mar" },
      title: "Batik Workshop & Cultural Tour",
      description: "Learn traditional batik making techniques from master artisans",
      participants: 12,
      location: "Taman Sari",
    },
    {
      date: { day: "22", month: "Mar" },
      title: "Jogja Heritage Walking Tour",
      description: "Explore the historical sites and hidden gems of Yogyakarta",
      participants: 20,
      location: "Malioboro Street",
    },
    {
      date: { day: "05", month: "Apr" },
      title: "Traditional Gamelan Music Experience",
      description: "Immerse yourself in the enchanting world of Javanese gamelan",
      participants: 15,
      location: "Sultan Palace",
    },
  ],
  reviews: [
    {
      author: {
        name: "Sarah Johnson",
        location: "From Australia",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      rating: 5,
      comment: "An absolutely incredible experience! The team's knowledge of local culture is unmatched. They showed us hidden gems that we never would have found on our own.",
    },
    {
      author: {
        name: "Marco Rodriguez",
        location: "From Spain",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      rating: 5,
      comment: "The batik workshop was amazing! Learning from master artisans while understanding the cultural significance made this trip truly memorable.",
    },
    {
      author: {
        name: "Yuki Tanaka",
        location: "From Japan",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      rating: 5,
      comment: "Professional, friendly, and deeply passionate about their culture. This organization truly cares about preserving heritage while sharing it with the world.",
    },
  ],
  contact: {
    instagram: "@cyrilusy",
    phone: "+62 812 3456 7890",
    website: "https://cyrilusy.org",
  },
};

export const getOrganizationProfile = (): Promise<OrganizationProfile> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProfile);
    }, 1000);
  });
};
