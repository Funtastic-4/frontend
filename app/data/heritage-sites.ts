export interface HeritageSite {
  id: string;
  name: string;
  type: "site" | "dance" | "food" | "museum"; // Added type field
  badges: string[]; // Changed from 'type' to support multiple badges
  rating: number;
  reviewCount: number;
  location: string;
  established: string;
  visitors: string;
  description: string;
  highlights: string[];
  coverImage: string;
  galleryImages: string[];
  coordinates?: string; // Optional field for sites with coordinates
}

export interface Experience {
  date: string;
  month: string;
  title: string;
  description: string;
  participants: number;
  duration: string;
  price: string;
}

export interface Achievement {
  number: string;
  label: string;
  icon: string;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

// Mock data for Indonesian heritage items (sites, foods, dances, museums)
export const heritageSites: HeritageSite[] = [
  {
    id: "borobudur",
    name: "Borobudur Temple",
    type: "site",
    badges: ["UNESCO World Heritage Site", "National Monument"],
    rating: 4.9,
    reviewCount: 2847,
    location: "Magelang, Central Java, Indonesia",
    established: "8th-9th Century",
    visitors: "1.2M annually",
    coordinates: "7°36′29″S 110°12′14″E",
    description: "Borobudur is a magnificent 9th-century Mahayana Buddhist temple and one of the greatest Buddhist monuments in the world. This ancient marvel features over 2,600 relief panels and 504 Buddha statues, telling the story of Buddhist cosmology and the path to enlightenment. Experience sunrise ceremonies, explore intricate stone carvings, and immerse yourself in centuries of spiritual heritage while learning about traditional Javanese culture and Buddhist philosophy.",
    highlights: ["UNESCO World Heritage", "Buddhist Monument", "Sunrise Ceremony", "Stone Carvings"],
    coverImage: "https://torch.id/cdn/shop/articles/Artikel_173_-_Preview.webp?v=1713644561",
    galleryImages: [
      "https://fatek.umsu.ac.id/wp-content/uploads/2023/06/Candi-Borobudur-Makna-Yang-Terkandung-di-Dalamnya.jpg",
      "https://www.sustainlifetoday.com/wp-content/uploads/2025/05/candi-borobudur-1.jpg",
      "https://desawisataborobudur.com/wp-content/uploads/2024/07/Misteri-dan-Mitologi-di-Balik-Candi-Borobudur.jpg",
    ]
  },
  {
    id: "rendang",
    name: "Rendang",
    type: "food",
    badges: ["UNESCO Intangible Heritage", "Traditional Recipe"],
    rating: 4.8,
    reviewCount: 3421,
    location: "West Sumatra, Indonesia",
    established: "Traditional Recipe",
    visitors: "Enjoyed Worldwide",
    description: "Rendang is a traditional Indonesian spiced meat dish originating from West Sumatra. This slow-cooked curry is made with beef, coconut milk, and a complex blend of spices including chili, galangal, lemongrass, and turmeric. The long cooking process allows the meat to absorb the rich flavors while the liquid reduces to a thick, dark sauce. Rendang has been recognized by UNESCO as an Intangible Cultural Heritage and is beloved across Indonesia and Southeast Asia.",
    highlights: ["UNESCO Heritage", "Traditional Spices", "Slow-Cooked", "Minangkabau Origin"],
    coverImage: "https://www.frisianflag.com/storage/app/media/uploaded-files/rendang-padang.jpg",
    galleryImages: [
      "https://www.astronauts.id/blog/wp-content/uploads/2023/03/Resep-Rendang-Daging-Sapi-Untuk-Lebaran-Gurih-dan-Nikmat.jpg",
      "https://rajominang.id/blog/uploads/images/202407/image_750x_66825d6c67460.jpg",
      "https://www.dapurkobe.co.id/wp-content/uploads/rendang-daging-sapi-pedas.jpg",
    ]
  },
  {
    id: "kecak-dance",
    name: "Kecak Fire Dance",
    type: "dance",
    badges: ["Traditional Performance", "Balinese Heritage"],
    rating: 4.7,
    reviewCount: 1892,
    location: "Bali, Indonesia",
    established: "1930s Development",
    visitors: "Thousands Monthly",
    description: "Kecak is a traditional Balinese dance and music drama that originated in the 1930s. Also known as the 'fire dance' or 'monkey chant,' it features a large group of men sitting in concentric circles, chanting 'cak' in rhythmic harmony while moving their hands and bodies. The performance typically depicts scenes from the Ramayana epic, with dancers portraying Hanuman and other characters. The mesmerizing combination of vocal percussion, dramatic storytelling, and fire elements creates an unforgettable cultural experience.",
    highlights: ["Ramayana Story", "Fire Performance", "Vocal Percussion", "Spiritual Drama"],
    coverImage: "https://www.raftingbali.net/wp-content/uploads/2020/01/Kecak-Dance-Bali.jpg",
    galleryImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjD3LWQKkGRnKSAHoWYSkmMLbTG2NpG-q05Q&s",
      "https://bitnews.id/wp-content/uploads/2022/06/shutterstock_409292383.jpg",
      "https://unair.ac.id/wp-content/uploads/2024/07/Tari-kecak.png",
    ]
  },
  {
    id: "national-museum",
    name: "National Museum of Indonesia",
    type: "museum",
    badges: ["National Heritage", "Cultural Institution"],
    rating: 4.4,
    reviewCount: 2156,
    location: "Jakarta, Indonesia",
    established: "1778",
    visitors: "500K annually",
    coordinates: "6°10′23″S 106°48′16″E",
    description: "The National Museum of Indonesia, also known as Museum Gajah (Elephant Museum), is the largest and most comprehensive museum in Indonesia. Established in 1778, it houses an extensive collection of cultural artifacts, archaeological findings, and ethnographic objects from across the Indonesian archipelago. The museum showcases Indonesia's rich cultural diversity through prehistoric artifacts, ancient sculptures, traditional textiles, ceramics, and numismatic collections, offering visitors a comprehensive journey through Indonesian history and culture.",
    highlights: ["Prehistoric Artifacts", "Cultural Diversity", "Archaeological Treasures", "Educational Programs"],
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Front_facade_-_National_Museum_Indonesia%2C_Jakarta_%282025%29_-_img_03.jpg/500px-Front_facade_-_National_Museum_Indonesia%2C_Jakarta_%282025%29_-_img_03.jpg",
    galleryImages: [
      "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2025/01/06/15593d91-cf85-4144-b3ba-810a2b71a344-1736130939685-73f3d7cd9693daf2cc741c1e5713da16.png",
      "https://manual.co.id/wp-content/uploads/2024/11/02_untitled-0825_Website-980x719.jpg",
      "https://jnewsonline.com/wp-content/uploads/2023/12/museum-nasional-Indonesia.jpg",
    ]
  },
  {
    id: "sate-ayam",
    name: "Sate Ayam",
    type: "food",
    badges: ["Traditional Street Food", "National Dish"],
    rating: 4.6,
    reviewCount: 4587,
    location: "Nationwide, Indonesia",
    established: "Ancient Tradition",
    visitors: "Daily Consumption",
    description: "Sate Ayam (Chicken Satay) is one of Indonesia's most beloved and iconic dishes. These skewered and grilled chicken pieces are marinated in a blend of traditional spices and served with rich peanut sauce, rice cakes (lontong), and fresh vegetables. Each region in Indonesia has its own unique preparation style and sauce variations. This simple yet flavorful dish represents the essence of Indonesian street food culture and has become a symbol of Indonesian cuisine worldwide.",
    highlights: ["Peanut Sauce", "Grilled Perfection", "Street Food Culture", "Regional Variations"],
    coverImage: "https://asset.kompas.com/crops/QgfVXuMhL5tHLqnJKfGPs9Yx5xY=/100x67:900x600/750x500/data/photo/2023/10/24/6537126d64f8b.jpeg",
    galleryImages: [
      "https://asset.kompas.com/crops/96rHbnDkTGNa8Y-xW247623hONA=/0x0:1000x667/750x500/data/photo/2023/12/19/6580e31d4d33e.jpeg",
      "https://monicaisinthekitchen.wordpress.com/wp-content/uploads/2018/01/img_e2700.jpg",
      "https://i0.wp.com/resepkoki.id/wp-content/uploads/2017/02/Resep-Sate-Ayam-Madura.jpg?fit=1920%2C1804&ssl=1",
    ]
  },
  {
    id: "betawi-village",
    name: "Betawi Cultural Village",
    type: "site",
    badges: [], // No badges - just a cultural site
    rating: 4.1,
    reviewCount: 634,
    location: "Jakarta, Indonesia", 
    established: "1975",
    visitors: "80K annually",
    coordinates: "6°17′31″S 106°50′15″E",
    description: "Setu Babakan Betawi Cultural Village preserves and showcases the traditional culture of Jakarta's indigenous Betawi people. Visitors can experience authentic Betawi architecture, traditional arts, local cuisine, and folk performances while learning about the rich heritage of Jakarta's native community in this living cultural center.",
    highlights: ["Betawi Culture", "Traditional Arts", "Local Cuisine", "Folk Performances"],
    coverImage: "https://cnc-magazine.oramiland.com/parenting/images/desa_wisata_kampung_betawi.width-800.format-webp.webp",
    galleryImages: [
      "https://www.socialexpat.net/wp-content/uploads/2023/02/socialexpat-learn-betawi-culture-at-kampung-betawi-setu-babakan-cover.jpg",
      "https://zjglidcehtsqqqhbdxyp.supabase.co/storage/v1/object/public/atourin/mp/uploads/cover-half-day-tour-kampung-betawi-52.jpg",
      "https://anekatempatwisata.com/wp-content/uploads/2022/05/Perkampungan-Budaya-Betawi-Setu-Babakan-strategi-720x600.jpg",
    ]
  }
];

// Mock experiences data with varied pricing including free options
export const getExperiencesForSite = (siteId: string): Experience[] => {
  const baseExperiences: Record<string, Experience[]> = {
    borobudur: [
      {
        date: "15",
        month: "MAR",
        title: "Sunrise Temple Tour",
        description: "Witness the magical sunrise over Borobudur with guided temple exploration",
        participants: 25,
        duration: "4 hours",
        price: "Free",
      },
      {
        date: "22",
        month: "MAR", 
        title: "Buddhist Heritage & Culture Walk",
        description: "Explore the temple's history, Buddhist teachings, and local village culture",
        participants: 18,
        duration: "3 hours",
        price: "Free",
      },
      {
        date: "05",
        month: "APR",
        title: "Traditional Craft Workshop",
        description: "Learn stone carving and traditional Javanese arts from local artisans",
        participants: 12,
        duration: "5 hours",
        price: "Free",
      },
    ],
    prambanan: [
      {
        date: "18",
        month: "MAR",
        title: "Hindu Temple Architecture Tour",
        description: "Discover the intricate Hindu temple design and Ramayana story reliefs",
        participants: 20,
        duration: "3 hours",
        price: "IDR 300,000",
      },
      {
        date: "25",
        month: "MAR",
        title: "Ramayana Ballet Performance",
        description: "Watch traditional Ramayana dance performance against temple backdrop",
        participants: 150,
        duration: "2 hours",
        price: "IDR 200,000",
      },
      {
        date: "30",
        month: "MAR",
        title: "Free Heritage Walking Tour",
        description: "Join our volunteer guides for a free exploration of temple history",
        participants: 30,
        duration: "2 hours",
        price: "Free",
      },
    ],
    "komodo-national-park": [
      {
        date: "20",
        month: "MAR",
        title: "Komodo Dragon Safari",
        description: "Guided trek to observe Komodo dragons in their natural habitat",
        participants: 15,
        duration: "6 hours",
        price: "IDR 850,000",
      },
      {
        date: "27",
        month: "MAR",
        title: "Pink Beach Snorkeling",
        description: "Explore the famous pink sand beach and underwater coral gardens",
        participants: 20,
        duration: "4 hours",
        price: "IDR 650,000",
      },
      {
        date: "03",
        month: "APR",
        title: "Marine Conservation Talk",
        description: "Free educational session about marine life protection efforts",
        participants: 50,
        duration: "1.5 hours",
        price: "Free",
      },
    ],
    "national-museum": [
      {
        date: "17",
        month: "MAR",
        title: "Indonesian Heritage Discovery Tour",
        description: "Free guided tour exploring Indonesia's cultural diversity through ancient artifacts and traditional art",
        participants: 30,
        duration: "2 hours",
        price: "Free",
      },
      {
        date: "23",
        month: "MAR",
        title: "Traditional Textile Workshop",
        description: "Learn about Indonesian batik and weaving techniques with hands-on demonstrations",
        participants: 20,
        duration: "3 hours",
        price: "Free",
      },
      {
        date: "29",
        month: "MAR",
        title: "Archaeological Treasures Exhibition",
        description: "Special exhibition showcasing recent archaeological discoveries from across Indonesia",
        participants: 50,
        duration: "1.5 hours",
        price: "Free",
      },
      {
        date: "06",
        month: "APR",
        title: "Family Heritage Day",
        description: "Interactive activities for families to learn about Indonesian culture and history together",
        participants: 40,
        duration: "4 hours",
        price: "Free",
      },
    ],
    rendang: [
      {
        date: "21",
        month: "MAR",
        title: "Traditional Rendang Cooking Workshop",
        description: "Learn the authentic Minangkabau way of cooking rendang with traditional spices and techniques",
        participants: 15,
        duration: "4 hours",
        price: "Free",
      },
      {
        date: "28",
        month: "MAR",
        title: "Spice Market Heritage Tour",
        description: "Explore traditional spice markets and learn about ingredients used in rendang preparation",
        participants: 20,
        duration: "2.5 hours",
        price: "Free",
      },
      {
        date: "04",
        month: "APR",
        title: "Cultural Storytelling & Tasting",
        description: "Listen to Minangkabau stories while enjoying traditional rendang in a cultural setting",
        participants: 25,
        duration: "2 hours",
        price: "Free",
      },
    ],
    "kecak-dance": [
      {
        date: "19",
        month: "MAR",
        title: "Evening Kecak Performance",
        description: "Experience authentic Kecak fire dance under the stars with traditional Balinese performers",
        participants: 80,
        duration: "1.5 hours",
        price: "Free",
      },
      {
        date: "26",
        month: "MAR",
        title: "Kecak Dance Workshop",
        description: "Learn basic Kecak chanting and movements from traditional Balinese masters",
        participants: 30,
        duration: "3 hours",
        price: "Free",
      },
      {
        date: "02",
        month: "APR",
        title: "Ramayana Story Session",
        description: "Educational session about the Ramayana epic and its significance in Balinese culture",
        participants: 50,
        duration: "2 hours",
        price: "Free",
      },
    ],
    "sate-ayam": [
      {
        date: "20",
        month: "MAR",
        title: "Street Food Heritage Walk",
        description: "Explore traditional warungs and learn about the history of Indonesian street food culture",
        participants: 25,
        duration: "3 hours",
        price: "Free",
      },
      {
        date: "27",
        month: "MAR",
        title: "Sate Making Workshop",
        description: "Learn to prepare authentic sate ayam with traditional marinades and peanut sauce",
        participants: 18,
        duration: "2.5 hours",
        price: "Free",
      },
      {
        date: "05",
        month: "APR",
        title: "Regional Sate Variations Tasting",
        description: "Taste different sate styles from across Indonesia and learn about regional differences",
        participants: 35,
        duration: "2 hours",
        price: "Free",
      },
    ],
    sangiran: [
      {
        date: "22",
        month: "MAR",
        title: "Fossil Discovery Workshop",
        description: "Hands-on experience in paleontological excavation techniques",
        participants: 12,
        duration: "3 hours",
        price: "Free",
      },
      {
        date: "28",
        month: "MAR",
        title: "Evolution Education Tour",
        description: "Free guided tour through the museum's evolution exhibits",
        participants: 25,
        duration: "2 hours",
        price: "Free",
      },
    ],
    "tana-toraja": [
      {
        date: "16",
        month: "MAR",
        title: "Traditional Funeral Ceremony Visit",
        description: "Respectful observation of authentic Torajan funeral traditions",
        participants: 8,
        duration: "Full day",
        price: "Free",
      },
      {
        date: "24",
        month: "MAR",
        title: "Tongkonan Architecture Tour",
        description: "Explore traditional boat-shaped houses and their cultural significance",
        participants: 15,
        duration: "4 hours",
        price: "Free",
      },
      {
        date: "31",
        month: "MAR",
        title: "Coffee Culture Experience",
        description: "Free tasting of local Toraja coffee with farmers",
        participants: 20,
        duration: "2 hours",
        price: "Free",
      },
    ],
    "betawi-village": [
      {
        date: "19",
        month: "MAR",
        title: "Betawi Cooking Class",
        description: "Learn to cook traditional Betawi dishes like kerak telor and soto betawi",
        participants: 12,
        duration: "3 hours",
        price: "Free",
      },
      {
        date: "26",
        month: "MAR",
        title: "Traditional Arts Workshop",
        description: "Free workshop on Betawi music, dance, and crafts",
        participants: 25,
        duration: "2.5 hours",
        price: "Free",
      },
    ]
  };
  
  return baseExperiences[siteId] || [];
};

// Mock achievements - Indonesian heritage sites focused
export const getAchievementsForSite = (siteId: string): Achievement[] => {
  const achievements: Record<string, Achievement[]> = {
    borobudur: [
      { number: "1,200+", label: "Years of History", icon: "🏛️" },
      { number: "2,672", label: "Relief Panels", icon: "🎨" },
      { number: "504", label: "Buddha Statues", icon: "🧘" },
      { number: "1.2M", label: "Annual Visitors", icon: "👥" },
    ],
    prambanan: [
      { number: "1,100+", label: "Years of History", icon: "🏛️" },
      { number: "240", label: "Temple Structures", icon: "🏗️" },
      { number: "3", label: "Main Temples", icon: "⛩️" },
      { number: "800K", label: "Annual Visitors", icon: "👥" },
    ],
    "komodo-national-park": [
      { number: "3,000", label: "Komodo Dragons", icon: "🦎" },
      { number: "1,733", label: "Square Kilometers", icon: "📏" },
      { number: "1980", label: "Established", icon: "🏛️" },
      { number: "180K", label: "Annual Visitors", icon: "👥" },
    ],
    sangiran: [
      { number: "1.5M", label: "Years Old Fossils", icon: "🦴" },
      { number: "100+", label: "Fossil Discoveries", icon: "🔍" },
      { number: "56", label: "Square Kilometers", icon: "📏" },
      { number: "50K", label: "Annual Visitors", icon: "👥" },
    ],
    "tana-toraja": [
      { number: "1,000+", label: "Traditional Houses", icon: "🏠" },
      { number: "300+", label: "Villages", icon: "🏘️" },
      { number: "500K", label: "Population", icon: "�" },
      { number: "120K", label: "Annual Visitors", icon: "🧳" },
    ],
    "betawi-village": [
      { number: "50+", label: "Years Preserving Culture", icon: "🎭" },
      { number: "15", label: "Traditional Houses", icon: "🏠" },
      { number: "200+", label: "Cultural Events/Year", icon: "🎪" },
      { number: "80K", label: "Annual Visitors", icon: "👥" },
    ]
  };
  
  return achievements[siteId] || [];
};

// Mock reviews
export const getReviewsForSite = (_siteId: string): Review[] => {
  // For now, return generic reviews. You can make these site-specific later
  return [
    {
      name: "Emma Thompson",
      rating: 5,
      comment: "Absolutely breathtaking! An incredible experience that exceeded all expectations.",
      date: "2 days ago",
      avatar: "/placeholder.png?height=40&width=40&text=ET",
    },
    {
      name: "Hiroshi Tanaka", 
      rating: 5,
      comment: "A spiritual journey through time. The architecture and history are amazing.",
      date: "1 week ago",
      avatar: "/placeholder.png?height=40&width=40&text=HT",
    },
    {
      name: "Sarah Mitchell",
      rating: 4,
      comment: "Incredible historical site with stunning architecture. Highly recommended!",
      date: "2 weeks ago",
      avatar: "/placeholder.png?height=40&width=40&text=SM",
    },
  ];
};

// Helper function to get site by ID
export const getSiteById = (id: string): HeritageSite | undefined => {
  return heritageSites.find(site => site.id === id);
};

// Helper function to get all sites for listing page
export const getAllSites = (): HeritageSite[] => {
  return heritageSites;
};