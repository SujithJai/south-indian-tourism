// South Indian Tourism Data Source
// Comprehensive Master Data for All Sections and Landing Pages

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

// SECTION 02 – Business Statistics
export const BUSINESS_STATISTICS = [
  {
    id: "destinations",
    number: "30+",
    label: "Popular Tourist Destinations",
    description: "Across the 4 diverse southern states of India",
    icon: "compass"
  },
  {
    id: "states",
    number: "4",
    label: "South Indian States",
    description: "Tamil Nadu, Kerala, Karnataka, Andhra & Telangana",
    icon: "map"
  },
  {
    id: "experiences",
    number: "10+",
    label: "Curated Tour Experiences",
    description: "From misty hills & lagoons to ancient living temples",
    icon: "sparkles"
  },
  {
    id: "customization",
    number: "100%",
    label: "Customized Travel Planning",
    description: "Tailor-made itineraries with private chauffeured vehicles",
    icon: "calendar"
  }
];

// Flight Intro Airplane Video
export const AIRPLANE_INTRO_VIDEO = "/videos/airplane_intro.mp4";

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
    posterImage: "/images/madurai.jpg",
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
    posterImage: "/images/houseboat.jpg",
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
    posterImage: "/images/mysore.jpg",
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
    posterImage: "/images/tirupati.jpg",
    description: "Soar over the Seven Sacred Hills of Lord Venkateswara at Tirumala, the tribal coffee vales of Araku, and royal Charminar monuments.",
    highlights: ["Tirupati Balaji Darshan", "Araku Valley & Borra Caves", "Rishikonda Beach Vizag", "Hyderabad Charminar & Pearls"],
    startingPrice: "₹16,800"
  }
];

// SECTION 03 – Explore South India (4 Regions)
export const EXPLORE_REGIONS = [
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    tagline: "Land of Living Temples & Blue Mist Hills",
    image: "/images/madurai.jpg",
    intro: "Tamil Nadu boasts over two millennia of continuous Dravidian culture, towering temple gopurams with sculpted stone chronicles, cool British-era hill retreats in the Nilgiris, and sacred coastal bridges.",
    highlights: ["Madurai Meenakshi", "Rameswaram Jyotirlinga", "Ooty Toy Train", "Thanjavur Big Temple", "Kanyakumari Sunsets"],
    popularDestinations: ["Madurai", "Rameswaram", "Ooty", "Thanjavur", "Kanyakumari"],
    routeLink: "/destinations?state=Tamil+Nadu"
  },
  {
    id: "kerala",
    name: "Kerala",
    tagline: "God's Own Country, Tranquil Lagoons & Spices",
    image: "/images/houseboat.jpg",
    intro: "Serene interconnected canals of emerald backwaters, rolling velvet hills blanketed in high-altitude tea plantations, wildlife sanctuaries, and authentic Ayurvedic wellness retreats along the Malabar Coast.",
    highlights: ["Alleppey Houseboat Stay", "Munnar Tea Estates", "Thekkady Spice Trails", "Kovalam Golden Beaches", "Fort Kochi Heritage"],
    popularDestinations: ["Munnar", "Alleppey", "Kovalam", "Thekkady", "Kochi"],
    routeLink: "/destinations?state=Kerala"
  },
  {
    id: "karnataka",
    name: "Karnataka",
    tagline: "One State, Many Worlds of Stone & Green",
    image: "/images/mysore.jpg",
    intro: "From the majestic 14th-century Vijayanagara granite boulder ruins of Hampi to royal Wodeyar palaces in Mysuru and lush rainforest coffee plantations nestled in the misty valleys of Coorg.",
    highlights: ["Hampi Stone Chariot", "Mysore Palace Splendor", "Coorg Coffee Estates", "Chikmagalur Peaks", "Bengaluru Tech Hub"],
    popularDestinations: ["Hampi", "Coorg", "Mysuru", "Chikmagalur", "Bengaluru"],
    routeLink: "/destinations?state=Karnataka"
  },
  {
    id: "andhra-telangana",
    name: "Andhra Pradesh & Telangana",
    tagline: "Spiritual Heights, Valleys & Royal Nizami Forts",
    image: "/images/tirupati.jpg",
    intro: "Home to the revered Seven Sacred Hills of Lord Venkateswara at Tirumala, the primordial million-year-old limestone Borra Caves in Araku Valley, coastal shores in Visakhapatnam, and majestic pearls of Hyderabad.",
    highlights: ["Tirupati Balaji Darshan", "Araku Valley Vistas", "Visakhapatnam Coastline", "Hyderabad Charminar", "Srikalahasti Vayu Lingam"],
    popularDestinations: ["Tirupati", "Araku Valley", "Visakhapatnam", "Hyderabad", "Srikalahasti"],
    routeLink: "/destinations?state=Andhra+Pradesh"
  }
];

// SECTION 04 – Popular Destinations Across South India
export const POPULAR_DESTINATIONS = [
  {
    id: "madurai",
    name: "Madurai",
    state: "Tamil Nadu",
    image: "/images/madurai.jpg",
    category: "Temple Heritage",
    description: "The 2,500-year-old soul of Tamil culture centered around the four colossal 50-meter gopurams of Meenakshi Amman Temple.",
    attractions: ["Meenakshi Amman Temple", "Thirumalai Nayakkar Mahal", "Gandhi Memorial Museum", "Vandiyur Mariamman Teppakulam"],
    bestTime: "October – March"
  },
  {
    id: "munnar",
    name: "Munnar",
    state: "Kerala",
    image: "/images/munnar.jpg",
    category: "Hill Station & Tea",
    description: "Idyllic hill town nestled at 1,600m above sea level at the confluence of three mountain streams, famed for rolling tea plantations and mist.",
    attractions: ["Eravikulam National Park", "Mattupetty Dam", "Tea Museum", "Anamudi Peak (Highest in South India)"],
    bestTime: "September – May"
  },
  {
    id: "hampi",
    name: "Hampi",
    state: "Karnataka",
    image: "/images/destinations.jpg",
    category: "UNESCO World Heritage",
    description: "Spectacular open-air museum of monolithic boulders and majestic ruins of the 14th-century Vijayanagara Empire along the Tungabhadra River.",
    attractions: ["Stone Chariot at Vijaya Vittala", "Virupaksha Temple", "Lotus Mahal", "Elephant Stables", "Matanga Hill Sunset"],
    bestTime: "October – March"
  },
  {
    id: "alleppey",
    name: "Alleppey (Alappuzha)",
    state: "Kerala",
    image: "/images/houseboat.jpg",
    category: "Backwaters & Houseboat",
    description: "The 'Venice of the East' known for its tranquil labyrinth of palm-shaded lagoons, lakes, and overnight luxury private houseboat cruises.",
    attractions: ["Vembanad Lake Houseboat Cruise", "Alappuzha Beach & Pier", "Marari Beach", "Kuttanad Below-Sea Farming"],
    bestTime: "September – March"
  },
  {
    id: "mysuru",
    name: "Mysuru (Mysore)",
    state: "Karnataka",
    image: "/images/mysore.jpg",
    category: "Royal Heritage",
    description: "The cultural capital of Karnataka celebrated for the luminous Indo-Saracenic Mysore Palace, rich sandalwood, and pure silk weaves.",
    attractions: ["Mysore Palace", "Chamundi Hills & Nandi Bull", "Brindavan Gardens", "Devaraja Market", "St. Philomena's Cathedral"],
    bestTime: "October – March"
  },
  {
    id: "tirupati",
    name: "Tirupati (Tirumala)",
    state: "Andhra Pradesh",
    image: "/images/tirupati.jpg",
    category: "Sacred Pilgrimage",
    description: "The world-famous spiritual hill temple of Lord Sri Venkateswara perched atop the sacred Seshachalam Seven Hills in Tirumala.",
    attractions: ["Sri Venkateswara Swamy Temple", "Silathoranam Natural Arch", "Kapila Theertham", "Padmavathi Ammavari Temple"],
    bestTime: "Year Round (Best: September – March)"
  },
  {
    id: "ooty",
    name: "Ooty (Udhagamandalam)",
    state: "Tamil Nadu",
    image: "/images/munnar.jpg",
    category: "Queen of Hill Stations",
    description: "Nestled in the Blue Nilgiri Mountains with aromatic eucalyptus forests, sprawling botanical gardens, and the heritage UNESCO Toy Train.",
    attractions: ["Nilgiri Mountain Railway", "Ooty Lake & Boating", "Botanical & Rose Gardens", "Doddabetta Peak Viewpoint"],
    bestTime: "March – June & September – November"
  },
  {
    id: "coorg",
    name: "Coorg (Kodagu)",
    state: "Karnataka",
    image: "/images/tourbus.jpg",
    category: "Coffee & Rainforests",
    description: "Known as the 'Scotland of India', Coorg is a mist-clad highland carpeted in lush coffee estates, fragrant spice plantations, and cascading waterfalls.",
    attractions: ["Abbey Falls", "Raja's Seat Sunset", "Dubare Elephant Camp", "Namdroling Golden Monastery", "Tadiandamol Peak"],
    bestTime: "October – April"
  }
];

// SECTION 05 – Unique South Indian Travel Experiences (8 Curated Categories)
export const EXPERIENCES_LIST = [
  {
    id: "hill-stations",
    title: "Hill Station Experiences",
    subtitle: "Misty Western Ghats & Blue Mountains",
    image: "/images/munnar.jpg",
    description: "Wake up to floating mountain clouds, crisp highland air, and endless rows of emerald tea bushes in Ooty, Munnar, Kodaikanal, and Coorg.",
    highlights: ["Tea picking experiences", "Nilgiri Toy Train rides", "Panoramic peak viewpoints", "Pine forest walking trails"],
    featuredLocations: ["Ooty", "Munnar", "Coorg", "Kodaikanal"]
  },
  {
    id: "beaches",
    title: "Beach Experiences",
    subtitle: "Golden Sands & Tropical Coastlines",
    image: "/images/houseboat.jpg",
    description: "Relax beneath towering coconut palms along pristine golden sands where turquoise Arabian Sea waves meet tranquil Malabar fishing coves.",
    highlights: ["Kovalam lighthouse sunset", "Varkala red cliff coastline", "Marina promenade walks", "Gokarna secluded coves"],
    featuredLocations: ["Kovalam", "Varkala", "Gokarna", "Visakhapatnam"]
  },
  {
    id: "backwaters",
    title: "Backwater Experiences",
    subtitle: "Private Houseboats on Serene Lagoons",
    image: "/images/houseboat.jpg",
    description: "Glide silently aboard a traditional wooden Kettuvallam through mirror-smooth canals, savoring fresh Karimeen fish and watching village life unfold.",
    highlights: ["Overnight luxury houseboat", "Canal canoe village tours", "Sunset lake cruises", "Authentic Kerala Sadya meals"],
    featuredLocations: ["Alleppey", "Kumarakom", "Kollam", "Kochi"]
  },
  {
    id: "wildlife-safaris",
    title: "Wildlife Safaris",
    subtitle: "Elephant Corridors & Tiger Reserves",
    image: "/images/tourbus.jpg",
    description: "Journey deep into protected rainforests of the Western Ghats home to wild Asian elephants, Bengal tigers, Nilgiri tahrs, and exotic birds.",
    highlights: ["Periyar boat safaris", "Bandipur tiger jeep drives", "Dubare elephant river baths", "Mudumalai jungle trails"],
    featuredLocations: ["Periyar", "Bandipur", "Nagarhole", "Mudumalai"]
  },
  {
    id: "temple-spiritual",
    title: "Temple & Spiritual Journeys",
    subtitle: "Living Architecture & Cosmic Shrines",
    image: "/images/madurai.jpg",
    description: "Walk barefoot through ancient stone corridors echoing with sacred Vedic chants, oil lamp aartis, and centuries of devout spiritual energy.",
    highlights: ["Madurai Meenakshi Aarti", "Rameswaram 22 sacred wells", "Tirupati Balaji Darshan", "Brihadisvara shadow miracle"],
    featuredLocations: ["Madurai", "Rameswaram", "Tirupati", "Thanjavur"]
  },
  {
    id: "heritage-culture",
    title: "Heritage & Cultural Experiences",
    subtitle: "Royal Dynasties & Stone Chronicles",
    image: "/images/destinations.jpg",
    description: "Step into glorious bygone eras of Chola kings, Wodeyar maharajas, and Vijayanagara emperors etched in monumental stone palaces.",
    highlights: ["Hampi monolithic monuments", "Mysore Palace illumination", "Chettinad mansion tours", "Mahabalipuram rock reliefs"],
    featuredLocations: ["Hampi", "Mysuru", "Chettinad", "Mahabalipuram"]
  },
  {
    id: "tea-plantations",
    title: "Tea & Spice Plantation Experiences",
    subtitle: "Fragrant Valleys & Heritage Factories",
    image: "/images/munnar.jpg",
    description: "Stroll along manicured tea gardens where cardamom, pepper, and cinnamon perfume the morning breeze, with tastings of single-estate brews.",
    highlights: ["Tea tasting sessions", "Guided spice plantation walks", "Colonial tea factory tours", "Fresh organic spice shopping"],
    featuredLocations: ["Munnar", "Thekkady", "Wayanad", "Valparai"]
  },
  {
    id: "adventure-nature",
    title: "Adventure & Nature Experiences",
    subtitle: "Trekking Peaks, Waterfalls & Rafting",
    image: "/images/tourbus.jpg",
    description: "Thrill to mountain trekking summits, bamboo rafting on wild forest rivers, and standing in thunderous spray beneath cascading tropical waterfalls.",
    highlights: ["Western Ghats ridge treks", "Bamboo river rafting", "Waterfalls rappelling & dips", "Campfire eco-retreats"],
    featuredLocations: ["Coorg", "Wayanad", "Athirappilly", "Chikmagalur"]
  }
];

// SECTION 06 – Popular South India Tour Packages (4 Core Packages + Extended)
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
    image: "/images/madurai.jpg",
    description: "Living Dravidian temple architecture, UNESCO Chola heritage towers, and cultural heartlands of ancient Pandya kings.",
    highlights: ["Mahabalipuram Shore Temple & Pancha Rathas", "UNESCO Brihadisvara Big Temple in Thanjavur", "Madurai Meenakshi Temple & Palace", "Private AC vehicle with dedicated chauffeur"],
    inclusions: ["Dedicated AC Sedan/Tempo", "All Tolls, Parking, Driver Bata", "3-Star / Deluxe Hotel Stays", "Daily Breakfast included", "Temple Darshan Guidance"],
    exclusions: ["Airfare / Train tickets", "Monument Entry & Camera tickets", "Lunch & Dinner (unless specified)", "Personal expenses"],
    itinerary: [
      { day: "Day 1", plan: "Chennai pickup, scenic drive to UNESCO Mahabalipuram Shore Temple, Pancha Rathas & Arjuna's Penance. Overnight stay in Mahabalipuram." },
      { day: "Day 2", plan: "Drive through Kanchipuram silk town, visit Ekambareswarar Temple, and continue toward the Chola capital of Thanjavur." },
      { day: "Day 3", plan: "Marvel at the architectural miracle of Brihadisvara (Big Temple), Palace art gallery, then drive south to Madurai." },
      { day: "Day 4", plan: "Madurai Meenakshi Amman Temple sacred darshan, Thirumalai Nayakkar Palace evening sound & light show." },
      { day: "Day 5", plan: "Local handicraft shopping, famous Jigarthanda drink, transfer back to Madurai / Chennai airport/railway." }
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
    image: "/images/houseboat.jpg",
    description: "Crisp mountain air in Munnar tea plantations followed by spice plantation walks and a private luxury houseboat cruise in Alleppey.",
    highlights: ["Munnar sprawling tea gardens & Mattupetty Dam", "Thekkady Periyar Wildlife Sanctuary spice walk", "Private traditional Alleppey Houseboat stay with 3 meals", "Scenic drive past Cheeyappara waterfalls"],
    inclusions: ["Full Time Dedicated AC Transport", "Overnight Alleppey Houseboat with all 3 meals", "Deluxe Munnar Hill Resort Stay", "Driver Allowance & Inter-state Taxes", "Spice Plantation Entry"],
    exclusions: ["Airfare / Train tickets", "Boating tickets in Periyar", "Kathakali / Kalaripayattu tickets", "Personal tips"],
    itinerary: [
      { day: "Day 1", plan: "Arrive at Kochi airport, scenic mountain drive across Cheeyappara & Valara waterfalls to Munnar. Check-in to hill resort." },
      { day: "Day 2", plan: "Eravikulam National Park (home to Nilgiri Tahr), Tata Tea Museum, Mattupetty Dam, and Echo Point." },
      { day: "Day 3", plan: "Drive to Thekkady Periyar wildlife haven, guided organic spice plantation walk, evening Kathakali cultural show." },
      { day: "Day 4", plan: "Transfer to Alleppey, board traditional wooden Houseboat at 12 PM, cruise tranquil backwaters with fresh Kerala lunch & dinner." },
      { day: "Day 5", plan: "Breakfast on the water, morning check-out, visit heritage Fort Kochi Chinese fishing nets, drop at Kochi airport." }
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
    image: "/images/mysore.jpg",
    description: "From the grand illuminated palaces of Mysuru to the fragrant rainforest coffee estates and roaring waterfalls of Coorg.",
    highlights: ["Illuminated Mysore Palace & Chamundi Hills", "Coorg coffee plantation guided nature walk", "Abbey Falls & Raja's Seat mountain sunset", "Bylakuppe Golden Tibetan Buddhist Monastery"],
    inclusions: ["Chauffeur Driven AC Vehicle", "Fuel, Toll, Inter-State Permits", "Coorg Resort / Mysore Hotel Stays", "Daily Breakfast & Welcome Drink", "Sightseeing Guidance"],
    exclusions: ["Train / Flight tickets", "Palace entry & camera fees", "Adventure sports & rafting fees", "Meals not in plan"],
    itinerary: [
      { day: "Day 1", plan: "Bengaluru morning pickup, drive to Srirangapatna Tipu Sultan Summer Palace, check in at Mysuru and visit Mysore Palace." },
      { day: "Day 2", plan: "Chamundi Hills temple, Brindavan Gardens musical dancing fountains, scenic afternoon drive into Coorg hills." },
      { day: "Day 3", plan: "Abbey Falls, Raja's Seat panoramic view, Madikeri Fort, and an afternoon walking tour through fragrant coffee estates." },
      { day: "Day 4", plan: "Dubare Elephant Camp river rafting, Bylakuppe Namdroling Golden Monastery with majestic 40ft Buddha statues." },
      { day: "Day 5", plan: "Return scenic drive back to Bengaluru, dropping off at Bengaluru airport or railway station." }
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
    image: "/images/tirupati.jpg",
    description: "Sacred Darshan of Lord Venkateswara at Seven Sacred Hills with the cosmic Srikalahasti Vayu Shiva temple.",
    highlights: ["Tirumala Lord Sri Venkateswara Special Entry Darshan", "Srikalahasti Vayu Lingam Shiva Temple", "Padmavathi Temple in Tiruchanur", "Experienced South Indian driver with temple guidance"],
    inclusions: ["Dedicated AC Tempo Traveller / Car", "3-Star Hotel Accommodations", "Darshan Assistance Support", "All Parking, Driver Bata & Tolls"],
    exclusions: ["Direct Temple Special Entry Darshan Ticket cost", "Personal pooja / archana expenses", "Food other than breakfast", "Tips"],
    itinerary: [
      { day: "Day 1", plan: "Pickup from Chennai or Bengaluru, drive to Tirupati, check into hotel, evening visit to Padmavathi Temple." },
      { day: "Day 2", plan: "Ascend the Seven Sacred Hills to Tirumala, experience divine Sri Venkateswara Swamy Darshan and obtain Laddu Prasadam." },
      { day: "Day 3", plan: "Drive to Srikalahasti (Vayu Lingam) for Rahu-Kethu parihara pooja and sacred bath at Kapila Theertham." },
      { day: "Day 4", plan: "Morning visit to Kanipakam Varasiddhi Vinayaka Temple, return scenic drive back to pickup airport/railway." }
    ]
  }
];

export const DETAILED_PACKAGES = TOUR_PACKAGES;

// SECTION 07 – Shiva Temple & Spiritual Tourism
export const SHIVA_TEMPLES = [
  {
    id: "brihadisvara",
    name: "Brihadisvara Temple (Big Temple)",
    location: "Thanjavur, Tamil Nadu",
    state: "Tamil Nadu",
    element: "Earth / Architectural Wonder",
    type: "UNESCO World Heritage",
    image: "/images/madurai.jpg",
    significance: "Built by Emperor Raja Raja Chola I in 1010 AD, its 66-meter granite vimana is one of the tallest in the world, crowned by an 80-tonne single granite capstone that casts no shadow at noon.",
    circuit: "Chola Temple Trail (Thanjavur → Gangaikonda Cholapuram → Darasuram)"
  },
  {
    id: "ramanathaswamy",
    name: "Ramanathaswamy Temple",
    location: "Rameswaram, Tamil Nadu",
    state: "Tamil Nadu",
    element: "Jyotirlinga & Ocean Bridge",
    type: "Char Dham & Jyotirlinga",
    image: "/images/destinations.jpg",
    significance: "One of the 12 sacred Jyotirlingas, worshipped by Lord Rama. Features the world's longest pillared corridor with 1,212 intricately carved sandstone pillars and 22 sacred teertham wells.",
    circuit: "Southern Spiritual Circuit (Madurai → Rameswaram → Kanyakumari)"
  },
  {
    id: "srikalahasti",
    name: "Srikalahasteeswara Temple",
    location: "Srikalahasti, Andhra Pradesh",
    state: "Andhra Pradesh",
    element: "Vayu (Air) Lingam",
    type: "Pancha Bhoota Sthalam",
    image: "/images/tirupati.jpg",
    significance: "Represents the element of Air (Vayu). The flame of the flickering lamp in the inner sanctum sways continually even with no air entry. Renowned for Rahu-Kethu dosha parihara pooja.",
    circuit: "Tirupati-Srikalahasti Sacred Duo (Tirupati → Srikalahasti → Kanipakam)"
  },
  {
    id: "arunachaleswarar",
    name: "Arunachaleswarar Temple",
    location: "Tiruvannamalai, Tamil Nadu",
    state: "Tamil Nadu",
    element: "Agni (Fire) Lingam",
    type: "Pancha Bhoota Sthalam",
    image: "/images/travelguide.jpg",
    significance: "Represents the element of Fire. Situated at the base of the sacred sacred Arunachala Hill, revered by Ramana Maharshi. Famous for the cosmic Karthigai Deepam flame atop the peak.",
    circuit: "Pancha Bhoota Elemental Circuit"
  },
  {
    id: "murudeshwar",
    name: "Murudeshwar Shiva Temple",
    location: "Murudeshwar, Karnataka",
    state: "Karnataka",
    element: "Coastal Colossus",
    type: "Arabian Sea Monument",
    image: "/images/mysore.jpg",
    significance: "Boasts the world's second tallest statue of Lord Shiva (123 feet / 37 meters), surrounded on three sides by the roaring turquoise waters of the Arabian Sea with a 20-story Raja Gopuram.",
    circuit: "Coastal Karnataka Circuit (Gokarna → Murudeshwar → Udupi)"
  },
  {
    id: "meenakshi-sundareswarar",
    name: "Meenakshi Sundareswarar Temple",
    location: "Madurai, Tamil Nadu",
    state: "Tamil Nadu",
    element: "Divine Union & Cosmic Balance",
    type: "Living Dravidian Wonder",
    image: "/images/madurai.jpg",
    significance: "Historic spiritual epicenter dedicated to Goddess Meenakshi and Lord Sundareswarar (Shiva), featuring 14 soaring gopurams encrusted with thousands of painted mythological figures.",
    circuit: "Tamil Heartland Circuit (Madurai → Dindigul → Trichy)"
  }
];

// SECTION 08 – Travel Guide Data
export const TRAVEL_GUIDE_DATA = {
  bestTime: {
    summary: "The winter and post-monsoon months (October to March) offer the most pleasant climate across South India, with daytime temperatures between 20°C and 30°C.",
    seasons: [
      { name: "Winter (Oct – Mar)", temp: "18°C – 28°C", verdict: "Best for all states, sightseeing, beaches & temples" },
      { name: "Summer (Apr – Jun)", temp: "26°C – 38°C", verdict: "Ideal for misty hill stations (Ooty, Munnar, Coorg, Kodaikanal)" },
      { name: "Monsoon (Jul – Sep)", temp: "22°C – 30°C", verdict: "Magnificent for lush greenery, waterfalls & Ayurvedic rejuvenation in Kerala" }
    ]
  },
  transportation: [
    { mode: "Private Chauffeured Vehicle", note: "Recommended for families & groups. Freedom to stop at scenic spots, flexible timings, driver handles tolls and permits." },
    { mode: "Indian Railways (Train)", note: "Scenic train journeys include Nilgiri Mountain Toy Train, Konkan Railway, and Vande Bharat Express between major cities." },
    { mode: "Domestic Air Connectivity", note: "International airports in Chennai, Bengaluru, Kochi, Hyderabad, Madurai, Coimbatore, and Mangaluru." }
  ],
  packingTips: [
    "Lightweight breathable cotton clothing for coastal plains and temple towns",
    "Light woolens / jacket for high-altitude hill stations (Munnar, Ooty, Coorg)",
    "Modest dress attire for temples (dhoti/pant for men, saree/salwar for women)",
    "Comfortable slip-on shoes for temple walking (shoes are removed outside)",
    "Sunscreen, wide-brim hat, reusable water bottle, and universal adapter"
  ],
  cultureTips: [
    "Remove footwear before entering temple premises or traditional homes",
    "Ask permission before photographing inside temple sanctums or local ceremonies",
    "Try traditional banana-leaf meals using your right hand for authentic experience",
    "Respect local silence zones during sacred temple aartis and puja hours"
  ],
  foodSpecialties: [
    { state: "Tamil Nadu", dishes: "Crispy Masala Dosa, Chettinad Pepper Chicken, Pongal, Filter Coffee, Jigarthanda" },
    { state: "Kerala", dishes: "Appam with Stew, Karimeen Pollichathu, Malabar Biryani, Puttu & Kadala, Kerala Sadya" },
    { state: "Karnataka", dishes: "Bisi Bele Bath, Mysore Pak, Coorg Pandi Curry, Neer Dosa with Chutney, Maddur Vada" },
    { state: "Andhra & Telangana", dishes: "Hyderabadi Dum Biryani, Andhra Gongura Mutton, Pesarattu, Mirchi Bajji, Pootharekulu" }
  ]
};

// SECTION 09 – Culture & Heritage Showcase
export const CULTURE_HERITAGE_ITEMS = [
  {
    title: "Dravidian Temple Architecture",
    category: "Architecture",
    image: "/images/destinations.jpg",
    description: "Pyramidal soaring Raja Gopurams, thousand-pillar sculpted granite mandapams, and sacred temple water tanks (Teppakulam) constructed during the Pallava, Chola, and Pandya dynasties."
  },
  {
    title: "Classical Dance & Performing Arts",
    category: "Dance",
    image: "/images/kathakali.jpg",
    description: "The divine geometric postures of Bharatanatyam in Tamil Nadu, dramatic green-painted expressions of Kathakali in Kerala, and rhythmic grace of Kuchipudi in Andhra Pradesh."
  },
  {
    title: "Carnatic Music & Living Traditions",
    category: "Music",
    image: "/images/travelguide.jpg",
    description: "One of the world's oldest musical traditions, celebrated during Chennai's December Music Season, accompanied by the mridangam, veena, and nadaswaram."
  },
  {
    title: "Handloom Silk Weaving",
    category: "Handicrafts",
    image: "/images/madurai.jpg",
    description: "Generations of master weavers handcrafting heavy pure mulberry silk with zari borders in Kanchipuram, Arani, and Mysore."
  },
  {
    title: "Festivals of South India",
    category: "Celebrations",
    image: "/images/mysore.jpg",
    description: "From the harvest thanksgiving of Pongal and floral carpets of Onam to the golden palanquin processions of Madurai Chithirai and illuminated Mysore Dasara."
  },
  {
    title: "Traditional South Indian Cuisine",
    category: "Culinary",
    image: "/images/houseboat.jpg",
    description: "Symphony of cold-pressed coconut oil, roasted mustard seeds, curry leaves, and fragrant spices served hot on a fresh green plantain leaf."
  }
];

// The 6 Website Section Cards (After the Video Journey)
export const WEBSITE_SECTION_CARDS = [
  {
    id: "popular-destinations",
    title: "Popular Destinations",
    subtitle: "Madurai, Munnar, Hampi, Pondicherry, Ooty & Mysuru",
    image: "/images/destinations.jpg",
    icon: "temple",
    badge: "30+ Locations",
    link: "/destinations"
  },
  {
    id: "experiences",
    title: "Experiences",
    subtitle: "Tea estate walks, luxury houseboats & wildlife safaris",
    image: "/images/houseboat.jpg",
    icon: "experiences",
    badge: "Top Curated",
    link: "/experiences"
  },
  {
    id: "tours-packages",
    title: "Tours & Packages",
    subtitle: "Custom 5-Day, 7-Day and 10-Day day-by-day itineraries",
    image: "/images/tourbus.jpg",
    icon: "packages",
    badge: "Best Value",
    link: "/tour-packages"
  },
  {
    id: "travel-guide",
    title: "Travel Guide",
    subtitle: "Best seasons, route plans, packing tips & local customs",
    image: "/images/travelguide.jpg",
    icon: "guide",
    badge: "Expert Advice",
    link: "/travel-guide"
  },
  {
    id: "culture-heritage",
    title: "Culture & Heritage",
    subtitle: "Shiva temples, Kathakali art, silk weaves & Dravidian crafts",
    image: "/images/kathakali.jpg",
    icon: "culture",
    badge: "1000+ Yrs History",
    link: "/culture-heritage"
  },
  {
    id: "plan-your-trip",
    title: "Plan Your Trip",
    subtitle: "Tailor-made quotations, verified drivers & Tempo Travellers",
    image: "/images/munnar.jpg",
    icon: "trip",
    badge: "Free Quote in 10 Min",
    link: "/plan-your-trip"
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
  { name: "Hyderabad", state: "Telangana", category: "Charminar & Historic Forts" },
  { name: "Pondicherry", state: "Tamil Nadu", category: "French Promenade & Beaches" },
  { name: "Thanjavur", state: "Tamil Nadu", category: "Chola Big Temple" },
  { name: "Rameswaram", state: "Tamil Nadu", category: "Jyotirlinga & Ocean Bridge" }
];
