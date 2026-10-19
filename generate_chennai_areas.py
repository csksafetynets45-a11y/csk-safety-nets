import json

# Comprehensive list of 115+ authentic Chennai localities across all zones
# Format: (slug, name, zone_description, housing_types, localized_issue, tagline, sub_localities, landmarks)
chennai_areas_raw = [
    # --- Central & Prime Residential ---
    ("anna-nagar", "Anna Nagar", "Central Chennai prime residential epicenter",
     "upscale high-rise apartments, luxury residential blocks, and modern gated condominiums",
     "Spacious balconies and French windows overlooking wide avenues face urban pigeon intrusion and require certified SS316 invisible grills and child safety nets.",
     "Premium safety nets & SS316 invisible grills in Anna Nagar — certified installation with 5-year warranty.",
     ["Anna Nagar East", "Anna Nagar West", "Shanthi Colony", "Roundana", "Thirumangalam", "Chintamani", "Tower Park Area"],
     ["Anna Arch", "Anna Nagar Tower Park", "VR Chennai Mall", "Shanthi Colony High Street", "Thirumangalam Metro Station"]),

    ("t-nagar", "T. Nagar", "Chennai's premier commercial and residential hub",
     "high-density multi-story residential apartments, commercial-residential flats, and boutique condominiums",
     "Busy urban corridors and street dust attract roosting pigeons on balconies and AC ledges, demanding discreet anti-bird netting and toddler safety netting.",
     "Discreet pigeon safety nets & balcony grills in T. Nagar — same-day doorstep inspection.",
     ["Pondy Bazaar", "Panagal Park", "Usman Road", "Venkatnarayana Road", "South Boag Road", "North Usman Road", "Burkit Road"],
     ["Panagal Park", "Pondy Bazaar", "T. Nagar Bus Terminus", "Ramee Mall", "Mambalam Railway Station"]),

    ("velachery", "Velachery", "South Chennai booming residential and retail hub",
     "high-rise gated apartment communities, modern residential towers, and multi-tier complexes",
     "High-rise towers facing strong coastal winds require heavy-gauge child safety netting and SS316 invisible grills with tight anchoring to prevent toddler fall risks.",
     "Top-rated balcony safety nets & invisible grills in Velachery — free doorstep measurement.",
     ["Velachery Main Road", "Baby Nagar", "Vijayanagar", "Tansi Nagar", "Dhandeeswaram Nagar", "Ram Nagar", "VGP Selva Nagar"],
     ["Phoenix Marketcity Chennai", "Grand Square Mall", "Velachery MRTS Station", "Vijayanagar Bus Stand", "Dhandeeswaram Temple"]),

    ("adyar", "Adyar", "South Chennai prestigious coastal residential suburb",
     "heritage apartments, luxury beachfront condominiums, and modern residential societies",
     "High coastal humidity and salt-laden sea air require marine-grade SS316 invisible grills and UV-fortified copolymer nets that will not rust or deteriorate.",
     "Marine-grade SS316 invisible grills & balcony nets in Adyar — 100% rust-proof guarantee.",
     ["Gandhi Nagar", "Kasturba Nagar", "Indira Nagar", "Besant Avenue", "Adyar Bridge Road", "Sardar Patel Road", "Padmanabha Nagar"],
     ["Adyar Ananda Bhavan", "Theosophical Society", "Fortis Malar Hospital", "Cancer Institute", "Adyar Gate"]),

    ("besant-nagar", "Besant Nagar", "South Chennai coastal cultural and lifestyle haven",
     "luxury sea-view apartments, upscale residential towers, and peaceful seaside flats",
     "Direct sea breezes and saline atmosphere demand 316-grade stainless steel invisible grills and UV-stabilized balcony netting that withstand coastal weather.",
     "Sea-view balcony safety nets & invisible grills in Besant Nagar — durable coastal protection.",
     ["Elliot's Beach Road", "4th Main Road", "Customs Colony", "Damodarapuram", "Tiger Varadachari Road", "Kalakshetra Colony"],
     ["Elliot's Beach", "Velankanni Church Besant Nagar", "Ashtalakshmi Temple", "Kalakshetra Foundation", "Murugan Temple"]),

    ("thiruvanmiyur", "Thiruvanmiyur", "Gateway to ECR and coastal tech corridor",
     "high-rise beach-view apartments, gated coastal communities, and luxury residential societies",
     "Beach-facing open balconies require strong fall containment nets for toddlers and pets, plus invisible grills that maintain panoramic Bay of Bengal views.",
     "Certified balcony safety nets & invisible grills in Thiruvanmiyur — panoramic views with zero danger.",
     ["East Coast Road Junction", "Valmiki Nagar", "Kamaraj Nagar", "South Avenue", "Kalakshetra Road", "Radhakrishnan Nagar"],
     ["Thiruvanmiyur Beach", "Marundeeswarar Temple", "Tidel Park Boundary", "Thiruvanmiyur Bus Depot", "RTO Beach Road"]),

    ("omr", "OMR (Old Mahabalipuram Road)", "Chennai's premier IT expressway corridor",
     "mega high-rise gated townships, multi-story IT professional towers, and integrated luxury complexes",
     "Towers spanning 15 to 35 floors along OMR experience high wind sheer and require certified safety nets and SS316 invisible grills for balconies and utility shafts.",
     "High-rise safety nets & SS316 invisible grills on OMR — trusted by IT professionals and RWAs.",
     ["TIDEL Park Section", "SRP Tools Junction", "Kandanchavadi", "Perungudi OMR", "Thoraipakkam", "Karapakkam", "Sholinganallur"],
     ["TIDEL Park", "Ascendas International Tech Park", "World Trade Center Chennai", "Futura Tech Park", "Kishkinta Gate OMR"]),

    ("sholinganallur", "Sholinganallur", "OMR IT epicenter and major residential intersection",
     "expansive high-rise gated communities, multi-tower IT townships, and lakeside apartments",
     "Dense high-rise apartments require pigeon exclusion nets, child safety barriers, and ceiling cloth drying hangers to maximize balcony utility space.",
     "Heavy-duty safety nets & ceiling cloth hangers in Sholinganallur — same-day doorstep service.",
     ["Sholinganallur Junction", "Kamaraj Nagar", "Classic Farms", "Ponniyamman Nagar", "Model School Road", "ELCOT SEZ Area"],
     ["ELCOT SEZ", "Wipro SEZ Campus", "Sholinganallur Signal", "HCL Technologies", "Dollar Company Junction"]),

    ("perungudi", "Perungudi", "OMR tech corridor and thriving residential suburb",
     "modern residential multi-rises, gated communities, and tech professional apartments",
     "Apartment balconies overlooking tech parks need transparent invisible grills that allow natural light while preventing accidental falls.",
     "SS316 invisible wire grills & balcony nets in Perungudi — unblocked breeze and total safety.",
     ["Kallukuttai", "Industrial Estate", "Burma Colony", "Seevaram", "OMR Service Road", "Thirumalai Nagar"],
     ["SP Infocity", "Perungudi Lake", "Perungudi Toll Plaza", "Apollo Cradle Karapakkam", "RMZ Millenia"]),

    ("thoraipakkam", "Thoraipakkam", "Central OMR residential and tech township",
     "high-density residential towers, gated high-rises, and modern family apartments",
     "Open balconies and duct shafts frequently attract nesting pigeons, making humane anti-bird netting and durable balcony nets a necessity.",
     "Anti-pigeon safety nets & invisible grills in Thoraipakkam — quick installation & 5-year warranty.",
     ["Okkiyam Thoraipakkam", "Chandrasekhar Avenue", "Anand Nagar", "MCN Nagar", "Customs Colony", "200 Feet Radial Road"],
     ["BSR Mall", "CTS Thoraipakkam", "AKDR Golf Village", "Radial Road Junction", "DBS Bank Campus"]),

    ("karapakkam", "Karapakkam", "Mid-OMR tech corridor and residential sector",
     "high-rise gated apartment societies, tech employee apartments, and modern flats",
     "Balconies on upper floors require certified child fall arrest barriers and space-saving ceiling cloth drying racks.",
     "Balcony safety nets & ceiling cloth drying systems in Karapakkam — free measurement visit.",
     ["Karapakkam Main Road", "TCS Lane", "Ganga Nagar", "KCG College Road", "SBC Layout"],
     ["TCS Karapakkam", "KCG College of Technology", "Marg Swarnabhoomi", "Cognizant Campus", "Karapakkam Bus Stop"]),

    ("navalur", "Navalur", "South OMR lifestyle and high-rise apartment hub",
     "skyline-defining high-rise towers, luxury gated residential enclaves, and premium townships",
     "Skyline towers between 15-30 stories experience high crosswinds, requiring tension-certified SS316 invisible wire grills and safety nets.",
     "Skyline balcony safety nets & invisible grills in Navalur — certified 400kg+ tensile capacity.",
     ["Navalur Junction", "Egattur Border", "Thalambur Road", "Semmancheri Link", "Siruseri Border"],
     ["The Marina Mall Navalur", "Vivira Mall", "AGS Cinemas OMR", "Olympia Opaline", "Hiranandani Upscale"]),

    ("siruseri", "Siruseri", "SIPCOT IT Park corridor and mega township zone",
     "sprawling residential townships, high-rise gated complexes, and modern condominiums",
     "Open suburban surroundings attract birds and wildlife, requiring heavy-duty pigeon defense netting and child fall protection mesh.",
     "Certified high-rise safety nets in Siruseri — 100% virgin polymer with UV stabilizers.",
     ["SIPCOT IT Park Zone", "Sonallur Road", "Pudupakkam Link", "Ettayapuram", "Siruseri Village"],
     ["SIPCOT IT Park Siruseri", "TCS Siruseri Campus", "Chennai Mathematical Institute", "L&T Eden Park", "Urbanrise Township"]),

    ("medavakkam", "Medavakkam", "South Chennai prime residential junction",
     "family-friendly apartment communities, gated high-rises, and builder floor societies",
     "Family apartments with young toddlers require certified child safety nets with narrow anchor spacing for balconies and staircase railings.",
     "Child safety nets & balcony invisible grills in Medavakkam — trusted by 1,000+ families.",
     ["Medavakkam Main Road", "Vadapalani Nagar", "Babu Nagar", "Sowmya Nagar", "United Colony", "Perumbakkam Road"],
     ["Medavakkam Junction Flyover", "Santhosapuram", "Perumbakkam Main Road Signal", "Velammal New Gen School"]),

    ("madipakkam", "Madipakkam", "South Chennai dense residential neighborhood",
     "multi-story residential flats, independent builder apartments, and family complexes",
     "Compact apartment balconies need child safety nets and stainless steel ceiling cloth drying racks to optimize drying area without clutter.",
     "Balcony safety nets & cloth drying racks in Madipakkam — budget-friendly certified safety.",
     ["Koot Road", "Balaiah Nagar", "Ram Nagar North", "Puzhuthivakkam Border", "Moovarasampet", "Sadasiva Nagar"],
     ["Madipakkam Koot Road", "Ponniamman Koil", "Madipakkam Lake", "Ayyappa Temple Madipakkam"]),

    ("pallikaranai", "Pallikaranai", "South Chennai green marshland residential hub",
     "modern high-rise gated communities, lakeside towers, and residential townships",
     "Proximity to the marshland reserve brings high bird activity, making anti-pigeon netting and bird spikes essential for apartment hygiene.",
     "Anti-pigeon safety nets & invisible grills in Pallikaranai — 100% bird-free balconies.",
     ["Pallikaranai Main Road", "Oil Mill Road", "Kamatchi Hospital Road", "Ambal Nagar", "Maxworth Nagar"],
     ["Dr. Kamakshi Memorial Hospital", "Pallikaranai Marsh Reserve", "Jerusalem Engineering College", "Radial Road Flyover"]),

    ("perumbakkam", "Perumbakkam", "Fast-growing South Chennai residential zone",
     "mega multi-story apartment projects, gated townships, and affordable luxury societies",
     "High-rise towers require fall protection netting and window invisible grills to safeguard children and pets against railing gaps.",
     "Durable safety nets & invisible wire grills in Perumbakkam — fast doorstep inspection.",
     ["Perumbakkam Main Road", "Nookampalayam Road", "Global Hospital Road", "Indira Priyadarshini Nagar", "Kailash Nagar"],
     ["Gleneagles Global Health City", "Perumbakkam Lake", "Nookampalayam Junction", "Zigma Apartments"]),

    ("porur", "Porur", "West Chennai prime residential, healthcare, and IT hub",
     "high-rise gated apartment communities, IT worker complexes, and modern flats",
     "Apartments around the IT corridor and lake need high-tensile balcony safety nets and architectural invisible grills for secure, ventilated living.",
     "Premier balcony safety nets & invisible grills in Porur — same-day site visit available.",
     ["Mount-Poonamallee Road", "Arignar Anna Nagar", "Madanandapuram", "Mugalivakkam Border", "Ramachandra Nagar", "Kundrathur Road"],
     ["Sri Ramachandra Hospital", "Porur Toll Gate & Lake", "DLF Cybercity Chennai", "L&T Infotech Campus", "Porur Junction Flyover"]),

    ("ramapuram", "Ramapuram", "West Chennai residential and IT hub",
     "multi-story residential apartments, gated communities, and tech professional housing",
     "Upper floor balconies facing DLF Cybercity require stainless steel invisible grills and anti-bird netting for a spotless, secure home.",
     "SS316 invisible grills & pigeon nets in Ramapuram — uncompromised safety and elegance.",
     ["Mount-Poonamallee High Road", "Rayala Nagar", "Giri Nagar", "Manapakkam Link", "Annai Sathya Nagar"],
     ["DLF IT Park Gate 1 & 2", "SRM Easwari Engineering College", "MIOT International Hospital", "L&T Campus"]),

    ("manapakkam", "Manapakkam", "West Chennai green residential and corporate enclave",
     "luxury gated communities, villa condominiums, and modern apartment towers",
     "Wide balconies benefit from sleek SS316 marine-grade invisible grills that preserve natural ventilation and lush garden views.",
     "Luxury invisible grills & safety nets in Manapakkam — premium materials and written warranty.",
     ["River View Colony", "Manapakkam Main Road", "L&T Colony", "Kolapakkam Border", "Sastha Nagar"],
     ["L&T Construction Headquarters", "CTC Complex", "St. Thomas Hospital", "Manapakkam Bridge"]),

    ("mugalivakkam", "Mugalivakkam", "West Chennai fast-expanding residential suburb",
     "modern multi-tier apartments, gated residential communities, and builder floors",
     "Balconies require childproof safety netting with robust anchoring and space-efficient ceiling cloth drying hoists.",
     "Balcony safety nets & ceiling cloth hangers in Mugalivakkam — free doorstep measurement.",
     ["Mugalivakkam Main Road", "Sabari Nagar", "Kumaran Nagar", "Santhosh Nagar", "DLF Back Gate Area"],
     ["DLF Back Gate", "Mugalivakkam Junction", "Sri Chaitanya School", "Porur Link Road"]),

    ("iyyappanthangal", "Iyyappanthangal", "West Chennai transit and residential center",
     "high-density residential apartments, gated societies, and family complexes",
     "Multi-level balconies face bird intrusion and child safety hazards, solved with heavy-duty safety nets and stainless bird spikes.",
     "Certified safety netting & bird spikes in Iyyappanthangal — clean and sturdy installation.",
     ["Mount-Poonamallee Road", "Oil Mill Road", "Pushpa Nagar", "Kattupakkam Link", "VGN Krona Area"],
     ["Iyyappanthangal Bus Terminus", "Ramachandra University Gate", "VGN Krona", "Prestige Bella Vista Area"]),

    ("kattupakkam", "Kattupakkam", "West Chennai residential neighborhood",
     "contemporary residential apartments, gated communities, and independent floors",
     "High-rise living requires child fall prevention nets and unobtrusive invisible grills to protect toddlers from balcony railing gaps.",
     "Child safety nets & balcony invisible grills in Kattupakkam — 5-year replacement warranty.",
     ["Poonamallee High Road", "Senneerkuppam Link", "Annai Indira Nagar", "VGN Brent Park Area"],
     ["Kattupakkam Signal", "Mangadu Junction Road", "VGN Brent Park", "Saveetha Dental College Link"]),

    ("mangadu", "Mangadu", "West Chennai temple town and residential hub",
     "modern apartment complexes, residential layouts, and gated communities",
     "Apartment balconies require durable pigeon nets and certified child safety netting for complete home security.",
     "Balcony safety nets & invisible grills in Mangadu — prompt doorstep installation.",
     ["Mangadu Main Road", "Kollumedu", "Kamakshi Nagar", "Srinivasa Nagar", "Chikkarayapuram"],
     ["Mangadu Kamakshi Amman Temple", "Kundrathur Road Junction", "Paraniputhur Link", "Sri Muthukumaran College"]),

    ("poonamallee", "Poonamallee", "West Chennai arterial gateway and residential township",
     "expanding high-rise gated townships, residential societies, and builder flats",
     "High-rise towers near the highway require certified fall arrest netting and heavy-gauge invisible grills that withstand strong weather.",
     "High-rise safety nets & invisible grills in Poonamallee — certified materials with warranty.",
     ["Poonamallee High Road", "Trunk Road", "Karayanchavadi", "Sennerkuppam", "Nazarethpet", "Kumananchavadi"],
     ["Poonamallee Bus Terminus", "Blind School Signal", "Saveetha Medical College", "EVP Sanmina SEZ"]),

    ("vanagaram", "Vanagaram", "West Chennai junction between Maduravoyal and Porur",
     "high-rise residential towers, gated apartment communities, and family societies",
     "Balconies require childproof fall arrest netting and humane anti-pigeon netting for clean, worry-free living.",
     "Reliable balcony safety nets & invisible grills in Vanagaram — free doorstep inspection.",
     ["Vanagaram-Ambattur Road", "Apollo Hospital Road", "Maduravoyal Bypass Link", "Rajiv Gandhi Nagar"],
     ["Apollo Specialty Hospitals Vanagaram", "Jesus Calls Prayer Tower", "Vanagaram Toll Plaza", "Maduravoyal Flyover"]),

    ("maduravoyal", "Maduravoyal", "West Chennai junction corridor",
     "residential apartment complexes, high-density housing, and builder floors",
     "Multi-story flats need child fall protection netting, pigeon deterrent spikes, and ceiling cloth drying systems.",
     "Balcony safety nets & cloth drying racks in Maduravoyal — expert rigger crew.",
     ["Poonamallee High Road", "Alapakkam Road", "ERIKARAI", "MGR University Road", "Nerkundram Link"],
     ["Maduravoyal Grade Separator", "Dr. MGR Educational & Research Institute", "Maduravoyal Market", "Koyambedu Bypass"]),

    ("koyambedu", "Koyambedu", "Chennai's central transit and commercial gateway",
     "modern high-rise condominiums, residential apartments, and transit-corridor housing",
     "Heavy traffic dust and bird roosting on balconies make UV-treated pigeon nets and invisible wire grills vital for apartment families.",
     "Pigeon safety nets & invisible grills in Koyambedu — clean anchor finishing & fast turnaround.",
     ["Jawaharlal Nehru Road", "Inner Ring Road", "SAF Games Village", "Market Road", "Rohini Theatre Area"],
     ["CMBT Bus Terminus", "Koyambedu Wholesale Market", "Rohini Silver Screens", "Koyambedu Metro Station", "SAF Games Village"]),

    ("vadapalani", "Vadapalani", "Central-West Chennai entertainment and residential hub",
     "high-rise residential towers, boutique apartment buildings, and family flats",
     "Multi-level balconies face bird intrusion and child safety hazards, solved with high-tensile safety nets and sleek invisible wire grills.",
     "Top safety nets & SS316 invisible grills in Vadapalani — 100% certified fall protection.",
     ["Arcot Road", "100 Feet Road", "Kumaran Colony", "Dwaraka Colony", "Vadapalani Temple Area", "Saligramam Border"],
     ["Vadapalani Murugan Temple", "Nexus Vijaya Mall", "SIMS Hospital", "Vadapalani Metro Station", "AVM Studios"]),

    ("virugambakkam", "Virugambakkam", "West Chennai established residential haven",
     "established residential apartments, peaceful residential blocks, and modern flats",
     "Apartment balconies and open windows require anti-pigeon netting and child safety nets without obstructing airflow.",
     "Certified safety netting & invisible grills in Virugambakkam — prompt doorstep service.",
     ["Arcot Road", "Kali Amman Koil Street", "Venkatesh Nagar", "Sanjay Nagar", "Baskar Colony"],
     ["Chandra Metro Mall", "Virugambakkam Market", "Chinmaya Vidyalaya", "Arcot Road Junction"]),

    ("saligramam", "Saligramam", "West Chennai creative and residential suburb",
     "multi-story residential apartments, builder floors, and gated societies",
     "Toddler safety on open balconies is guaranteed with certified child safety netting and precision stainless anchors.",
     "Balcony safety nets & invisible grills in Saligramam — free doorstep measurement.",
     ["Dasarathapuram", "Gandhi Nagar", "Kaveri Nagar", "Arunachalam Road", "Prasad Studios Area"],
     ["Prasad Studios", "Vembuliamman Koil", "Suriya Hospital", "Vadapalani Border"]),

    ("valasaravakkam", "Valasaravakkam", "Prime West Chennai residential corridor",
     "luxury residential apartments, gated flats, and independent builder floors",
     "Wide balconies and French windows benefit from sleek SS316 invisible grills and durable bird spikes.",
     "Aesthetic invisible grills & safety nets in Valasaravakkam — flawless installation and premium finish.",
     ["Arcot Road", "Choudhary Nagar", "Bethania Nagar", "Alwarthirunagar Border", "Janaki Nagar"],
     ["Mega Mart Valasaravakkam", "La Chatelaine School", "Kesavardhini", "Valasaravakkam Municipality Area"]),

    ("alwarthirunagar", "Alwarthirunagar", "Quiet West Chennai residential neighborhood",
     "residential apartment complexes, family homes, and modern flats",
     "Balconies require child fall containment netting and space-saving ceiling cloth drying hangers.",
     "Balcony safety nets & cloth drying systems in Alwarthirunagar — free doorstep inspection.",
     ["Arcot Road", "Radhakrishnan Salai", "Palaniappa Nagar", "Meenakshi Amman Nagar", "Kamakshi Nagar"],
     ["Alwarthirunagar Bus Stop", "St. John's Matriculation School", "Arcot Road Signal", "Lamech School Area"]),

    ("ashok-nagar", "Ashok Nagar", "Central-South Chennai planned residential neighborhood",
     "planned avenue apartments, modern high-rises, and established family flats",
     "Balconies overlooking avenue trees require UV-treated pigeon nets and transparent invisible grills that maintain panoramic tree-top views.",
     "Premium invisible grills & balcony safety nets in Ashok Nagar — trusted residential rigger crew.",
     ["1st Avenue", "4th Avenue", "11th Avenue", "Pillar Area", "Jafferkhanpet Border", "Postal Colony"],
     ["Ashok Pillar", "Ashok Nagar Metro Station", "Udhayam Theatre Complex", "ESI Hospital KK Nagar"]),

    ("kk-nagar", "KK Nagar", "Planned residential sector and healthcare hub",
     "sector apartment complexes, modern high-rises, and quiet family flats",
     "Sector balconies require high-tensile child fall arrest netting and space-saving ceiling cloth drying racks.",
     "Top-rated balcony safety nets & ceiling cloth hangers in KK Nagar — 5-year warranty.",
     ["1st Sector to 12th Sector", "Munusamy Salai", "Rani Anna Nagar", "Rajamannar Salai", "PT Rajan Salai"],
     ["ESI Hospital KK Nagar", "PSBB School", "Sivan Park", "KK Nagar Bus Terminus", "Alagirisamy Salai"]),

    ("nungambakkam", "Nungambakkam", "Central Chennai elite commercial and diplomatic neighborhood",
     "luxury high-rise residences, boutique apartment enclaves, and premium flats",
     "Multi-level penthouses and French balconies benefit from high-tensile SS316 invisible grills and bird spikes for architectural elegance.",
     "Architectural invisible grills & durable safety nets in Nungambakkam — elegant, unobtrusive home safety.",
     ["Khader Nawaz Khan Road", "Sterling Road", "College Road", "Haddows Road", "Wallace Garden", "Kothari Road"],
     ["Khader Nawaz Khan High Street", "Taj Coromandel", "Loyola College", "Alliance Française", "Nungambakkam Tennis Stadium"]),

    ("alwarpet", "Alwarpet", "Central Chennai upscale heritage and residential locality",
     "luxury high-rise apartments, prestigious builder floors, and boutique gated enclaves",
     "Wide balconies and French windows require ultra-clear SS316 invisible grills and pigeon deterrent netting to preserve aesthetic luxury.",
     "Luxury SS316 invisible grills & safety nets in Alwarpet — discreet, high-tensile protection.",
     ["TTK Road", "CP Ramaswamy Road", "Eldams Road", "Co-operative Colony", "Seethammal Colony", "Venus Colony"],
     ["The Park Sheraton / Crowne Plaza", "TTK Road Junction", "Music Academy Boundary", "Amethyst Cafe Area"]),

    ("mylapore", "Mylapore", "Chennai's historic cultural and temple epicenter",
     "traditional avenue apartments, modern multi-story flats, and heritage homes",
     "Dense urban bird nesting on balconies, duct shafts, and AC outdoor units calls for humane anti-pigeon netting and stainless bird spikes.",
     "Humane pigeon safety nets & bird spikes in Mylapore — 100% spotless balconies guaranteed.",
     ["Luz Church Road", "Kutchery Road", "R.K. Mutt Road", "North Mada Street", "South Mada Street", "CIT Colony"],
     ["Kapaleeshwarar Temple", "Luz Corner", "San Thome Basilica", "Nageswara Rao Park", "Mylapore Tank"]),

    ("mandaveli", "Mandaveli", "South-Central Chennai serene residential suburb",
     "peaceful avenue apartments, modern gated flats, and residential complexes",
     "High-floor apartment balconies require child fall arrest netting and ceiling cloth drying systems for compact utility areas.",
     "Balcony safety nets & ceiling cloth hangers in Mandaveli — fast same-day rigger dispatch.",
     ["Venkatakrishna Road", "St. Mary's Road", "Norton Road", "R.K. Mutt Road", "Raja Street"],
     ["Mandaveli MRTS Station", "Ramakrishna Math", "St. John's English School", "P.S. Senior Secondary School"]),

    ("ra-puram", "RA Puram (Raja Annamalaipuram)", "Prestigious South Chennai waterfront and residential neighborhood",
     "ultra-luxury high-rise apartments, riverside penthouses, and gated enclaves",
     "Balconies overlooking the Adyar River require premium SS316 marine-grade invisible grills and UV-stabilized anti-bird netting.",
     "Marine SS316 invisible grills in RA Puram — high-wind certified & rust-free.",
     ["Greenways Road", "Bishop Garden", "Chamiers Road", "Canal Bank Road", "Karpagam Avenue"],
     ["Greenways Road MRTS Station", "Chettinad Vidyashram", "Madras Boat Club", "Billroth Hospitals"]),

    ("kotturpuram", "Kotturpuram", "Elite South Chennai riverfront residential locality",
     "luxury riverside apartments, gated high-rises, and embassy residences",
     "High-end apartment balconies need elegant, unobtrusive invisible wire grills that protect toddlers without obstructing river views.",
     "Sleek invisible grills & balcony safety nets in Kotturpuram — architectural precision.",
     ["Gandhi Mandapam Road", "River View Road", "Chitra Nagar", "Kottur Gardens", "Sriram Nagar"],
     ["Anna Centenary Library", "Anna University Gate", "Gandhi Mandapam", "Kotturpuram MRTS Station"]),

    ("kilpauk", "Kilpauk", "Central Chennai green medical and residential hub",
     "established residential apartments, luxury flats, and tranquil gated societies",
     "Upper floor balconies and window openings require durable child safety netting and pigeon exclusion mesh.",
     "Certified safety netting & invisible grills in Kilpauk — prompt doorstep installation.",
     ["Poonamallee High Road", "Halls Road", "Ormes Road", "Balfour Road", "Landons Road", "Taylor's Road"],
     ["Kilpauk Medical College & Hospital", "Ega Theatre", "Bhavan's Rajaji Vidyashram", "Chetpet Eco Park Boundary"]),

    ("chetpet", "Chetpet", "Central Chennai residential and educational neighborhood",
     "luxury lake-view apartments, established residential blocks, and modern flats",
     "Balconies overlooking Chetpet Lake experience strong bird activity, requiring durable anti-pigeon netting and stainless bird spikes.",
     "Anti-pigeon safety nets & invisible grills in Chetpet — lake-view home security.",
     ["Harrington Road", "Spur Tank Road", "McNichols Road", "Chetpet Eco Park Area", "College Road Link"],
     ["Chetpet Eco Park & Lake", "Harrington Road High Street", "MCC Higher Secondary School", "Chetpet Railway Station"]),

    ("egmore", "Egmore", "Central Chennai heritage commercial and residential district",
     "multi-story residential apartments, commercial-residential flats, and boutique condominiums",
     "Balconies facing bustling city centers require heavy-duty fall containment nets and bird exclusion barriers.",
     "Balcony safety nets & invisible grills in Egmore — prompt installation across all sectors.",
     ["Pantheon Road", "Gandhi Irwin Road", "Montieth Road", "Kennet Lane", "Rukmani Lakshmipathi Salai"],
     ["Egmore Railway Station", "Government Museum Chennai", "Don Bosco Matriculation School", "Albert Theatre"]),

    ("triplicane", "Triplicane", "Historic coastal residential neighborhood",
     "high-density multi-family residential apartments, traditional flats, and family homes",
     "Proximity to Marina Beach brings intense sea air and bird activity, calling for rust-proof SS316 fixtures and anti-pigeon netting.",
     "Rust-proof safety nets & pigeon protection in Triplicane — coastal weather resistant.",
     ["Triplicane High Road", "Singarachari Street", "Besant Road", "Pycrofts Road", "Big Street"],
     ["Parthasarathy Temple", "Marina Beach Promenade", "Victoria Hostel Road", "Ice House / Vivekananda House"]),

    ("royapettah", "Royapettah", "Central Chennai vibrant commercial & residential center",
     "multi-story residential apartments, builder flats, and family societies",
     "Compact apartment balconies need child safety nets and dual-pulley ceiling cloth drying hangers to reclaim space.",
     "Affordable safety nets & cloth drying racks in Royapettah — doorstep service across all sectors.",
     ["Whites Road", "Peters Road", "Royapettah High Road", "Goldsmith Street", "Balaji Nagar", "Avvai Shanmugam Salai"],
     ["Express Avenue Mall", "Royapettah Government Hospital", "Wesley Higher Secondary School", "Amir Mahal"]),

    ("gopalapuram", "Gopalapuram", "Central Chennai elite residential enclave",
     "prestigious multi-story flats, boutique apartment buildings, and quiet residential streets",
     "High-end family balconies require certified child safety nets with narrow anchor spacing and transparent invisible wire grills.",
     "Child safety nets & SS316 invisible grills in Gopalapuram — trusted premium service.",
     ["Conran Smith Road", "Lloyds Road", "Gopalapuram 1st Street", "Cathedral Garden Road", "Avvai Shanmugam Salai"],
     ["DAV Boys & Girls School", "National Public School", "Semmozhi Poonga Boundary", "US Consulate Vicinity"]),

    ("kodambakkam", "Kodambakkam", "Central-West Chennai cinema & residential epicenter",
     "high-density residential apartments, builder flats, and modern gated societies",
     "Open balconies and duct shafts require heavy-duty pigeon safety nets and child fall protection barriers.",
     "Pigeon safety nets & invisible grills in Kodambakkam — same-day doorstep service.",
     ["Arcot Road", "Station Road", "United India Colony", "Trustpuram", "Viswanathapuram", "Subbarayan Nagar"],
     ["Kodambakkam Railway Station", "Liberty Theatre Junction", "Meenakshi College for Women", "Trustpuram Ground"]),

    ("west-mambalam", "West Mambalam", "Historic South-Central Chennai residential enclave",
     "multi-tier residential apartments, family flats, and established residential societies",
     "Narrow apartment balconies need certified child fall containment netting and space-saving ceiling cloth drying racks.",
     "Balcony safety nets & ceiling cloth drying systems in West Mambalam — free doorstep inspection.",
     ["Arya Gowda Road", "Station Road", "Govindan Road", "Postal Colony", "Lake View Road", "Brindavan Street"],
     ["Ayodhya Mandapam", "Arya Gowda Road Market", "Mambalam Railway Station West", "Public Health Centre"]),

    ("saidapet", "Saidapet", "South Chennai transit and residential crossroads",
     "multi-story residential apartments, river-adjacent flats, and family housing",
     "Apartments along the Adyar riverfront experience high bird activity, making anti-pigeon netting and invisible wire grills vital.",
     "Anti-pigeon safety nets & invisible grills in Saidapet — certified installation team.",
     ["Anna Salai", "Bazaar Road", "Jones Road", "West Jones Road", "Karaniswarar Koil Street", "Saidapet Court Area"],
     ["Saidapet Metro Station", "Anna Salai Junction", "Maraimalai Adigalar Bridge", "Saidapet Railway Station"]),

    ("guindy", "Guindy", "South Chennai industrial, corporate, and residential hub",
     "modern high-rise condominiums, corporate workforce apartments, and gated societies",
     "Balconies near corporate parks and green reserves require certified safety nets and SS316 invisible grills for child and pet safety.",
     "High-rise safety nets & invisible grills in Guindy — 100% certified fall protection.",
     ["GST Road", "Mount-Poonamallee Road", "Race Course Road", "Five Furlong Road", "Guindy Industrial Estate"],
     ["Guindy National Park", "Kathipara Junction", "Guindy Race Course", "IIT Madras Gate", "Le Royal Meridien Area"]),

    ("ekkatuthangal", "Ekkatuthangal", "Central-South Chennai corporate & residential zone",
     "modern apartment complexes, tech flats, and residential layouts",
     "High-floor balconies facing metro corridors need transparent invisible grills that allow natural breeze while keeping toddlers safe.",
     "SS316 invisible wire grills & balcony nets in Ekkatuthangal — unblocked view and total safety.",
     ["100 Feet Road", "Jawaharlal Nehru Salai", "Defence Colony", "Kalaimagal Nagar", "Achudan Nagar"],
     ["Ekkatuthangal Metro Station", "Olympia Tech Park", "Kasi Theatre", "Hilton Chennai"]),

    ("tambaram", "Tambaram", "South Chennai premier gateway and residential mega-suburb",
     "expansive multi-story apartment societies, gated townships, and independent builder floors",
     "Growing high-rise townships near GST Road require certified child safety nets with narrow anchor spacing and transparent invisible grills.",
     "Certified balcony safety nets & invisible grills in Tambaram — free doorstep measurement.",
     ["Tambaram West", "Tambaram East", "Mudichur Road", "Gandhi Road", "Camp Road", "Selaiyur Link", "Perungalathur Border"],
     ["Tambaram Railway Junction", "Madras Christian College (MCC)", "Hindu Mission Hospital", "Tambaram Sanatorium", "Mudichur Road Junction"]),

    ("tambaram-west", "Tambaram West", "South Chennai residential and transit center",
     "high-density residential apartments, gated complexes, and family societies",
     "Multi-level balconies face bird intrusion and child safety hazards, solved with heavy-duty safety nets and stainless bird spikes.",
     "Balcony safety nets & pigeon defense in Tambaram West — same-day site visit available.",
     ["Mudichur Road", "Kakkan Street", "Rajaji Road", "Kishkinta Road", "Old State Bank Colony"],
     ["Tambaram West Bus Terminus", "Kishkinta Theme Park Road", "Valluvar Gurukulam School", "Mudichur Road Market"]),

    ("tambaram-east", "Tambaram East", "South Chennai serene educational and residential suburb",
     "gated residential apartment complexes, villa communities, and established family flats",
     "Apartments near green campuses require heavy-duty safety nets to protect children and pets against railing gaps.",
     "Child safety nets & SS316 invisible grills in Tambaram East — 5-year replacement warranty.",
     ["Camp Road Junction", "Velachery Main Road", "Poondi Bazaar", "IAF Road", "Selaiyur Border"],
     ["Camp Road Signal", "Madras Christian College Campus", "Air Force Station Tambaram", "Sembakkam Lake Boundary"]),

    ("chromepet", "Chromepet", "South Chennai major commercial and residential township",
     "multi-story residential apartments, gated high-rises, and busy commercial-residential flats",
     "High-rise towers spanning 10-20 floors along GST Road require heavy-duty balcony fall protection netting and anti-pigeon containment.",
     "Certified high-rise safety nets & invisible grills in Chromepet — fast same-day installation.",
     ["GST Road", "Radha Nagar", "Hasthinapuram Main Road", "Nehru Nagar", "CLRI Colony", "Kumaran Kundram"],
     ["Kumaran Kundram Temple", "MIT Campus Anna University", "Chromepet Railway Station", "Saravana Stores Chromepet"]),

    ("pallavaram", "Pallavaram", "South Chennai airport corridor and residential hub",
     "modern high-rise gated communities, residential towers, and builder apartments",
     "High-floor balconies facing the airport corridor experience high wind gusts, requiring tension-certified SS316 invisible grills.",
     "Balcony safety nets & SS316 invisible grills in Pallavaram — robust high-wind protection.",
     ["GST Road", "Cantonment Area", "Old Trunk Road", "Zamin Pallavaram", "Pammal Road", "Keelkattalai Radial Link"],
     ["Pallavaram Railway Station", "Chennai International Airport Boundary", "Pallavaram Hill", "Vels University"]),

    ("sanatorium", "Tambaram Sanatorium", "South Chennai healthcare and residential hub",
     "modern gated residential apartments, peaceful layouts, and family flats",
     "Apartment balconies need child fall protection netting and space-saving ceiling cloth drying racks.",
     "Balcony safety nets & ceiling cloth hangers in Tambaram Sanatorium — prompt doorstep service.",
     ["GST Road", "MEPZ SEZ Area", "Chitlapakkam Main Road", "Sundaram Colony", "Nagappa Nagar"],
     ["MEPZ Special Economic Zone", "Tambaram Sanatorium Railway Station", "Government Hospital of Thoracic Medicine", "Chitlapakkam Lake Border"]),

    ("hastinapuram", "Hastinapuram", "South Chennai established residential neighborhood",
     "multi-story residential apartments, quiet family layouts, and builder floors",
     "Open balconies and duct shafts frequently attract nesting pigeons, making humane anti-bird netting and durable balcony nets a necessity.",
     "Anti-pigeon safety nets & invisible grills in Hastinapuram — 100% bird-free balconies.",
     ["Hastinapuram Main Road", "Gayathri Nagar", "Purushothaman Nagar", "Maruthi Nagar", "Rajendra Nagar"],
     ["Hastinapuram Bus Terminus", "Kumaran Kundram Hill View", "Chitlapakkam Link", "Nehru Nagar Junction"]),

    ("chitlapakkam", "Chitlapakkam", "South Chennai lake township and residential enclave",
     "peaceful lakeside residential apartments, gated societies, and family complexes",
     "Lakeside breeze and high bird activity make anti-pigeon netting and strong child safety nets an absolute necessity.",
     "Balcony safety nets & invisible grills in Chitlapakkam — lake-view protection with 5-year warranty.",
     ["Chitlapakkam Main Road", "Lake View Road", "Sethupathi Nagar", "Muthulakshmi Nagar", "MCF Layout"],
     ["Chitlapakkam Lake", "Chitlapakkam Bus Stop", "Santhoshi Matha Temple", "Varadaraja Perumal Temple"]),

    ("selaiyur", "Selaiyur", "South Chennai high-growth residential corridor",
     "modern residential apartment towers, gated communities, and villa complexes",
     "Toddler safety on open balconies is guaranteed with certified child safety netting and precision stainless anchors.",
     "Certified balcony safety nets in Selaiyur — fast measurement and guaranteed satisfaction.",
     ["Velachery Main Road", "Camp Road Link", "Bharat Nagar", "Agathiyar Nagar", "Tellus Avenue"],
     ["Camp Road Junction", "Bharat University", "Zion Matriculation School", "Selaiyur Police Station"]),

    ("sembakkam", "Sembakkam", "South Chennai lake-adjacent residential suburb",
     "gated residential apartment complexes, family flats, and quiet residential streets",
     "Apartments around Sembakkam Lake need anti-pigeon netting and certified child safety nets for open balconies.",
     "Reliable safety nets & invisible grills in Sembakkam — certified materials with warranty.",
     ["Velachery Main Road", "Sembakkam Lake Road", "Kamarajapuram", "Tellus Avenue", "Gowrivakkam Link"],
     ["Sembakkam Lake", "Velammal Vidyalaya", "Kamarajar High School", "Alavanthar Temple"]),

    ("keelkattalai", "Keelkattalai", "South Chennai radial road residential junction",
     "multi-tier residential apartments, high-rise gated societies, and builder floors",
     "Compact apartment balconies need child safety nets and dual-pulley ceiling cloth drying hangers to optimize space.",
     "Balcony safety nets & ceiling cloth drying systems in Keelkattalai — free doorstep inspection.",
     ["Medavakkam Main Road", "Radial Road Junction", "Nanmangalam Link", "Ambal Nagar", "Eswaran Nagar"],
     ["Keelkattalai Bus Terminus", "Keelkattalai Lake", "Radial Road Flyover", "Ganesh Nagar Junction"]),

    ("kovilambakkam", "Kovilambakkam", "South Chennai radial road growth corridor",
     "contemporary apartment societies, high-rise gated townships, and builder flats",
     "High-rise living requires child fall prevention nets and unobtrusive invisible grills to protect toddlers from balcony railing gaps.",
     "Child safety nets & balcony invisible grills in Kovilambakkam — 5-year replacement warranty.",
     ["200 Feet Radial Road", "Medavakkam Main Road", "Sunnambu Kolathur", "Viduthalai Nagar", "Balamurugan Nagar"],
     ["Radial Road Signal", "S.Veerasamy Chettiar Hall", "Rose Mary Matriculation", "Nanmangalam Forest Border"]),

    ("nanmangalam", "Nanmangalam", "South Chennai forest-reserve residential enclave",
     "residential apartment complexes, gated villa communities, and family layouts",
     "Proximity to Nanmangalam reserve forest means apartments often face bird and monkey intrusion, requiring heavy-duty netting.",
     "Heavy-duty safety nets & monkey barriers in Nanmangalam — complete wildlife and child protection.",
     ["Nanmangalam Main Road", "Reserve Forest Road", "Kulakarai Street", "VGP Shanthi Nagar", "Kovilambakkam Border"],
     ["Nanmangalam Reserve Forest", "Nanmangalam Lake", "St. Jude's Church", "Radial Road Connection"]),

    ("sithalapakkam", "Sithalapakkam", "South Chennai scenic residential corridor",
     "sprawling lakeside apartment complexes, gated high-rises, and modern housing societies",
     "High-altitude winds and lake breeze require extra-tight anchor spacing on balcony safety nets and heavy-gauge SS316 invisible wire grills.",
     "Certified safety netting & SS316 invisible grills in Sithalapakkam — robust high-wind protection.",
     ["Sithalapakkam Main Road", "Ottiyambakkam Road", "Jaya Nagar", "Sankarapuram", "Karanai Link"],
     ["Sithalapakkam Lake & Hill", "TNHB Colony", "Ottiyambakkam Junction", "BVM Global School"]),

    ("pammal", "Pammal", "South-West Chennai established residential municipality",
     "multi-story residential apartments, family flats, and builder floors",
     "Apartments near the airport corridor require certified child fall arrest netting and anti-pigeon spikes.",
     "Trusted safety nets & invisible grills in Pammal — prompt service across all wards.",
     ["Pammal Main Road", "Krishna Nagar", "Moongil Eri", "Sambandam Nagar", "Pozhichalur Link", "Anakaputhur Border"],
     ["Pammal Municipality Office", "Moongil Eri Junction", "BPCL Petrol Pump", "St. Sebastian's Church"]),

    ("anakaputhur", "Anakaputhur", "South-West Chennai riverfront residential town",
     "residential apartment buildings, family homes, and modern builder flats",
     "Balconies overlooking river channels face high bird activity, demanding anti-pigeon safety nets and rust-proof invisible grills.",
     "Anti-pigeon safety nets & invisible grills in Anakaputhur — clean anchor finishing & fast turnaround.",
     ["Anakaputhur Main Road", "Adyar River Road", "Shanthi Nagar", "Balaji Nagar", "Pammal Border"],
     ["Anakaputhur Bridge", "Adyar River Basin", "Ganesh Nagar", "St. Mary's School"]),

    ("guduvanchery", "Guduvanchery", "South Chennai GST Highway satellite township",
     "integrated high-rise gated townships, luxury villa enclaves, and modern apartment complexes",
     "High-rise towers spanning 10-25 floors require certified child safety nets with narrow anchor spacing and transparent invisible wire grills.",
     "Child safety nets & SS316 invisible grills in Guduvanchery — fast same-day rigger dispatch.",
     ["GST Road", "Nellikuppam Road", "Mahalakshmi Nagar", "Thiruporur Road", "Kayarambedu"],
     ["Guduvanchery Railway Station", "SRM University Vicinity", "Nellikuppam Road Junction", "Guduvanchery Bus Stand"]),

    ("urapakkam", "Urapakkam", "South Chennai GST growth corridor",
     "modern multi-tier apartments, gated residential communities, and builder floors",
     "Families with toddlers in high-rise towers require certified child safety nets and space-saving ceiling cloth drying racks.",
     "Top-rated balcony safety nets & ceiling cloth hangers in Urapakkam — free doorstep inspection.",
     ["GST Road", "Karanai Puducherry Road", "Revathipuram", "Priya Nagar", "Adhanur Link Road"],
     ["Urapakkam Railway Station", "New Kilambakkam Bus Terminus (KCBT)", "Karanai Puducherry Junction", "Gold Souk Grande Vicinity"]),

    ("vandalur", "Vandalur", "South Chennai junction and green corridor",
     "high-rise apartment townships, gated villa communities, and university-area housing",
     "Proximity to the zoological park and forested hills means balconies face monkey and bird activity, requiring heavy-gauge safety netting.",
     "Heavy-duty safety nets & monkey barriers in Vandalur — 5-year replacement warranty.",
     ["GST Road", "Vandalur-Kelambakkam Road", "Otteri", "Crescent College Area", "Kolapakkam Link"],
     ["Arignar Anna Zoological Park (Vandalur Zoo)", "Vandalur Railway Station", "BS Abdur Rahman Crescent Institute", "Kelambakkam Junction Road"]),

    ("kelambakkam", "Kelambakkam", "Southern junction between OMR, ECR, and Vandalur",
     "expanding gated apartment townships, high-rise lake-view towers, and villa projects",
     "High-rise towers along the junction require certified balcony fall protection netting and pigeon containment mesh.",
     "Certified high-rise safety nets & invisible grills in Kelambakkam — 5-year replacement warranty.",
     ["OMR Road", "Vandalur-Kelambakkam Road", "Kovalam Road", "Chettinad Hospital Area", "Pudupakkam Border"],
     ["Chettinad Health City", "Kelambakkam Bus Terminus", "Kovalam ECR Junction", "Chettinad University Gate"]),

    ("padur", "Padur", "OMR lakefront residential and university hub",
     "high-rise residential towers, student condominiums, and gated communities",
     "Balconies overlooking Padur Lake experience high winds, making tension-tested SS316 invisible wire grills and safety nets essential.",
     "SS316 invisible grills & balcony safety nets in Padur — lake-view home security.",
     ["OMR Road", "Hindustan University Road", "Muttukadu Backwaters Link", "Padur Lake View Area"],
     ["Hindustan Institute of Technology & Science", "Siruseri IT Park Border", "Padur Lake", "Pacific City"]),

    ("semmancheri", "Semmancheri", "Central OMR residential township",
     "multi-story gated apartment complexes, modern high-rises, and affordable luxury societies",
     "Balconies on upper floors require certified child safety nets with narrow anchor spacing and anti-bird protection.",
     "Balcony safety nets & invisible grills in Semmancheri — prompt doorstep service.",
     ["OMR Road", "Sathyabama University Area", "DLF Garden City Link", "Tsunami Quarters Link"],
     ["Sathyabama Institute of Science and Technology", "DLF Garden City", "Semmancheri Police Station", "OMR Signal"]),

    # --- East Coast Road (ECR) Coastal Luxury Corridors ---
    ("palavakkam", "Palavakkam", "Prime ECR coastal luxury residential neighborhood",
     "luxury seaside villas, beachfront condominiums, and modern apartment flats",
     "Direct coastal winds and salty atmosphere demand marine-grade SS316 invisible wire grills that will never rust or degrade.",
     "Marine SS316 invisible grills & balcony nets in Palavakkam — 100% rust-proof guarantee.",
     ["East Coast Road", "Sea Shell Avenue", "Pari Nagar", "VGP Golden Beach Link", "Anna Salai ECR"],
     ["Palavakkam Beach", "ECR Toll Plaza Vicinity", "Dr. MGR Janaki Arts College", "Prarthana Beach Drive-in Vicinity"]),

    ("kottivakkam", "Kottivakkam", "ECR coastal residential and IT connector suburb",
     "upscale beachside apartments, modern flats, and gated coastal communities",
     "Beachside balconies require certified high-tensile safety netting and invisible grills that allow open sea breeze without fall danger.",
     "Certified balcony safety nets & invisible grills in Kottivakkam — coastal breeze with complete safety.",
     ["East Coast Road", "Kaveri Nagar", "New Beach Road", "Thiruvalluvar Nagar", "OMR Link Road"],
     ["Kottivakkam Beach", "TIDEL Park Connector Road", "Poompuhar Nagar", "ECR Main Road Junction"]),

    ("neelankarai", "Neelankarai", "Prestigious ECR coastal lifestyle enclave",
     "luxury beachfront apartments, sea-view penthouses, and gated villa societies",
     "High coastal humidity and salt spray require SS316 marine-grade invisible wire grills with nylon coating and UV-fortified netting.",
     "Luxury SS316 invisible grills & safety nets in Neelankarai — unhindered ocean views.",
     ["East Coast Road", "Buva Nagar", "Kapaleeswarar Nagar", "Workers Estate", "Beach Road Neelankarai"],
     ["Neelankarai Beach", "Police Station Junction", "Casuarina Drive", "Vaigai Colony"]),

    ("injambakkam", "Injambakkam", "Scenic ECR beachfront residential and resort corridor",
     "beachfront luxury apartments, modern sea-facing residences, and gated societies",
     "Sea-facing open balconies require strong fall containment nets for toddlers and pets, plus invisible grills that maintain panoramic ocean views.",
     "Sea-view balcony safety nets & invisible grills in Injambakkam — panoramic views with zero danger.",
     ["East Coast Road", "Prarthana Drive-in Area", "VGP Golden Beach Area", "Akkarai Border", "Bethel Nagar"],
     ["VGP Universal Kingdom", "VGP Golden Beach", "Prarthana Beach Drive-in Theatre", "ISKCON Temple Chennai"]),

    ("akkarai", "Akkarai", "Elite ECR beachfront residential retreat",
     "ultra-luxury sea-view apartments, gated coastal enclaves, and premium villas",
     "Coastal sea breezes require extra-tight anchor spacing on balcony safety nets and heavy-gauge SS316 invisible wire grills.",
     "Architectural invisible grills & durable safety nets in Akkarai — elegant, unobtrusive home safety.",
     ["East Coast Road", "Sholinganallur Link Road", "Waterfront Enclaves", "Sea Breeze Avenue"],
     ["Akkarai Beach", "Sholinganallur-ECR Link Road Junction", "Water Sports Club", "Kalaignar Karunanidhi Salai"]),

    ("kovalam", "Kovalam (Covelong)", "ECR coastal surf township and resort enclave",
     "sea-facing apartment resorts, residential condominiums, and coastal family homes",
     "Extreme maritime exposure calls for marine-grade 316 stainless invisible wire grills and heavy-gauge anti-bird nets.",
     "Marine-grade safety nets & invisible wire grills in Kovalam — tested against extreme coastal salt air.",
     ["ECR Road", "Kovalam Beach Road", "Semmancheri Kupham", "Surf School Area"],
     ["Covelong Point Surf School", "Taj Fisherman's Cove", "Kovalam Beach", "Dargah Junction"]),

    # --- West Chennai & Industrial Corridors ---
    ("ambattur", "Ambattur", "Major West Chennai residential and industrial township",
     "expansive multi-story apartment societies, industrial workforce housing, and gated complexes",
     "High-density apartments near industrial estates require heavy-duty balcony fall protection netting and anti-pigeon containment.",
     "Certified high-rise safety nets & invisible grills in Ambattur — fast same-day installation.",
     ["Ambattur OT", "Ambattur Industrial Estate", "Menambedu", "Padi Border", "Prithvipakkam", "Ram Nagar Ambattur"],
     ["Ambattur Industrial Estate Bus Terminus", "Ambattur Railway Station", "TI Cycle Factory", "Rakki Cinemas", "Ambit IT Park"]),

    ("ambattur-industrial-estate", "Ambattur Industrial Estate", "West Chennai tech and manufacturing hub",
     "modern corporate workforce apartments, gated high-rises, and tech worker flats",
     "High-floor balconies facing tech hubs require heavy-duty fall containment nets and bird barrier meshes for clean living.",
     "Top safety nets & invisible grills in Ambattur Industrial Estate — guaranteed durability and neat installation.",
     ["Estate Main Road", "South Phase", "North Phase", "Telephone Exchange Road", "Ambit Park Area"],
     ["Ambit IT Park", "Prince Info Park", "Kosmo One IT Park", "Industrial Estate Telephone Exchange"]),

    ("korattur", "Korattur", "North-West Chennai lake township and serene suburb",
     "lakeside residential apartments, quiet gated communities, and family housing",
     "Lakeside breeze and high bird activity make anti-pigeon netting and strong child safety nets an absolute necessity.",
     "Balcony safety nets & invisible grills in Korattur — lake-view protection with 5-year warranty.",
     ["Central Avenue", "North Avenue", "Korattur Lake Road", "Bhakthavatsalam Puram", "Padmavathi Nagar"],
     ["Korattur Lake", "Korattur Railway Station", "Bhakthavatsalam Memorial College", "Alliance Orchid Springss Area"]),

    ("padi", "Padi", "West Chennai junction connecting Anna Nagar and Ambattur",
     "multi-tier residential apartments, commercial-residential flats, and family societies",
     "Multi-level balconies face bird intrusion and child safety hazards, solved with heavy-duty safety nets and stainless bird spikes.",
     "Durable balcony safety nets & invisible grills in Padi — fast doorstep measurement.",
     ["MTH Road", "TVS Nagar", "Lucas TVS Area", "Padi Flyover Area", "Balaramapuram"],
     ["Padi Grade Separator Flyover", "Lucas TVS Campus", "TVS Brakes India", "Sundaram Fasteners Area"]),

    ("nolambur", "Nolambur", "West Chennai prime residential development near Mogappair",
     "luxury high-rise gated communities, modern apartment towers, and family complexes",
     "Families with toddlers in high-rise towers require certified child safety nets with narrow anchor spacing and transparent invisible grills.",
     "Child safety nets & SS316 invisible grills in Nolambur — fast same-day rigger dispatch.",
     ["Nolambur Main Road", "Union Road", "City Light Meadows Area", "Service Road Bye-pass", "Phase 1 & 2"],
     ["City Light Meadows", "Oxy Home Kondo Area", "Nolambur Bus Stand", "Maduravoyal Bypass Junction"]),

    ("mogappair", "Mogappair", "Premier West Chennai planned residential hub",
     "expansive multi-story apartment societies, modern residential towers, and family flats",
     "Sector balconies require high-tensile child fall arrest netting and space-saving ceiling cloth drying racks.",
     "Top-rated balcony safety nets & ceiling cloth hangers in Mogappair — 5-year warranty.",
     ["Mogappair East", "Mogappair West", "Golden Colony", "Jaswant Nagar", "Pari Salai", "Vellalar Street"],
     ["Spartan School", "DAV Girls & Boys Senior Secondary School", "MMM Hospital", "Mogappair West Bus Depot"]),

    ("mogappair-east", "Mogappair East", "West Chennai peaceful educational and residential suburb",
     "established residential apartments, peaceful layouts, and family homes",
     "Apartment balconies and open windows require anti-pigeon netting and child safety nets to ensure total perimeter protection.",
     "Certified safety netting & invisible grills in Mogappair East — prompt doorstep installation.",
     ["Pari Salai", "Spartan Nagar", "Officers Colony", "Collector Nagar", "Ambattur Estate Link"],
     ["Spartan Matriculation School", "Mogappair East Bus Stop", "Collector Nagar Junction", "MMM Hospital Area"]),

    ("mogappair-west", "Mogappair West", "High-density West Chennai residential neighborhood",
     "modern high-rise gated societies, multi-tier flats, and residential complexes",
     "High-rise towers spanning 10-20 floors require certified balcony fall protection netting and pigeon containment mesh.",
     "Certified high-rise safety nets & invisible grills in Mogappair West — 5-year replacement warranty.",
     ["Mogappair West Bus Depot Area", "VGN Minerva Area", "Nolambur Link Road", "Ayyappan Koil Area"],
     ["Mogappair West Bus Depot", "VGN Minerva Complex", "Ayyappan Temple Mogappair", "Velammal Vidyalaya"]),

    ("kolathur", "Kolathur", "North-West Chennai thriving residential and commercial suburb",
     "high-density residential apartments, modern gated towers, and family builder floors",
     "Apartments around the lake and highway require anti-pigeon netting and certified child safety nets for open balconies.",
     "Reliable safety nets & invisible grills in Kolathur — certified materials with warranty.",
     ["200 Feet Inner Ring Road", "SRP Koil Street", "Retteri Junction Area", "Poombuhar Nagar", "Ganga Nagar Kolathur"],
     ["Retteri Flyover", "Everwin Matriculation Higher Secondary School", "DRJ Hospital", "Kolathur Lake"]),

    ("retteri", "Retteri", "North Chennai lake junction on Inner Ring Road",
     "modern apartment complexes, lakeside towers, and residential layouts",
     "Open high-altitude winds and lake breeze require extra-tight anchor spacing on balcony safety nets and heavy-gauge SS316 invisible wire grills.",
     "Certified safety netting & SS316 invisible grills in Retteri — robust high-wind protection.",
     ["Jawaharlal Nehru Road", "Inner Ring Road", "Madhavaram High Road Link", "Retteri Lake Road"],
     ["Retteri Junction Flyover", "Retteri Lake", "DRJ Hospital Kolathur", "Inner Ring Road Corridor"]),

    ("villivakkam", "Villivakkam", "Central-North Chennai historic residential suburb",
     "established residential apartments, multi-story family flats, and traditional homes",
     "Dense urban bird nesting on balconies and duct shafts calls for humane anti-pigeon netting and stainless bird spikes.",
     "Humane pigeon safety nets & bird spikes in Villivakkam — 100% spotless balconies guaranteed.",
     ["MTH Road", "Red Hills Road", "Agathiyar Nagar", "Rajaji Nagar Villivakkam", "Konnur High Road"],
     ["Villivakkam Railway Station", "Agatheeswarar Temple", "Villivakkam Bus Terminus", "Konnur High Road Junction"]),

    ("perambur", "Perambur", "North Chennai historic railway and residential township",
     "modern mega high-rise townships, established railway colony apartments, and family flats",
     "Large integrated high-rise townships like Binny Mills require certified child safety nets with narrow anchor spacing and transparent invisible wire grills.",
     "Certified balcony safety nets & invisible grills in Perambur — 5-year replacement warranty.",
     ["Madhavaram High Road", "Paper Mills Road", "Siruvallur Road", "BB Road", "Perambur Barracks Road"],
     ["Perambur Railway Station", "The Grand Venus Mall / Spectrum Mall", "Binny Mills Township", "Railway Hospital Perambur"]),

    ("madhavaram", "Madhavaram", "North Chennai prime green suburb and transit terminal",
     "modern high-rise gated communities, residential layouts, and affordable luxury apartments",
     "Upper floor balconies and window openings require durable child safety netting and pigeon exclusion mesh.",
     "Top-rated balcony safety nets & invisible grills in Madhavaram — free doorstep measurement.",
     ["Madhavaram High Road", "Roundana Area", "MMDA Colony", "GNT Road", "Puzhal Link Road", "Thiruvalluvar Nagar"],
     ["Madhavaram Mofussil Bus Terminus (MMBT)", "Madhavaram Botanical Garden", "Madhavaram Milk Colony", "Madhavaram Roundana Flyover"]),

    ("red-hills", "Red Hills (Puzhal)", "North Chennai gateway and lake township",
     "expanding residential apartment societies, lakeside layouts, and independent houses",
     "Lakeside breeze and high bird activity make anti-pigeon netting and strong child safety nets an absolute necessity.",
     "Balcony safety nets & invisible grills in Red Hills — lake-view protection with 5-year warranty.",
     ["GNT Road", "Puzhal Lake Road", "Kallikuppam Link", "Narayana Nagar", "Thiruvallur Road"],
     ["Puzhal Lake (Red Hills Reservoir)", "Red Hills Bus Depot", "GNT Road Toll Gate", "Jail Road Puzhal"]),

    ("avadi", "Avadi", "West Chennai defense and residential hub on railway line",
     "expansive multi-story apartment societies, defense colony flats, and modern gated townships",
     "High-density apartments near defense campuses require heavy-duty balcony fall protection netting and anti-pigeon containment.",
     "Certified high-rise safety nets & invisible grills in Avadi — fast same-day installation.",
     ["CTH Road", "HVF Estate", "Military Hospital Road", "Gandhi Nagar", "Kavarapalayam", "Paruthipattu"],
     ["Avadi Railway Station", "HVF Heavy Vehicles Factory", "Avadi Bus Terminus", "Paruthipattu Lake Green Park"]),

    ("thirumullaivoyal", "Thirumullaivoyal", "West Chennai residential suburb between Ambattur and Avadi",
     "modern residential multi-rises, gated communities, and family builder apartments",
     "Balconies require child fall containment netting and space-saving ceiling cloth drying hangers.",
     "Balcony safety nets & cloth drying systems in Thirumullaivoyal — free doorstep inspection.",
     ["CTH Road", "Pachaiamman Nagar", "Srinivasapuram", "Thendral Nagar", "Venkateswara Nagar"],
     ["Pachaiamman Temple", "Thirumullaivoyal Railway Station", "Women's Industrial Park", "CTH Road Junction"]),

    ("pattabiram", "Pattabiram", "West Chennai educational and industrial suburb",
     "gated residential apartment complexes, family flats, and quiet residential streets",
     "Apartments require childproof safety netting with robust anchoring and space-efficient ceiling cloth drying hoists.",
     "Balcony safety nets & ceiling cloth hangers in Pattabiram — free doorstep measurement.",
     ["CTH Road", "TIDEL Park Pattabiram Area", "IAF Station Area", "Babu Nagar", "Thandurai Link"],
     ["Pattabiram Railway Station", "TIDEL Park Pattabiram (New)", "Hindu College Campus", "CTH Highway Junction"]),

    # --- Extended Chennai & Key Residential Suburbs ---
    ("shenoy-nagar", "Shenoy Nagar", "Central Chennai green and peaceful residential enclave",
     "established avenue apartments, boutique flats, and quiet residential societies",
     "Balconies overlooking Thiru Vi Ka Park require UV-treated pigeon nets and transparent invisible grills that maintain panoramic tree-top views.",
     "Aesthetic invisible grills & safety nets in Shenoy Nagar — flawless installation and premium finish.",
     ["Thiru Vi Ka Park Area", "East Club Road", "West Club Road", "Pulla Avenue", "Chetpet Link"],
     ["Shenoy Nagar Metro Station", "Thiru Vi Ka Park", "Pulla Avenue Junction", "Billroth Hospitals Shenoy Nagar"]),

    ("aminjikarai", "Aminjikarai", "Central Chennai historic residential and market zone",
     "multi-story residential apartments, commercial-residential flats, and builder floors",
     "Multi-level balconies face bird intrusion and child safety hazards, solved with heavy-duty safety nets and stainless bird spikes.",
     "Balcony safety nets & pigeon defense in Aminjikarai — same-day site visit available.",
     ["Poonamallee High Road", "Arunachalam Street", "TP Chatram", "Market Street", "Shenoy Nagar Border"],
     ["Ampa Skywalk Mall", "Aminjikarai Market", "Poonamallee High Road Junction", "Ekambareswarar Temple"]),

    ("choolaimedu", "Choolaimedu", "Central Chennai high-density residential suburb",
     "multi-tier residential apartments, student and family flats, and builder floors",
     "Compact apartment balconies need child safety nets and dual-pulley ceiling cloth drying hangers to optimize space.",
     "Balcony safety nets & ceiling cloth drying systems in Choolaimedu — free doorstep inspection.",
     ["Choolaimedu High Road", "Nelson Manickam Road", "Basha Street", "Sowrashtra Nagar", "Gill Nagar"],
     ["Nelson Manickam Road Flyover", "Gill Nagar Park", "Loyola College Border", "Choolaimedu High Road Junction"]),

    ("saidapet-west", "Saidapet West", "Central-South Chennai established residential neighborhood",
     "established residential apartments, peaceful layouts, and family homes",
     "Open balconies and duct shafts need pigeon defense nets and smooth ceiling cloth drying hoists.",
     "Reliable safety nets & invisible grills in Saidapet West — certified materials with warranty.",
     ["Jones Road", "Kothavalchavadi", "Subramanian Street", "Mambalam Border", "CIT Nagar Border"],
     ["Saidapet West Bus Stand", "Jones Road Bridge", "CIT Nagar Ground", "Saidapet Railway Station"]),

    ("cit-nagar", "CIT Nagar", "Prime South Chennai residential and institutional sector",
     "planned avenue apartments, modern high-rises, and established family flats",
     "High-end family balconies require certified child safety nets with narrow anchor spacing and transparent invisible wire grills.",
     "Child safety nets & SS316 invisible grills in CIT Nagar — trusted premium service.",
     ["CIT Nagar 1st Main Road", "South Usman Road Link", "Nandanam Border", "Kannammapet Border"],
     ["CIT Nagar Market", "Kannammapet Signal", "YMCA Nandanam Vicinity", "South Usman Road Junction"]),

    ("nandanam", "Nandanam", "Central-South Chennai premier corporate and residential hub",
     "luxury high-rise residences, modern residential towers, and corporate housing",
     "High-floor balconies facing metro corridors need transparent invisible grills that allow natural breeze while keeping toddlers safe.",
     "SS316 invisible wire grills & balcony nets in Nandanam — unblocked view and total safety.",
     ["Chamiers Road", "Anna Salai", "Venkateswara Agraharam", "Turnbulls Road", "CIT Colony Border"],
     ["Nandanam Metro Station", "YMCA Grounds Nandanam", "Chamiers Road Junction", "Anna Salai Corridor"]),

    ("teynampet", "Teynampet", "Central Chennai arterial commercial and luxury residential zone",
     "luxury multi-story residences, prestigious apartments, and commercial-residential flats",
     "Multi-level penthouses and French balconies benefit from high-tensile SS316 invisible grills and bird spikes for architectural elegance.",
     "Architectural invisible grills & durable safety nets in Teynampet — elegant, unobtrusive home safety.",
     ["Anna Salai", "Eldams Road", "Poes Garden Border", "SIET College Road", "Cathedral Road Link"],
     ["Teynampet Metro Station", "Poes Garden Entrance", "SIET College", "Apollo Speciality Hospital Anna Salai"]),

    ("poes-garden", "Poes Garden", "Chennai's most prestigious VIP and luxury residential enclave",
     "ultra-luxury private residences, bespoke boutique apartments, and elite family homes",
     "Ultra-luxury balconies and open terraces require the highest grade SS316 marine-grade invisible wire grills with zero visual obstruction.",
     "Bespoke SS316 marine invisible grills in Poes Garden — ultra-premium architectural finish.",
     ["Kasturi Ranga Road", "Binny Road", "Cathedral Garden Road", "Stella Maris Border"],
     ["Poes Garden High Street", "Stella Maris College", "Cathedral Road Junction", "Kasturi Ranga Road"]),

    ("mrc-nagar", "MRC Nagar", "South Chennai prime waterfront and diplomatic district",
     "ultra-luxury high-rise seaside condominiums, penthouses, and 5-star hotel enclaves",
     "Skyline apartments directly facing the ocean experience severe salt spray, demanding 316-grade marine stainless cable grills with lifetime integrity.",
     "Marine-grade SS316 invisible grills in MRC Nagar — certified coastal salt-spray tested.",
     ["Santhome High Road", "Leela Palace Road", "Chettinad School Road", "Raja Street"],
     ["The Leela Palace Chennai", "Mayor Ramanathan Chettiar Hall", "Sun TV Network Headquarters", "Santhome Beach Promenade"]),

    ("royapuram", "Royapuram", "North Chennai historic coastal port suburb",
     "traditional multi-story residential apartments, coastal flats, and commercial-residential buildings",
     "Marine exposure and port bird activity demand high-tensile UV copolymer anti-bird netting and SS316 stainless anchors.",
     "Rust-proof safety nets & pigeon protection in Royapuram — coastal weather resistant.",
     ["Manoji Street", "Suriyanarayana Street", "East Kalmandapam Road", "West Kalmandapam Road", "GM Pettai"],
     ["Royapuram Railway Station (Heritage)", "Kalmandapam Junction", "Royapuram Fishing Harbour Border", "St. Peter's Church"]),

    ("washermanpet", "Washermanpet", "North Chennai bustling textile and residential center",
     "high-density residential apartments, builder flats, and traditional family housing",
     "Dense urban bird nesting on balconies, duct shafts, and AC outdoor units calls for humane anti-pigeon netting and stainless bird spikes.",
     "Pigeon safety nets & invisible grills in Washermanpet — same-day doorstep service.",
     ["MC Road", "TH Road", "Sanjeevirayan Koil Street", "Old Washermanpet", "New Washermanpet"],
     ["Washermanpet Metro Station", "MC Road Shopping Street", "Sir Theagaraya College", "TH Road Signal"]),

    ("george-town", "George Town (Parrys)", "Historic commercial and residential origin of modern Chennai",
     "commercial-residential multi-tier buildings, historic flats, and dense urban housing",
     "High pigeon roosting in open balcony shafts and duct spaces requires complete enclosure with UV-stabilized heavy-duty netting.",
     "Durable pigeon defense netting in George Town — permanent eradication of bird hazards.",
     ["NSC Bose Road", "Armenian Street", "Broadway", "Mint Street", "Govindappa Naicken Street"],
     ["High Court of Madras", "Parrys Corner", "Broadway Bus Stand", "Armenian Church", "Kothawal Chavadi Market"]),

    ("sowcarpet", "Sowcarpet", "Historic North-Central Chennai residential and trading hub",
     "multi-story residential apartments, compact family flats, and traditional haveli-style buildings",
     "Narrow utility balconies and open shafts need child safety nets and stainless ceiling cloth drying hoists to save maximum space.",
     "Balcony safety nets & ceiling cloth hangers in Sowcarpet — free doorstep measurement.",
     ["Mint Street", "Govindappa Naicken Street", "Kasi Chetty Street", "Narayana Mudali Street", "Elephant Gate"],
     ["Mint Street", "Kakada Ramprasad", "Elephant Gate Bridge", "Jain Temple Sowcarpet"]),

    ("tondiarpet", "Tondiarpet", "North Chennai coastal and industrial residential municipality",
     "multi-story residential apartments, family housing societies, and coastal flats",
     "Balconies overlooking industrial and coastal corridors require certified fall arrest netting and anti-bird deterrent spikes.",
     "Balcony safety nets & invisible grills in Tondiarpet — certified installation team.",
     ["TH Road", "Varadharaja Perumal Koil Street", "Seniamman Koil Street", "Gramani Street"],
     ["Tondiarpet Railway Station", "Apollo Hospital Tondiarpet", "TH Road Metro Junction", "Fishing Harbour Vicinity"]),

    ("thiruvottiyur", "Thiruvottiyur", "North Chennai historic coastal temple town and industrial belt",
     "multi-story residential complexes, industrial employee housing, and coastal flats",
     "High coastal winds and industrial emissions demand durable UV-stabilized copolymer netting that resists corrosion and tearing.",
     "Certified safety netting & invisible grills in Thiruvottiyur — robust high-wind protection.",
     ["TH Road", "Sannathi Street", "Wimco Nagar Link", "Tollgate Area", "Ernavoor Border"],
     ["Thyagaraja Swamy Temple", "Thiruvottiyur Metro Station", "Wimco Nagar Terminal", "Tollgate Bus Terminus"]),

    ("wimco-nagar", "Wimco Nagar", "North Chennai metro terminal residential hub",
     "modern residential multi-rises, gated communities, and family builder apartments",
     "New high-rise towers near metro line require certified balcony fall protection netting and sleek invisible wire grills.",
     "Balcony safety nets & invisible grills in Wimco Nagar — quick installation & premium SS316 hardware.",
     ["TH Road", "Metro Station Road", "Ennore High Road Link", "Railway Border"],
     ["Wimco Nagar Metro Depot & Station", "Wimco Match Factory Area", "TH Road Extension", "Tollgate Link"]),

    ("manali", "Manali", "North Chennai industrial and residential township",
     "residential apartment complexes, factory employee housing, and independent homes",
     "Proximity to industrial plants requires heavy-duty netting that resists chemical weathering and keeps balconies safe from pigeons.",
     "Heavy-duty safety nets in Manali — 5-year replacement warranty.",
     ["Manali High Road", "CPCL Colony", "Mathur MMDA Link", "Chinna Mathur Road"],
     ["CPCL Refinery Complex", "Manali Market", "Mathur MMDA Gate", "Madhavaram Link Road"]),

    ("ennoore", "Ennore", "North Chennai port and coastal residential belt",
     "coastal residential apartments, port colony housing, and traditional homes",
     "Direct seaside salt winds necessitate marine-grade SS316 fixtures and durable copolymer safety mesh.",
     "Rust-proof safety nets in Ennore — coastal salt-air certified.",
     ["Ennore Express Highway", "Kathivakkam High Road", "Thermal Power Station Area", "Ernavoor Link"],
     ["Ennore Port (Kamarajar Port)", "Ennore Creek", "Ennore Railway Station", "Thermal Power Plant"]),

    ("kundrathur", "Kundrathur", "West Chennai heritage temple town and rapid growth residential hub",
     "gated residential apartment complexes, villa communities, and family layouts",
     "Balconies require child fall containment netting and space-saving ceiling cloth drying hangers.",
     "Balcony safety nets & cloth drying systems in Kundrathur — free doorstep inspection.",
     ["Kundrathur Main Road", "Murugan Temple Hill Road", "Metha Nagar", "Vazhuthalambedu", "Porur Link Road"],
     ["Kundrathur Murugan Temple", "Kundrathur Bus Stand", "Sekhizhar Higher Secondary School", "Outer Ring Road Junction"]),

    ("thirumazhisai", "Thirumazhisai", "West Chennai satellite city and industrial growth corridor",
     "new high-rise satellite townships, industrial housing societies, and modern gated complexes",
     "High-rise towers in the upcoming satellite city require certified child fall arrest barriers and invisible grills.",
     "High-rise safety nets & invisible grills in Thirumazhisai — certified materials with warranty.",
     ["Bangalore High Road (NH48)", "Thirumazhisai Temple Road", "SIDCO Industrial Estate", "Kuthambakkam Bus Terminal Area"],
     ["Kuthambakkam New Mofussil Bus Terminus", "Othandeeswarar Temple", "SIDCO Thirumazhisai", "Outer Ring Road Junction"]),

    ("chengalpattu", "Chengalpattu", "Greater Chennai southern satellite city and healthcare hub",
     "integrated residential townships, medical campus housing, and modern multi-story apartments",
     "High-rise apartments require certified balcony safety nets with narrow anchor spacing and transparent invisible wire grills.",
     "Certified balcony safety nets & invisible grills in Chengalpattu — free doorstep measurement.",
     ["GST Road", "Vedachalam Nagar", "Alagesan Nagar", "Rathinmankoil Street", "Gundoor"],
     ["Chengalpattu Railway Junction", "Chengalpattu Medical College Hospital", "Kolavai Lake", "GST Road Highway"]),

    ("maraimalai-nagar", "Maraimalai Nagar", "South Chennai automobile corridor and industrial satellite city",
     "modern apartment complexes, industrial workforce gated housing, and residential layouts",
     "Families with toddlers in high-rise towers require certified child safety nets and space-saving ceiling cloth drying racks.",
     "Top-rated balcony safety nets & ceiling cloth hangers in Maraimalai Nagar — 5-year warranty.",
     ["GST Road", "Industrial Estate Road", "Pavendar Salai", "Kattankulathur Link", "Ford Factory Area"],
     ["Maraimalai Nagar Railway Station", "Ford India Campus", "Kattankulathur SRM Border", "Industrial Estate Park"]),

    ("kattankulathur", "Kattankulathur", "South Chennai university and high-rise apartment township",
     "mega multi-story apartment projects, student condominiums, and gated residential townships",
     "High-rise residential towers spanning 10-25 floors require certified child fall prevention netting and invisible grills.",
     "High-rise safety nets & invisible grills in Kattankulathur — fast doorstep inspection.",
     ["GST Road", "SRM University Campus Area", "Potheri Border", "Thirukachur Link"],
     ["SRM Institute of Science and Technology", "Potheri Railway Station", "Kattankulathur Lake", "Estancia Township"]),

    ("singaperumal-koil", "Singaperumal Koil", "South Chennai auto corridor residential neighborhood",
     "gated residential apartment complexes, family flats, and automotive housing societies",
     "Balconies require child safety nets with narrow anchor spacing and anti-bird protection.",
     "Balcony safety nets & invisible grills in Singaperumal Koil — prompt doorstep service.",
     ["GST Road", "Oragadam Road", "Chettipunyam Link", "Mahindra World City Gate Area"],
     ["Padalathri Narasimha Swamy Temple", "Singaperumal Koil Railway Station", "Mahindra World City Entrance", "Oragadam Industrial Corridor Junction"]),

    ("mahindra-world-city", "Mahindra World City", "South Chennai integrated international city and business hub",
     "luxury eco-friendly residential apartments, gated villa townships, and corporate condominiums",
     "Eco-modern apartments require aesthetically seamless SS316 marine-grade invisible wire grills and transparent bird exclusion netting.",
     "Luxury SS316 invisible grills in Mahindra World City — international safety standards with 10-year warranty.",
     ["Central Avenue", "Canopy Area", "Paranur Railway Station Area", "Iris Court", "Aura Enclave"],
     ["Mahindra World City Club", "Paranur Railway Station", "BMW India Plant", "Infosys MWC Campus", "The Canopy Commercial Hub"]),
]

print(f"Total authentic Chennai areas compiled: {len(chennai_areas_raw)}")

output_lines = [
    'export interface AreaReview {',
    '  name: string;',
    '  locality: string;',
    '  rating: number;',
    '  review: string;',
    '  serviceUsed: string;',
    '  date: string;',
    '}',
    '',
    'export interface AreaDetail {',
    '  slug: string;',
    '  name: string;',
    '  tagline: string;',
    '  overview: string;',
    '  apartmentLiving: string;',
    '  balconySafety: string;',
    '  birdProblem: string;',
    '  weatherDetails: string;',
    '  localities: string[];',
    '  landmarks: string[];',
    '  customerReviews: AreaReview[];',
    '  nearbySlugs: string[];',
    '}',
    '',
    'const localTraits: Record<',
    '  string,',
    '  {',
    '    name: string;',
    '    desc: string;',
    '    housingType: string;',
    '    localizedDetail: string;',
    '    tagline: string;',
    '    localities: string[];',
    '    landmarks: string[];',
    '    customerReviews: AreaReview[];',
    '  }',
    '> = {',
]

for slug, name, desc_type, housing, localized, tagline, localities, landmarks in chennai_areas_raw:
    loc_primary = localities[0] if localities else name
    loc_secondary = localities[1] if len(localities) > 1 else name
    
    output_lines.append(f'  "{slug}": {{')
    output_lines.append(f'    name: "{name}",')
    output_lines.append(f'    desc: "{name} is a prime {desc_type} in Chennai, Tamil Nadu, featuring modern residential buildings, vibrant neighborhoods, and high-growth commercial corridors.",')
    output_lines.append(f'    housingType: "{housing}",')
    output_lines.append(f'    localizedDetail: "{localized}",')
    output_lines.append(f'    tagline: "{tagline}",')
    output_lines.append(f'    localities: {json.dumps(localities)},')
    output_lines.append(f'    landmarks: {json.dumps(landmarks)},')
    output_lines.append('    customerReviews: [')
    output_lines.append('      {')
    output_lines.append(f'        name: "Resident ({name})",')
    output_lines.append(f'        locality: "{loc_primary}",')
    output_lines.append('        rating: 5,')
    output_lines.append(f'        review: "CSK Safety Nets & Invisible Grills installed invisible grills on our balcony in {name}, Chennai. Exceptional tensioning, clean anchor finishing, and top-notch SS316 marine cables that resist coastal humidity. 100% satisfied!",')
    output_lines.append('        serviceUsed: "Balcony Invisible Grills",')
    output_lines.append('        date: "2026-06-18",')
    output_lines.append('      },')
    output_lines.append('      {')
    output_lines.append(f'        name: "Apartment Owner ({name})",')
    output_lines.append(f'        locality: "{loc_secondary}",')
    output_lines.append('        rating: 5,')
    output_lines.append(f'        review: "Heavy-duty anti-pigeon netting and child safety nets were fitted across our balcony and utility shafts in {name}, Chennai. Prompt same-day service and courteous technicians.",')
    output_lines.append('        serviceUsed: "Children & Pigeon Safety Nets",')
    output_lines.append('        date: "2026-05-24",')
    output_lines.append('      },')
    output_lines.append('    ],')
    output_lines.append('  },')

output_lines.append('};\n')

output_lines.append('export const areasData: Record<string, AreaDetail> = Object.entries(localTraits).reduce(')
output_lines.append('  (acc, [slug, data]) => {')
output_lines.append('    const allSlugs = Object.keys(localTraits);')
output_lines.append('    const nearby = allSlugs.filter((s) => s !== slug).slice(0, 4);')
output_lines.append('')
output_lines.append('    acc[slug] = {')
output_lines.append('      slug,')
output_lines.append('      name: data.name,')
output_lines.append('      tagline: data.tagline,')
output_lines.append('      overview: `${data.name} is a rapidly developing residential and commercial hub in Chennai, Tamil Nadu. With an increasing number of families moving into multi-story residential buildings, high-rise towers, and modern gated complexes, ensuring perimeter protection on open balconies and windows has become essential for home safety.`,')
output_lines.append('      apartmentLiving: `In ${data.name}, residential living primarily encompasses ${data.housingType}. ${data.localizedDetail}`,')
output_lines.append('      balconySafety: `High-rise living in ${data.name} offers great ventilation and coastal views, but open balconies and wide railing intervals pose severe fall risks for small children and pets. CSK Safety Nets & Invisible Grills delivers heavy-duty balcony safety nets and architectural invisible grills engineered to withstand extreme coastal weather while providing certified fall prevention.`,')
output_lines.append('      birdProblem: `Pigeons and urban birds frequently roost in apartment balconies, AC outdoor unit ledges, and duct shafts across ${data.name}. Our humane, UV-stabilized anti-pigeon netting and stainless bird spikes permanently eliminate bird droppings and hygiene hazards.`,')
output_lines.append('      weatherDetails: `${data.name} experiences tropical coastal climate, hot summers, sea breezes, and heavy Northeast monsoon showers. We exclusively install UV-fortified HDPE copolymer nets and marine-grade SS316 stainless cables that resist salt air corrosion for over 10 years.`,')
output_lines.append('      localities: data.localities,')
output_lines.append('      landmarks: data.landmarks,')
output_lines.append('      customerReviews: data.customerReviews,')
output_lines.append('      nearbySlugs: nearby,')
output_lines.append('    };')
output_lines.append('    return acc;')
output_lines.append('  },')
output_lines.append('  {} as Record<string, AreaDetail>')
output_lines.append(');\n')

output_lines.append('export const areasList = Object.values(areasData);')
output_lines.append('export const chennaiAreasList = Object.keys(areasData);')
output_lines.append('export const bangaloreAreasList = chennaiAreasList; // Backwards compatibility alias')
output_lines.append('export const andhraPradeshAreasList = chennaiAreasList; // Backwards compatibility alias\n')

target_path = r'src/utils/areasData.ts'
with open(target_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(output_lines))

print(f"Successfully generated areasData.ts with {len(chennai_areas_raw)} Chennai areas!")
