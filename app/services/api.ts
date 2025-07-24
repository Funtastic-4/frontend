import type { OrganizationProfile, TraditionDetail } from "~/types";

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

const mockTraditionDetail: TraditionDetail = {
  coverPhoto: "/placeholder.png?height=320&width=800",
  name: "Javanese Batik Tradition",
  location: "Found across Java, Indonesia",
  description: "Batik is a traditional Indonesian art form that has been practiced for centuries, particularly in Java. This intricate textile art involves applying wax-resist dyeing to create beautiful patterns on fabric. The word 'batik' comes from the Javanese word 'amba' meaning 'to write' and 'titik' meaning 'dot'. Yogyakarta is renowned as one of the most important centers for batik production, where master artisans pass down techniques through generations. Each batik pattern carries deep cultural meaning and tells stories of Indonesian heritage, philosophy, and social status. UNESCO recognized Indonesian batik as a Masterpiece of Oral and Intangible Heritage of Humanity in 2009.",
  funfact: [
    {
      title: "UNESCO Recognition",
      value: "2009"
    },  
    {
      title: "Traditional Patterns",
      value: "200+"
    },
    {
      title: "Master Artisans",
      value: "500+"
    },
    {
      title: "Years of History",
      value: "1000+"
    }
  ],
  places: [
    {
      name: "Batik Plentong Workshop",
      location: "Taman Sari, Yogyakarta",
      description: "Traditional batik workshop where you can learn from master artisans who have been practicing the craft for over 30 years. Experience the complete process from wax application to final dyeing.",
      link: "https://maps.google.com/maps?ll=-7.805389,110.359722&z=17&t=m&hl=en&gl=ID&mapclient=embed&cid=1111222233"
    },
    {
      name: "Museum Batik Yogyakarta",
      location: "Notoprajan, Yogyakarta",
      description: "Comprehensive museum showcasing the evolution of batik art with collections spanning from traditional court patterns to contemporary designs. Perfect for understanding the cultural significance.",
      link: "https://maps.google.com/maps?ll=-7.800556,110.364167&z=17&t=m&hl=en&gl=ID&mapclient=embed&cid=4444555566"
    },
    {
      name: "Winotosastro Batik Gallery",
      location: "Kotagede, Yogyakarta",
      description: "Historic batik gallery established in 1875, featuring exclusive court batik patterns and offering hands-on workshops in a traditional Javanese house setting.",
      link: "https://maps.google.com/maps?ll=-7.827778,110.398056&z=17&t=m&hl=en&gl=ID&mapclient=embed&cid=7777888899"
    }
  ],
  events: [
    {
      date: { day: "12", month: "Apr" },
      title: "Master Artisan Batik Workshop",
      description: "Learn traditional batik techniques directly from certified master artisans",
      participants: 15,
      location: "Taman Sari Batik Workshop",
      link: "https://batikkomar.com/workshop/#paket",
    },
    {
      date: { day: "20", month: "Apr" },
      title: "Batik Pattern Design Competition",
      description: "Showcase your creativity in designing contemporary batik patterns",
      participants: 30,
      location: "Museum Batik Yogyakarta",
      link: "https://batikkomar.com/workshop/#paket",
    },
    {
      date: { day: "28", month: "Apr" },
      title: "Royal Batik Heritage Tour",
      description: "Discover the royal batik patterns exclusive to Yogyakarta Sultan Palace",
      participants: 25,
      location: "Kraton Yogyakarta",
      link: "https://batikkomar.com/workshop/#paket",
    },
    {
      date: { day: "05", month: "May" },
      title: "Batik Fashion Show & Cultural Night",
      description: "Experience modern batik fashion combined with traditional Javanese performances",
      participants: 100,
      location: "Malioboro Street",
      link: "https://batikkomar.com/workshop/#paket",
    }
  ],
  reviews: [
    {
      author: {
        name: "Emily Chen",
        location: "From Singapore",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      rating: 5,
      comment: "The batik workshop exceeded all expectations! Learning about the intricate process and cultural significance while creating my own piece was truly magical. The master artisan was incredibly patient and knowledgeable.",
    },
    {
      author: {
        name: "David Thompson",
        location: "From United Kingdom",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      rating: 5,
      comment: "Fascinating insight into Indonesian culture through batik art. The museum visit combined with the hands-on workshop gave me a deep appreciation for this beautiful tradition. Highly recommended!",
    },
    {
      author: {
        name: "Anna Petersen",
        location: "From Denmark",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      rating: 4,
      comment: "Beautiful experience learning about batik history and techniques. The locations are authentic and the guides are passionate about sharing their heritage. My batik creation is now my most treasured souvenir!",
    },
    {
      author: {
        name: "Carlos Mendoza",
        location: "From Mexico",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      rating: 5,
      comment: "The royal batik heritage tour was incredible! Seeing the exclusive patterns and understanding their meanings gave me such respect for Javanese culture. The artisans are true masters of their craft.",
    }
  ]
};

export const getOrganizationProfile = (): Promise<OrganizationProfile> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProfile);
    }, 1000);
  });
};

export const getTraditionDetail = (): Promise<TraditionDetail> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTraditionDetail);
    }, 1000);
  });
};