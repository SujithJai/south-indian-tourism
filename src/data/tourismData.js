// South Indian Tourism Data Source
// Exact Match to the "Cinematic Website Concept" Blueprint

export const THEME_COLORS = {
  primary: "#0B4D3B",       // Deep Green
  secondary: "#147D64",     // Emerald
  surface: "#F8F4E6",       // Cream
  accent: "#E7CFA3",        // Sandal
  highlight: "#F4B400",     // Amber
  textDark: "#5A3E2B",      // Earth
  white: "#FFFFFF",
  gradientHero: "linear-gradient(135deg, #0B4D3B 0%, #147D64 100%)",
  gradientButton: "linear-gradient(135deg, #F4B400 0%, #E7CFA3 100%)"
};

export const BUSINESS_INFO = {
  name: "South Indian Tourism",
  tagline: "Explore South India",
  concept: "A video-first, scroll-based tourism website that takes users on a cinematic journey across South India.",
  primaryPhone: "+91 94433 39921",
  secondaryPhone: "+91 73734 35535",
  whatsappNumber: "+91 63809 39670",
  whatsappLink: "https://wa.me/916380939670?text=Hello%20South%20Indian%20Tourism%2C%20I%20am%20interested%20in%20planning%20a%20tour%20package.",
  email: "info@southindiantourism.com",
  address: "Nehru Nagar, Kuthangalmedu, Namakkal Road, Mohanur, Namakkal, Tamil Nadu, India – 637015",
  workingHours: "Monday – Sunday: 6:00 AM – 10:00 PM"
};

// Flight Intro Map Nodes (0 - 10s Timeline)
export const FLIGHT_MAP_NODES = [
  { id: "hyderabad", name: "Hyderabad", state: "Telangana", x: 62, y: 18, delay: "0.2s" },
  { id: "bengaluru", name: "Bengaluru", state: "Karnataka", x: 38, y: 46, delay: "1.0s" },
  { id: "chennai", name: "Chennai", state: "Tamil Nadu", x: 70, y: 56, delay: "1.8s" },
  { id: "kochi", name: "Kochi", state: "Kerala", x: 32, y: 78, delay: "2.6s" }
];

// The 4 Cinematic Video States (10s to 50s Timeline)
export const CINEMATIC_JOURNEY_STAGES = [
  {
    id: "tamil-nadu",
    stageNumber: 2,
    timecode: "10 – 20 sec",
    stateName: "Tamil Nadu",
    titlePrefix: "EXPLORE SOUTH INDIA",
    tagline: "Temples • Heritage • Hills • Culture",
    famousSpots: "Madurai, Rameswaram, Ooty, Thanjavur",
    droneVideo: "https://cdn.coverr.co/videos/coverr-mist-over-green-hills-3957/1080p.mp4",
    localVideo: "/videos/tamilnadu.mp4",
    posterImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1920&q=80",
    description: "Centuries of living Chola and Pandya temple legacy meets the misty shola ridges of Ooty and the holy ocean bridge of Rameswaram.",
    highlights: ["Madurai Meenakshi 14 Gopurams", "UNESCO Brihadisvara Temple", "Nilgiri Mountain Toy Train", "Rameswaram Sea Corridor"],
    startingPrice: "₹18,500"
  },
  {
    id: "kerala",
    stageNumber: 3,
    timecode: "20 – 30 sec",
    stateName: "Kerala",
    titlePrefix: "EXPLORE SOUTH INDIA",
    tagline: "Backwaters • Hills • Ayurveda • Coast",
    famousSpots: "Munnar, Alleppey, Kovalam, Thekkady",
    droneVideo: "https://cdn.coverr.co/videos/coverr-river-running-through-a-lush-forest-1478/1080p.mp4",
    localVideo: "/videos/kerala.mp4",
    posterImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=80",
    description: "Drift along palm-fringed tranquil backwaters in a luxury private houseboat and breathe in crisp highland air amidst tea carpet hills.",
    highlights: ["Overnight Alleppey Houseboat", "Munnar Tea Museum & Mattupetty", "Kovalam Lighthouse Beach", "Periyar Spice Plantations"],
    startingPrice: "₹21,500"
  },
  {
    id: "karnataka",
    stageNumber: 4,
    timecode: "30 – 40 sec",
    stateName: "Karnataka",
    titlePrefix: "EXPLORE SOUTH INDIA",
    tagline: "Stone Empires • Rainforests • Coffee • Palaces",
    famousSpots: "Hampi, Coorg, Mysuru, Chikmagalur",
    droneVideo: "https://cdn.coverr.co/videos/coverr-flying-over-a-green-forest-1473/1080p.mp4",
    localVideo: "/videos/karnataka.mp4",
    posterImage: "https://images.unsplash.com/photo-1600100397608-f010f443b772?auto=format&fit=crop&w=1920&q=80",
    description: "Traverse surreal boulder landscapes of the 14th-century Vijayanagara Empire and immerse in the fragrant rainforest coffee trails of Coorg.",
    highlights: ["Iconic Hampi Stone Chariot", "Illuminated Mysore Palace", "Abbey Falls in Coorg", "Chikmagalur Peak Trek"],
    startingPrice: "₹19,999"
  },
  {
    id: "andhra-telangana",
    stageNumber: 5,
    timecode: "40 – 50 sec",
    stateName: "Andhra & Telangana",
    titlePrefix: "EXPLORE SOUTH INDIA",
    tagline: "Sacred Hills • Valleys • Historic Forts",
    famousSpots: "Tirupati, Araku, Vizag, Hyderabad",
    droneVideo: "https://cdn.coverr.co/videos/coverr-waves-hitting-a-rocky-shore-5544/1080p.mp4",
    localVideo: "/videos/andhra.mp4",
    posterImage: "https://images.unsplash.com/photo-1580294658515-63db974611e4?auto=format&fit=crop&w=1920&q=80",
    description: "Soar over the Seven Sacred Hills of Lord Venkateswara at Tirumala, the tribal coffee vales of Araku, and royal Charminar monuments.",
    highlights: ["Tirupati Balaji Darshan", "Araku Valley & Borra Caves", "Rishikonda Beach Vizag", "Hyderabad Charminar & Pearls"],
    startingPrice: "₹16,800"
  }
];

// The 6 Exact Website Sections (After the Video Journey - After 50s)
export const WEBSITE_SECTION_CARDS = [
  {
    id: "popular-destinations",
    title: "Popular Destinations",
    subtitle: "Madurai, Munnar, Hampi, Pondicherry, Ooty & Mysuru",
    image: "https://images.unsplash.com/photo-1600100397608-f010f443b772?auto=format&fit=crop&w=800&q=80",
    icon: "temple",
    badge: "30+ Locations"
  },
  {
    id: "experiences",
    title: "Experiences",
    subtitle: "Tea estate walks, luxury houseboats & wildlife safaris",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    icon: "experiences",
    badge: "Top Curated"
  },
  {
    id: "tours-packages",
    title: "Tours & Packages",
    subtitle: "Custom 5-Day, 7-Day and 10-Day day-by-day itineraries",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    icon: "packages",
    badge: "Best Value"
  },
  {
    id: "travel-guide",
    title: "Travel Guide",
    subtitle: "Best seasons, route plans, packing tips & local customs",
    image: "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&w=800&q=80",
    icon: "guide",
    badge: "Expert Advice"
  },
  {
    id: "culture-heritage",
    title: "Culture & Heritage",
    subtitle: "Shiva temples, Kathakali art, silk weaves & Dravidian crafts",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    icon: "culture",
    badge: "1000+ Yrs History"
  },
  {
    id: "plan-your-trip",
    title: "Plan Your Trip",
    subtitle: "Tailor-made quotations, verified drivers & Tempo Travellers",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    icon: "trip",
    badge: "Free Quote in 10 Min"
  }
];

// Featured Packages matching the UI theme
export const TOUR_PACKAGES = [
  {
    id: "tn-5d",
    title: "Tamil Nadu Heritage & Hill Station",
    duration: "5 Days / 4 Nights",
    state: "Tamil Nadu",
    category: "Heritage & Temples",
    route: "Chennai → Mahabalipuram → Thanjavur → Madurai",
    price: "₹18,500",
    priceUnit: "per person",
    badge: "Most Popular",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    description: "Living Dravidian temple architecture, Chola heritage towers, and cultural heartlands.",
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
    id: "kerala-5d",
    title: "Kerala Backwaters & Misty Hills",
    duration: "5 Days / 4 Nights",
    state: "Kerala",
    category: "Nature & Lagoons",
    route: "Kochi → Munnar → Thekkady → Alleppey",
    price: "₹21,500",
    priceUnit: "per person",
    badge: "Top Relaxing",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    description: "Crisp mountain air in Munnar tea plantations followed by a private houseboat cruise in Alleppey.",
    inclusions: ["Full Time AC Transport", "Alleppey Houseboat with all 3 meals", "Munnar Hill Resort Stay", "Driver Allowance & Taxes", "Kathakali / Martial Arts Show"],
    itinerary: [
      { day: "Day 1", plan: "Arrive at Kochi, scenic drive across Cheeyappara waterfalls to Munnar." },
      { day: "Day 2", plan: "Eravikulam National Park, Tea Museum, Mattupetty Dam." },
      { day: "Day 3", plan: "Drive to Thekkady Periyar wildlife sanctuary, spice plantation tour." },
      { day: "Day 4", plan: "Check-in to traditional Alleppey Houseboat at 12 PM, cruise backwaters with feast." },
      { day: "Day 5", plan: "Breakfast on boat, transfer back to Kochi for heritage Fort Kochi visit & flight." }
    ]
  },
  {
    id: "karnataka-5d",
    title: "Karnataka Royal & Hill Station",
    duration: "5 Days / 4 Nights",
    state: "Karnataka",
    category: "Palaces & Rainforests",
    route: "Bengaluru → Mysuru → Coorg → Bengaluru",
    price: "₹19,999",
    priceUnit: "per person",
    badge: "Royal Heritage",
    image: "https://images.unsplash.com/photo-1580294658515-63db974611e4?auto=format&fit=crop&w=800&q=80",
    description: "From the grand palaces of Mysuru to the misty coffee estates and roaring waterfalls of Coorg.",
    inclusions: ["Chauffeur Driven AC Vehicle", "Fuel, Toll, Inter-State Permits", "Coorg Resort / Hotel Stay", "Breakfast & Welcome Drink", "Sightseeing Entry Support"],
    itinerary: [
      { day: "Day 1", plan: "Bengaluru pickup, drive to Srirangapatna Ranganathaswamy Temple & Mysuru Palace." },
      { day: "Day 2", plan: "Chamundi Hills, Brindavan Gardens musical fountain, afternoon drive into Coorg." },
      { day: "Day 3", plan: "Abbey Falls, Raja's Seat, Madikeri Fort, and coffee plantation nature walk." },
      { day: "Day 4", plan: "Dubare Elephant Camp river rafting experience & Golden Temple." },
      { day: "Day 5", plan: "Return scenic drive back to Bengaluru airport or railway drop." }
    ]
  },
  {
    id: "ap-4d",
    title: "Sacred Balaji & Coastal Andhra",
    duration: "4 Days / 3 Nights",
    state: "Andhra Pradesh",
    category: "Divine Pilgrimage",
    route: "Chennai / Bengaluru → Tirupati → Srikalahasti",
    price: "₹16,800",
    priceUnit: "per person",
    badge: "Divine Yatra",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
    description: "Darshan of Lord Venkateswara at Seven Sacred Hills with Srikalahasti Vayu Shiva temple.",
    inclusions: ["Dedicated AC Tempo Traveller", "Star Hotel Accommodations", "VIP Special Entry Darshan Support", "All Parking, Driver Bata & Tolls"],
    itinerary: [
      { day: "Day 1", plan: "Pickup and transfer to Tirupati, check-in to star hotel, visit Padmavathi Temple." },
      { day: "Day 2", plan: "Tirumala hill ascent, Sri Venkateswara Swamy special darshan & Laddu prasadam." },
      { day: "Day 3", plan: "Drive to Srikalahasti for Rahu-Kethu parihara & Kapila Theertham sacred bath." },
      { day: "Day 4", plan: "Kanipakam Vinayaka temple darshan and return drop." }
    ]
  }
];

export const DETAILED_PACKAGES = TOUR_PACKAGES;

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
  { name: "Hyderabad", state: "Telangana", category: "Charminar & Historic Forts" },
  { name: "Pondicherry", state: "Tamil Nadu", category: "French Promenade & Beaches" },
  { name: "Thanjavur", state: "Tamil Nadu", category: "Chola Big Temple" },
  { name: "Rameswaram", state: "Tamil Nadu", category: "Jyotirlinga & Ocean Bridge" }
];
