// South Indian Tourism Data Source
// Clean, Crisp, 100% English - Matched to the Official Color Palette & UI Guide

export const THEME_COLORS = {
  primary: "#0B4D3B",       // Dark Green (Headers, Navbar, Primary sections)
  secondary: "#147D64",     // Secondary Green (Buttons, Icons, Highlights)
  accent: "#F4B400",        // Accent Gold (CTAs, Badges, Active states)
  accentLight: "#FFD166",   // Accent Gradient end
  surface: "#FFF8E6",       // Cream (Cards, Sections, Light background)
  background: "#F0F7F4",    // Light Background
  textPrimary: "#1F2937",   // Charcoal (Main text, Headings)
  textSecondary: "#6B7280", // Grey (Subtext, Descriptions)
  white: "#FFFFFF"
};

export const BUSINESS_INFO = {
  name: "South Indian Tourism",
  tagline: "Explore South India",
  subtitle: "Temples • Hills • Beaches • Culture • Heritage",
  subheading: "Explore ancient temples, misty hill stations, serene backwaters and unforgettable journeys across South India.",
  experience: "15+ Years",
  destinationsCount: "30+ Destinations",
  statesCovered: "4 South Indian States",
  primaryPhone: "+91 94433 39921",
  secondaryPhone: "+91 73734 35535",
  whatsappNumber: "+91 63809 39670",
  whatsappLink: "https://wa.me/916380939670?text=Hello%20South%20Indian%20Tourism%2C%20I%20am%20interested%20in%20planning%20a%20tour%20package.",
  email: "info@southindiantourism.com",
  address: "Nehru Nagar, Kuthangalmedu, Namakkal Road, Mohanur, Namakkal, Tamil Nadu, India – 637015",
  workingHours: "Monday – Sunday: 6:00 AM – 10:00 PM"
};

// UI Guide Category Pills
export const UI_CATEGORIES = [
  { id: "Temples", name: "Temples", desc: "Sacred Chola & Pandya Architecture" },
  { id: "Hill Stations", name: "Hill Stations", desc: "Misty Tea Plantations & Peaks" },
  { id: "Beaches", name: "Beaches", desc: "Golden Coasts & Coral Horizons" },
  { id: "Backwaters", name: "Backwaters", desc: "Serene Palm-Fringed Lagoons" },
  { id: "Wildlife", name: "Wildlife", desc: "Western Ghats Biosphere Reserves" },
  { id: "Culture", name: "Culture", desc: "Living Traditions & Royal Palaces" }
];

// The 4 Consecutive State Drone Voyage Experiences (Tamil Nadu -> Kerala -> Karnataka -> Andhra Pradesh)
export const STATE_DRONE_VOYAGES = [
  {
    id: "tamil-nadu",
    stateNumber: "01",
    stateName: "Tamil Nadu",
    primaryLocation: "Ooty & Madurai",
    droneVideo: "https://cdn.coverr.co/videos/coverr-mist-over-green-hills-3957/1080p.mp4",
    localVideoPath: "/videos/tamilnadu.mp4",
    posterImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=80",
    droneBadge: "4K DRONE SHOT • 60 FPS • MISTY SHOLA RIDGES",
    tagline: "Queen of Hills, Heritage Toy Train & Iconic Gopurams",
    description: "Witness the emerald tea slopes of Ooty and the 2,500-year-old architectural grandeur of Madurai Meenakshi Amman Temple from the sky.",
    
    // Crisp Stay Details
    stayDetails: {
      title: "Handpicked Premium Stays",
      options: [
        { type: "Colonial Tea Estate Villa", name: "Nilgiris Heritage Bungalow", perk: "Valley views & private fireplace" },
        { type: "Temple-View Star Hotel", name: "Heritage Madurai Retreat", perk: "Walkable to temple corridors" },
        { type: "Forest Cliff Resort", name: "Ooty Mountain Shola Lodge", perk: "Campfire & tea garden trails" }
      ]
    },

    // Featured Tour Package
    featuredPackage: {
      id: "ooty-madurai-5d",
      title: "Tamil Nadu Heritage & Hill Station Tour",
      duration: "5 Days / 4 Nights",
      price: "₹18,500",
      priceUnit: "per person",
      route: "Coimbatore → Ooty → Coonoor → Madurai",
      inclusions: ["Dedicated AC Tempo Traveller / Innova", "Hill Resort & Star Hotel Stays", "Daily Breakfast & Tolls Included", "Temple Darshan Guidance"]
    },

    highlights: ["Ooty UNESCO Mountain Railway", "Doddabetta Peak 2,637m", "Meenakshi Amman 14 Gopurams", "Botanical & Rose Gardens"]
  },

  {
    id: "kerala",
    stateNumber: "02",
    stateName: "Kerala",
    primaryLocation: "Munnar & Alleppey",
    droneVideo: "https://cdn.coverr.co/videos/coverr-river-running-through-a-lush-forest-1478/1080p.mp4",
    localVideoPath: "/videos/kerala.mp4",
    posterImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=80",
    droneBadge: "4K DRONE SHOT • 60 FPS • EMERALD WATERWAYS",
    tagline: "God's Own Country, Backwaters & Cloud Canopy",
    description: "Glide over palm-fringed lagoons in a luxury houseboat and soar above the mist-covered tea carpet valleys of Munnar.",

    stayDetails: {
      title: "Luxury Stays & Houseboats",
      options: [
        { type: "Private AC Houseboat", name: "Alleppey Deluxe Kettuvallam", perk: "Overnight cruise with Kerala meals" },
        { type: "Treehouse Eco-Resort", name: "Munnar Cloud Canopy Villa", perk: "Suspended 40ft above tea gardens" },
        { type: "Spice Forest Retreat", name: "Thekkady Wellness Resort", perk: "Ayurvedic spa & spice trail" }
      ]
    },

    featuredPackage: {
      id: "kerala-5d",
      title: "Kerala Backwaters & Misty Hills Tour",
      duration: "5 Days / 4 Nights",
      price: "₹21,500",
      priceUnit: "per person",
      route: "Kochi → Cheeyappara Falls → Munnar → Alleppey",
      inclusions: ["All-Inclusive Private Houseboat", "Munnar Hill Resort Stay", "AC Chauffeur-Driven Transport", "Tea Museum & Cultural Show"]
    },

    highlights: ["Overnight Houseboat Stay", "Munnar Tea Museum & Mattupetty", "Eravikulam National Park", "Spice Plantations"]
  },

  {
    id: "karnataka",
    stateNumber: "03",
    stateName: "Karnataka",
    primaryLocation: "Coorg & Hampi",
    droneVideo: "https://cdn.coverr.co/videos/coverr-flying-over-a-green-forest-1473/1080p.mp4",
    localVideoPath: "/videos/karnataka.mp4",
    posterImage: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1920&q=80",
    droneBadge: "4K DRONE SHOT • 60 FPS • RAINFOREST CANOPY",
    tagline: "Scotland of India, Coffee Cloudlands & Stone Empires",
    description: "Traverse misty coffee estates and roaring waterfalls in Coorg, paired with the surreal UNESCO boulder monuments of the Vijayanagara Empire in Hampi.",

    stayDetails: {
      title: "Estate Stays & Heritage Resorts",
      options: [
        { type: "Plantation Homestay", name: "Coorg Coffee Mist Estate Villa", perk: "Private stream & plantation walk" },
        { type: "Stone Heritage Resort", name: "Hampi Boulders River Stay", perk: "Surrounded by ancient monoliths" },
        { type: "Palace-View Hotel", name: "Grand Mysuru Heritage Stay", perk: "Overlooking illuminated palace" }
      ]
    },

    featuredPackage: {
      id: "karnataka-5d",
      title: "Karnataka Royal & Hill Station Tour",
      duration: "5 Days / 4 Nights",
      price: "₹19,999",
      priceUnit: "per person",
      route: "Bengaluru → Mysuru Palace → Srirangapatna → Coorg",
      inclusions: ["Luxury AC Tempo / Innova", "Coorg Resort & Plantation Homestay", "Daily Breakfast Included", "Inter-State Permits & Tolls"]
    },

    highlights: ["Abbey & Iruppu Waterfalls", "Iconic UNESCO Stone Chariot", "Mysore Palace 100,000 Lights", "Dubare Elephant Camp"]
  },

  {
    id: "andhra-pradesh",
    stateNumber: "04",
    stateName: "Andhra Pradesh",
    primaryLocation: "Tirupati & Araku Valley",
    droneVideo: "https://cdn.coverr.co/videos/coverr-waves-hitting-a-rocky-shore-5544/1080p.mp4",
    localVideoPath: "/videos/andhra.mp4",
    posterImage: "https://images.unsplash.com/photo-1580294658515-63db974611e4?auto=format&fit=crop&w=1920&q=80",
    droneBadge: "4K DRONE SHOT • 60 FPS • SACRED SEVEN HILLS",
    tagline: "Seven Sacred Hills, Cosmic Temples & Coastal Heights",
    description: "Aerial vistas of the sacred Tirumala hill range where Lord Venkateswara resides, along with scenic Eastern Ghats valleys.",

    stayDetails: {
      title: "Sacred Stays & Hill Cottages",
      options: [
        { type: "Star Pilgrimage Stay", name: "Tirupati Grand Balaji Residency", perk: "VIP darshan queue support" },
        { type: "Hill View Bamboo Cottage", name: "Araku Valley Tribal Eco Lodge", perk: "Misty mountain panoramas" },
        { type: "Coastal Beach Resort", name: "Visakhapatnam Bay View Resort", perk: "Oceanfront facing golden sands" }
      ]
    },

    featuredPackage: {
      id: "andhra-4d",
      title: "Sacred Balaji & Coastal Andhra Tour",
      duration: "4 Days / 3 Nights",
      price: "₹16,800",
      priceUnit: "per person",
      route: "Chennai / Bengaluru → Tirupati Balaji → Srikalahasti",
      inclusions: ["Dedicated AC Tempo Traveller", "Star Hotel Accommodations", "VIP Special Entry Darshan Support", "All Parking, Driver Bata & Tolls"]
    },

    highlights: ["Sri Venkateswara Swamy Darshan", "Srikalahasti Rahu Kethu Temple", "Padmavathi Ammavari Shrine", "Kapila Theertham Waterfalls"]
  }
];

// Popular Destinations matching UI Guide
export const UI_POPULAR_DESTINATIONS = [
  {
    id: "madurai",
    name: "Madurai",
    state: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    description: "The temple city of Meenakshi Amman with 2,500 years of living history.",
    category: "Temples"
  },
  {
    id: "munnar",
    name: "Munnar",
    state: "Kerala",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    description: "Endless rolling tea plantations, cool mountain breeze and mist-clad peaks.",
    category: "Hill Stations"
  },
  {
    id: "hampi",
    name: "Hampi",
    state: "Karnataka",
    image: "https://images.unsplash.com/photo-1600100397608-f010f443b772?auto=format&fit=crop&w=800&q=80",
    description: "Surreal boulder landscapes and majestic UNESCO Vijayanagara stone monuments.",
    category: "Culture"
  },
  {
    id: "pondicherry",
    name: "Pondicherry",
    state: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    description: "French colonial quarters, yellow seaside villas and tranquil beaches.",
    category: "Beaches"
  },
  {
    id: "ooty",
    name: "Ooty",
    state: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
    description: "Queen of Hill Stations with UNESCO Nilgiri toy train and rose gardens.",
    category: "Hill Stations"
  },
  {
    id: "coorg",
    name: "Coorg",
    state: "Karnataka",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    description: "Scotland of India with lush coffee estates, Abbey Falls and misty ridges.",
    category: "Hill Stations"
  }
];

// Featured Packages
export const TOUR_PACKAGES = [
  {
    id: "tamil-nadu-5d",
    title: "Tamil Nadu Heritage & Temple Tour",
    duration: "5 Days / 4 Nights",
    state: "Tamil Nadu",
    category: "Family / Temple / Pilgrimage",
    route: "Chennai → Mahabalipuram → Kanchipuram → Thanjavur → Madurai",
    price: "₹18,500",
    priceUnit: "per person",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    badge: "Most Popular",
    rating: 4.9,
    description: "A cultural odyssey witnessing Shore Temples, Silk City Kanchi, the towering Thanjavur Big Temple, and the vibrant night ceremony of Madurai Meenakshi.",
    inclusions: ["Dedicated AC Tempo/Car", "All Tolls, Parking, Driver Bata", "Standard/Deluxe Hotel Stays", "Breakfast included", "Temple Darshan Guidance"],
    itinerary: [
      { day: "Day 1", plan: "Pickup at Chennai, drive to Mahabalipuram Shore Temple & Pancha Rathas. Night stay in Mahabalipuram." },
      { day: "Day 2", plan: "Kanchipuram Silk & Ekambareswarar Temple, scenic drive to Thanjavur." },
      { day: "Day 3", plan: "UNESCO Brihadisvara (Big Temple) architectural exploration and drive to Madurai." },
      { day: "Day 4", plan: "Madurai Meenakshi Amman Temple Darshan, Thirumalai Nayakkar Palace sound & light show." },
      { day: "Day 5", plan: "Local souvenir shopping & transfer back to Madurai / Chennai airport/railway." }
    ]
  },
  {
    id: "karnataka-5d",
    title: "Karnataka Royal & Hill Station Tour",
    duration: "5 Days / 4 Nights",
    state: "Karnataka",
    category: "Family / Holiday / Group",
    route: "Bengaluru → Mysuru → Srirangapatna → Coorg → Bengaluru",
    price: "₹19,999",
    priceUnit: "per person",
    image: "https://images.unsplash.com/photo-1580294658515-63db974611e4?auto=format&fit=crop&w=800&q=80",
    badge: "Top Scenic",
    rating: 4.9,
    description: "From the grand palaces of Mysuru and Tipu Sultan's Srirangapatna to the misty coffee estates and roaring waterfalls of Coorg.",
    inclusions: ["Chauffeur Driven AC Vehicle", "Fuel, Toll, Inter-State Permits", "Coorg Resort / Hotel Stay", "Breakfast & Welcome Drink", "Sightseeing Entry Support"],
    itinerary: [
      { day: "Day 1", plan: "Bengaluru pickup, drive to Srirangapatna Ranganathaswamy Temple & Mysuru Palace." },
      { day: "Day 2", plan: "Chamundi Hills, Brindavan Gardens musical fountain, afternoon drive into Coorg." },
      { day: "Day 3", plan: "Abbey Falls, Raja's Seat, Madikeri Fort, and coffee plantation nature walk." },
      { day: "Day 4", plan: "Dubare Elephant Camp river rafting experience & Golden Temple (Namdroling Monastery)." },
      { day: "Day 5", plan: "Return scenic drive back to Bengaluru airport or railway drop." }
    ]
  },
  {
    id: "kerala-5d",
    title: "Kerala Backwaters & Misty Hills Tour",
    duration: "5 Days / 4 Nights",
    state: "Kerala",
    category: "Family / Honeymoon / Group",
    route: "Kochi → Munnar → Thekkady → Alleppey → Kochi",
    price: "₹21,500",
    priceUnit: "per person",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    badge: "Relaxation",
    rating: 5.0,
    description: "Crisp mountain air in Munnar tea plantations followed by spice gardens in Thekkady and a blissful private houseboat cruise in Alleppey.",
    inclusions: ["Full Time AC Transport", "Alleppey Houseboat with all 3 meals", "Munnar Hill Resort Stay", "Driver Allowance & Taxes", "Kathakali / Martial Arts Show"],
    itinerary: [
      { day: "Day 1", plan: "Arrive at Kochi, scenic drive across Cheeyappara waterfalls to Munnar." },
      { day: "Day 2", plan: "Eravikulam National Park (Nilgiri Tahr), Tea Museum, Mattupetty Dam." },
      { day: "Day 3", plan: "Drive to Thekkady Periyar wildlife sanctuary, spice plantation tour." },
      { day: "Day 4", plan: "Check-in to traditional Alleppey Houseboat at 12 PM, cruise backwaters with Kerala feast." },
      { day: "Day 5", plan: "Breakfast on boat, transfer back to Kochi for heritage Fort Kochi visit & flight." }
    ]
  },
  {
    id: "shiva-temple-6d",
    title: "Grand Pancha Bhoota & Shiva Temples Yatra",
    duration: "6 Days / 5 Nights",
    state: "Tamil Nadu & AP",
    category: "Dedicated Shiva Pilgrimage",
    route: "Chennai → Kanchi (Earth) → Kalahasti (Air) → Thiruvannamalai (Fire) → Chidambaram (Space) → Trichy (Water) → Rameshwaram",
    price: "₹24,500",
    priceUnit: "per person",
    image: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=800&q=80",
    badge: "Divine Yatra",
    rating: 5.0,
    description: "The ultimate sacred pilgrimage connecting all 5 cosmic elements manifested as Lord Shiva, culminating at the holy island of Rameshwaram.",
    inclusions: ["Luxury AC Pushback Tempo Traveller", "Experienced Devotional Route Driver", "Clean AC Hotel Stays near Temples", "VIP Special Darshan Assistance", "Holy Theertham Bath Support"],
    itinerary: [
      { day: "Day 1", plan: "Chennai to Kanchipuram (Prithvi Lingam - Earth) & Srikalahasti (Vayu Lingam - Air)." },
      { day: "Day 2", plan: "Arunachaleswarar Temple, Tiruvannamalai (Agni Lingam - Fire), Girivalam path." },
      { day: "Day 3", plan: "Chidambaram Natarajar Temple (Akasha Lingam - Space) & Kumbakonam temples." },
      { day: "Day 4", plan: "Thiruvanaikaval Jambukeswarar (Appu Lingam - Water) & Thanjavur Big Temple." },
      { day: "Day 5", plan: "Drive across Pamban Sea Bridge to Sri Ramanathaswamy Temple, 22 holy wells bath." },
      { day: "Day 6", plan: "Sunrise at Dhanushkodi ghost town & Ram Sethu point, return drop at Madurai/Trichy." }
    ]
  }
];

// Dedicated Shiva Temples
export const SHIVA_TEMPLES = [
  {
    name: "Ramanathaswamy Temple, Rameswaram",
    state: "Tamil Nadu",
    type: "Jyotirlinga & Ocean Pilgrimage",
    highlight: "World's Longest Temple Corridor with 1,212 carved pillars & 22 Sacred Theerthams.",
    image: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Arunachaleswarar Temple, Tiruvannamalai",
    state: "Tamil Nadu",
    type: "Pancha Bhoota (Agni / Fire)",
    highlight: "Sprawling at the base of sacred Mount Annamalai; world-famous for Karthigai Deepam.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Brihadisvara Temple, Thanjavur",
    state: "Tamil Nadu",
    type: "UNESCO 1000-Year Chola Masterpiece",
    highlight: "80-tonne single granite stone dome atop a 216-foot soaring Vimana tower.",
    image: "https://images.unsplash.com/photo-1600100397608-f010f443b772?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Chidambaram Natarajar Temple",
    state: "Tamil Nadu",
    type: "Pancha Bhoota (Akasha / Space)",
    highlight: "Lord Shiva portrayed in Cosmic Dance (Ananda Tandava) representing eternal creation.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Murudeshwar Shiva Temple",
    state: "Karnataka",
    type: "Towering 123ft Sea-Facing Statue",
    highlight: "Second tallest Shiva statue in the world, surrounded by the Arabian Sea on 3 sides.",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Srikalahasteeswara Temple, Srikalahasti",
    state: "Andhra Pradesh",
    type: "Pancha Bhoota (Vayu / Air)",
    highlight: "Unflickering flame in the inner sanctum showing perpetual presence of holy air.",
    image: "https://images.unsplash.com/photo-1580294658515-63db974611e4?auto=format&fit=crop&w=800&q=80"
  }
];

// Vehicle Fleet for Tours
export const VEHICLE_FLEET = [
  {
    name: "Force Tempo Traveller",
    capacity: "12 / 17 / 20 Seater",
    idealFor: "Family & Corporate Group Tours",
    features: ["Pushback Luxury Seats", "High-Roof AC Cabin", "Surround Music System", "Spacious Luggage Carrier"],
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Toyota Innova Crysta",
    capacity: "6+1 / 7+1 Seater",
    idealFor: "Family Holiday & Hill Station Drives",
    features: ["Plush Captain Seats", "Dual AC Climate Control", "Supreme Highway Stability", "Generous Boot Space"],
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Sedan (Swift Dzire / Etios)",
    capacity: "4+1 Seater",
    idealFor: "Couples & Small Families",
    features: ["Fuel Efficient & Smooth Ride", "Chilled Air Conditioning", "Compact for City & Temple Streets", "Affordable Rates"],
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Executive Mini Bus",
    capacity: "21 / 25 / 32 Seater",
    idealFor: "Large Pilgrimage & Wedding Groups",
    features: ["Air Suspension Comfort", "Individual AC Vents", "PA Microphone System", "Heavy Luggage Deck"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80"
  }
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ramesh Kannan",
    location: "Salem, Tamil Nadu",
    destination: "Madurai & Rameswaram",
    state: "Tamil Nadu",
    vehicle: "12-Seater AC Tempo Traveller",
    duration: "4 Days",
    rating: 5,
    text: "South Indian Tourism Mohanur organized our family temple trip flawlessly. The driver was very patient with elderly parents and knew every temple timing."
  },
  {
    id: 2,
    name: "Pooja & Karthik",
    location: "Bengaluru, Karnataka",
    destination: "Coorg & Mysuru Palace",
    state: "Karnataka",
    vehicle: "Innova Crysta",
    duration: "5 Days",
    rating: 5,
    text: "The drone-like scenic views in Coorg coffee estates were mindblowing! The itinerary was relaxed, safe driving on hairpin bends, and hotel rooms were clean."
  },
  {
    id: 3,
    name: "Suresh Babu",
    location: "Hyderabad, Telangana",
    destination: "Munnar & Alleppey Houseboat",
    state: "Kerala",
    vehicle: "17-Seater Tempo Traveller",
    duration: "5 Days",
    rating: 5,
    text: "Our group of 14 cousins booked the 5-day Kerala tour. The houseboat experience was unforgettable and the vehicle was exceptionally neat with pushback seats."
  }
];

// FAQs
export const FAQS = [
  {
    q: "How can I book a South India tour?",
    a: "You can book directly by calling our reservation desks at +91 94433 39921 / +91 73734 35535, or clicking the WhatsApp Enquiry button. You can also fill out the 'Plan Your Trip' form on this website to receive a free customized quotation within minutes."
  },
  {
    q: "Can you customize my itinerary?",
    a: "Yes, 100%! All our tour packages can be customized to match your preferred travel dates, pickup city (Chennai, Bengaluru, Coimbatore, Madurai, Trichy, Namakkal, etc.), budget, hotel categories, and favorite destinations."
  },
  {
    q: "Do you provide transportation throughout the tour?",
    a: "Absolutely. We offer complete round-trip and multi-day transportation with verified, polite, and experienced drivers. Our fleet includes Swift Dzire, Innova Crysta, 12/17/20 Seater Tempo Travellers, and Mini Buses with permits for Tamil Nadu, Karnataka, Kerala, and Andhra Pradesh."
  },
  {
    q: "Can I book a family or group tour?",
    a: "Yes! Family vacations, pilgrimage yatras, friends trips, and corporate outings are our core expertise. Our spacious Tempo Travellers and buses are ideal for groups of 6 to 35+ passengers with large luggage capacity."
  },
  {
    q: "Can I plan a multi-state South India trip?",
    a: "Yes. Many of our most popular packages cross states—such as Bengaluru (Karnataka) to Ooty (Tamil Nadu) to Munnar (Kerala). We take care of all inter-state transport permits, toll taxes, and route planning seamlessly."
  },
  {
    q: "How can I contact your travel team?",
    a: "Our head office is located at Mohanur, Namakkal, Tamil Nadu. You can call us at +91 94433 39921 or +91 73734 35535, message us on WhatsApp at +91 63809 39670, or email us at info@southindiantourism.com. We operate 7 days a week from 6:00 AM to 10:00 PM."
  }
];

// Search tags for instant destination filter
export const ALL_DESTINATION_TAGS = [
  { name: "Ooty (Nilgiris)", state: "Tamil Nadu", category: "Hill Station & Tea Gardens" },
  { name: "Madurai", state: "Tamil Nadu", category: "Meenakshi Amman Temple" },
  { name: "Munnar", state: "Kerala", category: "Tea Mountains & Mist" },
  { name: "Alleppey", state: "Kerala", category: "Backwaters & Houseboat" },
  { name: "Coorg (Kodagu)", state: "Karnataka", category: "Hill Station & Waterfalls" },
  { name: "Hampi", state: "Karnataka", category: "Heritage & Ancient Ruins" },
  { name: "Mysuru", state: "Karnataka", category: "Royal Palaces & Silk" },
  { name: "Tirupati", state: "Andhra Pradesh", category: "Lord Venkateswara Balaji" },
  { name: "Pondicherry", state: "Tamil Nadu", category: "French Promenade & Beaches" },
  { name: "Thanjavur", state: "Tamil Nadu", category: "Chola Big Temple" },
  { name: "Rameswaram", state: "Tamil Nadu", category: "Jyotirlinga & Ocean Bridge" },
  { name: "Kanchipuram", state: "Tamil Nadu", category: "Temple City & Pure Silk" },
  { name: "Tiruvannamalai", state: "Tamil Nadu", category: "Agni Lingam & Girivalam" },
  { name: "Chidambaram", state: "Tamil Nadu", category: "Natarajar Temple & Cosmic Dance" },
  { name: "Srikalahasti", state: "Andhra Pradesh", category: "Vayu Shiva Temple & Rahu Kethu" }
];
