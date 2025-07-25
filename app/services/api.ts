import type { EventDetail, OrganizationProfile } from "~/type";

export const mockProfile: OrganizationProfile[] = [
  {
    id: "rmmt1icbp6tg",
    name: "Cyrilus Yodha Maheswara Cultural Foundation",
    handle: "@cyrilusy",
    location: "Yogyakarta, Indonesia",
    description:
      "We are dedicated to preserving and promoting the rich cultural heritage of Yogyakarta. Our mission is to connect travelers with authentic local experiences while supporting traditional artisans and cultural practitioners. Through our programs, we bridge the gap between ancient traditions and modern tourism, ensuring that our cultural legacy continues to thrive for future generations.",
    coverPhoto: "https://phinemo.com/wp-content/uploads/2018/02/Logo-WI-Final-20092017.png?height=320&width=800",
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
        description:
          "Learn traditional batik making techniques from master artisans",
        location: "Taman Sari",
        registrationFee: 250000,
      },
      {
        date: { day: "22", month: "Mar" },
        title: "Jogja Heritage Walking Tour",
        description:
          "Explore the historical sites and hidden gems of Yogyakarta",
        location: "Malioboro Street",
        registrationFee: 0,
      },
      {
        date: { day: "05", month: "Apr" },
        title: "Traditional Gamelan Music Experience",
        description:
          "Immerse yourself in the enchanting world of Javanese gamelan",
        location: "Sultan Palace",
        registrationFee: 150000,
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
        comment:
          "An absolutely incredible experience! The team's knowledge of local culture is unmatched. They showed us hidden gems that we never would have found on our own.",
      },
      {
        author: {
          name: "Marco Rodriguez",
          location: "From Spain",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        comment:
          "The batik workshop was amazing! Learning from master artisans while understanding the cultural significance made this trip truly memorable.",
      },
      {
        author: {
          name: "Yuki Tanaka",
          location: "From Japan",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        rating: 5,
        comment:
          "Professional, friendly, and deeply passionate about their culture. This organization truly cares about preserving heritage while sharing it with the world.",
      },
    ],
    contact: {
      instagram: "cyrilusy",
      phone: "+62 812 3456 7890",
      website: "https://cyrilusy.org",
    },
    slug: "organization-cyrilus-yodha-maheswara-cultural-foundation",
  },
];

export const mockEventDetail: EventDetail = {
  id: "k7btup9yv02z",
  coverPhoto:
    "https://www.rinso.com/images/h0nadbhvm6m4/17RmARrAatDIJ0x2DxsGSc/68f28770f0815e43ef8408c6751dcefb/MDIuX1JpbnNvX09rdG9iZXJfSGVhZGVyLmpwZw/1000w-668h/pembatik-pemula.jpg",
  title: "Batik Workshop & Cultural Tour",
  date: "March 15, 2024",
  time: "10:00 AM - 2:00 PM",
  location: "Taman Sari, Yogyakarta",
  description:
    "Immerse yourself in the rich cultural heritage of Yogyakarta by joining our exclusive Batik Workshop & Cultural Tour. This unique experience offers a hands-on opportunity to learn the ancient art of batik making from skilled local artisans. You will discover the history and symbolism behind the intricate patterns and create your own batik masterpiece to take home as a cherished souvenir.<br /><br />After the workshop, we will guide you on a cultural tour of the surrounding area, visiting historical landmarks and hidden gems that are often missed by tourists. This is more than just a tour; it's a chance to connect with the local community and support the preservation of traditional crafts.",
  registrationFee: 250000,
  additionalImages: [
    "https://asset.kompas.com/crops/tmDvaNLzsbMqcpmB6HTaUdQL3MY=/0x35:1000x535/1200x800/data/photo/2019/05/31/876893028.jpg",
    "https://pict.sindonews.net/dyn/850/pena/news/2023/10/01/186/1214799/mengenal-alatalat-membatik-dari-canting-hingga-zat-pewarna-ztu.jpg",
    "https://assets.radarpekalongan.id/main/2023/07/kabar-warga-1200x675.webp",
  ],
  slug: "event-batik-workshop-jogjakarta",
};

export const getOrganizationProfile = ({
  id,
}: {
  id: string;
}): Promise<OrganizationProfile | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProfile.find((data) => data.id === id));
    }, 1000);
  });
};

export const getEventDetail = (id: string): Promise<EventDetail> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === mockEventDetail.id) {
        resolve(mockEventDetail);
      } else {
        reject(new Error("Event not found"));
      }
    }, 1000);
  });
};
