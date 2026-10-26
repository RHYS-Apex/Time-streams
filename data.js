// Empire data — easily extend this array to add more empires
const empires = [
  {
    name: "Roman Empire",
    period: "27 BC – 476 AD",
    continent: "Europe",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
    summary: "One of the most influential empires in history, spanning three continents and shaping Western law, language, and politics.",
    description: "The Roman Empire grew from a small city-state in Italy into a vast dominion stretching from Britain to Egypt. Its legacy in law, engineering, and governance still echoes today.",
    rise: [
      "Founded after the fall of the Roman Republic in 27 BC under Augustus",
      "Military conquests and alliances expanded territory across the Mediterranean",
      "Advanced road network and administration unified diverse peoples"
    ],
    goldenAge: [
      "Pax Romana (27 BC – 180 AD) brought peace and prosperity",
      "Colosseum, aqueducts, and monumental architecture flourished",
      "Legal system and Latin language spread across Europe"
    ],
    fall: [
      "Political instability and frequent emperor changes",
      "Economic troubles and over-reliance on slave labor",
      "Barbarian invasions and sack of Rome in 410 AD and 476 AD"
    ]
  },
  {
    name: "Mongol Empire",
    period: "1206 – 1368",
    continent: "Asia",
    image: "https://images.unsplash.com/photo-1543637005-4d639a4e16de?auto=format&fit=crop&w=800&q=80",
    summary: "The largest contiguous land empire in history, founded by Genghis Khan, connecting East and West through trade.",
    description: "At its peak, the Mongol Empire covered over 24 million km². It fostered the Silk Road trade and cultural exchange between Asia and Europe.",
    rise: [
      "Genghis Khan united nomadic tribes of the steppe in 1206",
      "Superior cavalry and military tactics conquered vast territories",
      "Use of psychological warfare and swift communication (Yam system)"
    ],
    goldenAge: [
      "Pax Mongolica ensured safe trade along the Silk Road",
      "Religious tolerance and administrative reforms",
      "Kublai Khan established the Yuan Dynasty in China"
    ],
    fall: [
      "Division into four successor khanates after Genghis Khan's death",
      "Internal conflicts and succession disputes",
      "Black Death disrupted trade and populations",
      "Rise of local dynasties like the Ming in China"
    ]
  },
  {
    name: "Egyptian Empire (New Kingdom)",
    period: "1550 – 1077 BC",
    continent: "Africa",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80",
    summary: "Ancient Egypt's most powerful era, expanding into Nubia and the Near East, famous for pharaohs like Ramses II.",
    description: "The New Kingdom marked the height of Egyptian power, wealth, and cultural achievement, producing iconic monuments like the temples of Karnak and Abu Simbel.",
    rise: [
      "Expulsion of the Hyksos rulers united Egypt",
      "Military expansion into Nubia and the Levant",
      "Strong centralized rule under powerful pharaohs"
    ],
    goldenAge: [
      "Construction of grand temples and monuments",
      "Wealth from trade and tribute",
      "Flourishing of art, literature, and religion"
    ],
    fall: [
      "Repeated invasions by the Sea Peoples",
      "Economic decline and corruption of the priesthood",
      "Fragmentation and eventual conquest by foreign powers"
    ]
  },
  {
    name: "Aztec Empire",
    period: "1428 – 1521",
    continent: "Americas",
    image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80",
    summary: "A powerful Mesoamerican empire centered in Tenochtitlan, known for its sophisticated society and tribute system.",
    description: "The Aztec Empire dominated central Mexico with a confederation of city-states. Its capital, Tenochtitlan, was one of the largest cities in the world at the time.",
    rise: [
      "Triple Alliance formed in 1428 between Tenochtitlan, Texcoco, and Tlacopan",
      "Military conquests and tribute system expanded influence",
      "Advanced agriculture with chinampas (floating gardens)"
    ],
    goldenAge: [
      "Tenochtitlan grew to over 200,000 inhabitants",
      "Rich culture, calendar system, and architecture",
      "Complex social and religious structure"
    ],
    fall: [
      "Arrival of Spanish conquistadors under Hernán Cortés in 1519",
      "Smallpox and disease devastated the population",
      "Alliances with rival tribes against the Aztecs",
      "Fall of Tenochtitlan in 1521"
    ]
  },
  {
    name: "British Empire",
    period: "1583 – 1997",
    continent: "Europe",
    image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80",
    summary: "The largest empire in history, at its peak covering a quarter of the world's land and population.",
    description: "The British Empire spanned every continent and was famously described as 'the empire on which the sun never sets.' Its influence shaped modern global politics and language.",
    rise: [
      "Naval supremacy after defeating the Spanish Armada (1588)",
      "Colonization of North America, India, and the Caribbean",
      "Industrial Revolution powered economic and military dominance"
    ],
    goldenAge: [
      "Victorian era (1837–1901) saw peak territorial expansion",
      "Control of global trade routes and financial systems",
      "Spread of English language, law, and parliamentary systems"
    ],
    fall: [
      "Two World Wars drained resources and weakened power",
      "Rise of independence movements in India, Africa, and Asia",
      "Decolonization after WWII (1947 India, 1960s Africa)",
      "Handover of Hong Kong to China in 1997 marked symbolic end"
    ]
  },
  {
    name: "Ottoman Empire",
    period: "1299 – 1922",
    continent: "Asia",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80",
    summary: "A vast empire spanning three continents, bridging Europe and Asia for over six centuries.",
    description: "The Ottoman Empire was a Islamic state that controlled much of Southeast Europe, Western Asia, and North Africa. It was a center of trade and culture between East and West.",
    rise: [
      "Founded by Osman I in Anatolia in 1299",
      "Conquest of Constantinople in 1453 by Mehmed II",
      "Military strength and effective administration"
    ],
    goldenAge: [
      "Suleiman the Magnificent (1520–1566) expanded territory and law",
      "Flourishing of art, architecture, and science",
      "Control of key trade routes between Europe and Asia"
    ],
    fall: [
      "Nationalist movements within the empire",
      "Military defeats and loss of territory",
      "Economic decline and dependence on European powers",
      "Dissolution after World War I and establishment of modern Turkey in 1923"
    ]
  },
  {
    name: "Maurya Empire",
    period: "322 – 185 BC",
    continent: "Asia",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    summary: "The first empire to unify most of the Indian subcontinent, known for Ashoka's spread of Buddhism.",
    description: "Founded by Chandragupta Maurya, the empire reached its height under Ashoka the Great, who promoted non-violence and the spread of Buddhism.",
    rise: [
      "Chandragupta Maurya overthrew the Nanda Dynasty in 322 BC",
      "Alliances with Greek powers after Alexander's retreat",
      "Efficient centralized administration"
    ],
    goldenAge: [
      "Ashoka's reign (268–232 BC) spread Buddhism across Asia",
      "Construction of stupas and pillars with edicts",
      "Economic prosperity and trade networks"
    ],
    fall: [
      "Weak successors after Ashoka",
      "Fragmentation and rise of regional kingdoms",
      "Assassination of the last Maurya emperor",
      "Founding of the Shunga Dynasty in 185 BC"
    ]
  },
  {
    name: "Inca Empire",
    period: "1438 – 1533",
    continent: "Americas",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80",
    summary: "The largest empire in pre-Columbian America, stretching along the Andes Mountains.",
    description: "The Inca Empire, or Tawantinsuyu, was renowned for its engineering marvels like Machu Picchu and a vast road network spanning over 40,000 km.",
    rise: [
      "Pachacuti expanded the empire from Cusco in the 15th century",
      "Sophisticated administration and quipu record-keeping",
      "Extensive road system for communication and trade"
    ],
    goldenAge: [
      "Peak under Huayna Capac (1493–1527)",
      "Terraced agriculture and impressive stone architecture",
      "Wealth in gold and silver"
    ],
    fall: [
      "Spanish conquest led by Francisco Pizarro in 1532",
      "Civil war between Huáscar and Atahualpa weakened the empire",
      "Smallpox epidemic killed millions",
      "Execution of Atahualpa in 1533"
    ]
  },
  {
    name: "Persian (Achaemenid) Empire",
    period: "550 – 330 BC",
    continent: "Asia",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Persepolis_Ruins.jpg/800px-Persepolis_Ruins.jpg",
    summary: "The first great world empire, founded by Cyrus the Great, known for religious tolerance and administration.",
    description: "The Achaemenid Empire stretched from the Indus Valley to Greece, pioneering concepts of centralized administration, religious tolerance, and human rights.",
    rise: [
      "Cyrus the Great overthrew the Median Empire in 550 BC",
      "Conquest of Babylon, Lydia, and Egypt",
      "Policy of tolerance towards local customs and religions"
    ],
    goldenAge: [
      "Darius I built Persepolis and the Royal Road",
      "Efficient satrap system of provincial governance",
      "Rich cultural and artistic achievements"
    ],
    fall: [
      "Conquest by Alexander the Great of Macedon",
      "Battle of Gaugamela in 331 BC",
      "Death of Darius III in 330 BC marked the empire's end"
    ]
  },
  {
    name: "Mali Empire",
    period: "1235 – 1600",
    continent: "Africa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Djingareiber_cour.jpg/800px-Djingareiber_cour.jpg",
    summary: "A wealthy West African empire famous for its gold trade and the great city of Timbuktu.",
    description: "The Mali Empire was one of the richest in the world, known for its gold mines and scholarly centers like Timbuktu, which attracted scholars from across the Islamic world.",
    rise: [
      "Sundiata Keita founded the empire in 1235 after defeating the Sosso",
      "Control of trans-Saharan gold and salt trade",
      "Strong military and cavalry"
    ],
    goldenAge: [
      "Mansa Musa's reign (1312–1337) saw immense wealth and influence",
      "Timbuktu became a center of learning and culture",
      "Construction of the Djinguereber Mosque"
    ],
    fall: [
      "Succession disputes and weak rulers",
      "Rise of the Songhai Empire",
      "Disruption of trade routes by European naval dominance"
    ]
  }
];
