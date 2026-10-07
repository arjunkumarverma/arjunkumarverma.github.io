export interface ProfileInfo {
  name: string;
  honorific: string;
  degrees: string;
  roleTitle: string;
  secondaryTitle: string;
  department: string;
  summary: string;
  positioningStatement: string;
  bioParagraphs: string[];
  contact: {
    email: string;
    linkedIn: string;
    location: string;
  };
  languages: string[];
  photoUrl: string;
  subTitles: string[];
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  context: string;
  sourceDoc: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  parentBody?: string;
  period: string;
  duration?: string;
  location: string;
  category: 'executive' | 'grassroots' | 'academic';
  summary: string;
  responsibilities: string[];
  achievements: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  organizationOrMinistry: string;
  period?: string;
  scale: string;
  role: string;
  context: string;
  impactHighlights: string[];
  details: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  specialization?: string;
  honors?: string;
  guideOrNotes?: string;
}

export interface TrainingItem {
  id: string;
  program: string;
  institution: string;
  durationOrDetails?: string;
  domain: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  type: string;
  context: string;
  domain: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuingAuthority: string;
  ministryOrBody: string;
  year?: string;
  credentialId?: string;
  description: string;
  topics: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export const profileData: ProfileInfo = {
  name: "Dr. Arjun Kumar Verma",
  honorific: "Dr.",
  degrees: "Ph.D., M.Sc., B.Ed.",
  roleTitle: "Retired State Director, Nehru Yuva Kendra Sangathan",
  subTitles: [
    "IICA Certified Independent Director (Ministry of Corporate Affairs, GOI)",
    "Member IUCN-CEC",
    "Director of Planning (Shobhit University)"
  ],
  secondaryTitle: "Former Director of Planning, Shobhit University · Environmental Botanist",
  department: "Ministry of Youth Affairs & Sports, Government of India",
  positioningStatement: "33+ years of experience in MY Bharat (formerly NYKS) working on youth empowerment, grassroots leadership, and nationwide community mobilization, followed by 4 years of academic leadership with Shobhit University as Director of Planning.",
  summary: "A distinguished civil service executive and botanical scholar with over three decades of leadership under the Government of India. Guided nationwide adolescent development with UNFPA, monitored 500+ district establishments, mobilized over 1.17 crore citizens against substance abuse, and spearheaded landmark rural youth initiatives from Sikkim to Himachal Pradesh.",
  bioParagraphs: [
    "Dr. Arjun Kumar Verma holds a Ph.D. in Botany with a specialized thesis on the 'Flora and Vegetation of South Sikkim Himalaya' conducted under the guidance of Dr. M. P. Nayar, former Director of the Botanical Survey of India. Throughout his 33-year tenure with Nehru Yuva Kendra Sangathan (NYKS)—an autonomous organization under the Ministry of Youth Affairs and Sports, Government of India—he combined scientific discipline with grassroots civil mobilization.",
    "Rising from a field District Youth Coordinator across Sikkim, Odisha, and Bihar to State Director in Haryana and Himachal Pradesh and Deputy Director at National Headquarters in New Delhi, Dr. Verma has steered flagship national programs. His portfolio encompasses supervising 6,000+ village youth clubs, managing nationwide All-India recruitments, authoring annual action plans for over 500 districts, and directing large-scale development programs funded by UNFPA and the Ministry of Social Justice & Empowerment.",
    "Following his government service, Dr. Verma served as Director of Planning at Shobhit University, formulating institutional governance policies and pioneering sustainable Smart Tribal Farming digitalization frameworks. He is a life-long advocate for participatory democracy, adolescent health, and environmental stewardship across India."
  ],
  contact: {
    email: "arjunkumarvermas2123@gmail.com",
    linkedIn: "https://www.linkedin.com/in/dr-arjun-kumar-verma-298533245/",
    location: "New Delhi NCR, India"
  },
  languages: ["English", "Hindi", "Bengali", "Odia (Oriya)", "Nepali"],
  photoUrl: "/images/arjunverma.jpg"
};

export const keyMetrics: MetricItem[] = [
  {
    id: "citizens-reached",
    value: "1.17 Cr+",
    label: "Citizens Reached",
    context: "Prevented drug abuse & alcoholism across 3,750 villages in 17 border districts of Punjab & Manipur with Ministry of Social Justice & Empowerment.",
    sourceDoc: "Official CV Page 7 (j)"
  },
  {
    id: "tenure-experience",
    value: "33+ Years",
    label: "Government of India Service",
    context: "Autonomous public leadership in Nehru Yuva Kendra Sangathan, Ministry of Youth Affairs & Sports.",
    sourceDoc: "Official CV Page 8 (m)"
  },
  {
    id: "youth-mobilized",
    value: "30,000",
    label: "Youth at Lal Quila (Red Fort)",
    context: "Led the national rally cell commemorating the 150th anniversary of the 1857 Indian Freedom Struggle in New Delhi.",
    sourceDoc: "Official CV Page 8 (m)"
  },
  {
    id: "grassroots-clubs",
    value: "6,000+",
    label: "Village Youth Clubs & Mahila Mandals",
    context: "Supervised across Haryana & Himachal Pradesh as State Director, orchestrating nationwide youth campaigns.",
    sourceDoc: "Official CV Page 4 (18) & Page 8 (l)"
  },
  {
    id: "bpl-families",
    value: "14,000",
    label: "BPL Families Empowered",
    context: "Implemented Swarna Jayanti Gram Swarojgar Yojana (SGSY) through 1,400 Self-Help Groups under Ministry of Rural Development.",
    sourceDoc: "Official CV Page 8 (m)"
  },
  {
    id: "districts-sop",
    value: "500",
    label: "District Kendras Monitored",
    context: "Formulated nationwide standard operating procedures (SOPs), inspection schedules, and Annual Action Plans.",
    sourceDoc: "Official CV Page 5 (a)"
  }
];

export const careerTimeline: ExperienceItem[] = [
  {
    id: "shobhit-planning-director",
    role: "Director of Planning",
    organization: "Shobhit University",
    parentBody: "Shobhit Institute of Engineering & Technology, Meerut & Shobhit University, Gangoh",
    period: "3 Years",
    location: "Meerut & Saharanpur, Uttar Pradesh",
    category: "academic",
    summary: "Led institutional strategic planning, academic governance policies, student welfare committees, and agricultural technology initiatives.",
    responsibilities: [
      "Formulated and implemented comprehensive institutional leave policies and governance frameworks across both university campuses.",
      "Spearheaded the digitalization of Smart Tribal Farming initiatives, integrating sustainable agricultural technologies for tribal farming communities.",
      "Administered student welfare operations, institutional disciplinary committees, and publicity and communications strategy."
    ],
    achievements: [
      "Digitalized agricultural support workflows for sustainable tribal community farming.",
      "Harmonized multi-campus administrative protocols and inter-departmental committees."
    ]
  },
  {
    id: "state-director-nyks",
    role: "State Director",
    organization: "Nehru Yuva Kendra Sangathan (NYKS)",
    parentBody: "Ministry of Youth Affairs & Sports, Govt. of India",
    period: "1.5 Years",
    location: "Haryana & Himachal Pradesh",
    category: "executive",
    summary: "Apex administrative authority across two major northern states, commanding 34 District Youth Officers, 6 Deputy Directors, and 6,000+ village clubs.",
    responsibilities: [
      "Executive governance over 34 District Youth Officers (DYOs), 6 Deputy Directors, 34 Accounts & Programme Supervisors, and ~450 National Youth Volunteers (NYVs).",
      "Directed statewide implementation of high-priority national campaigns: National Youth Parliament, National Youth Festival, COVID-19 Relief & Prevention Awareness, and Parivar Pehchan Patra.",
      "Convened State Advisory Committees on Youth Programmes and managed statewide tree plantation, water conservation (Jal Shakti), and World Yoga Day drives."
    ],
    achievements: [
      "Mobilized 6,000+ village-based Youth Clubs and Mahila Mandals across Haryana and Himachal Pradesh.",
      "Achieved seamless inter-agency disaster awareness and pandemic crisis response across 34 administrative districts."
    ]
  },
  {
    id: "deputy-director-personnel",
    role: "Deputy Director (Personnel)",
    organization: "Nehru Yuva Kendra Sangathan Hqrs.",
    parentBody: "Ministry of Youth Affairs & Sports, Govt. of India",
    period: "2 Years",
    location: "New Delhi",
    category: "executive",
    summary: "Headed nationwide human resources, All-India cadre recruitment, pension administration, and public sector workforce governance.",
    responsibilities: [
      "Supervised nationwide recruitment drives across All-India categories, inducting hundreds of gazetted and non-gazetted personnel.",
      "Managed pension cell operations, deputation agreements, service and vendor leasing contracts, and legal establishment matters.",
      "Drafted standard operating procedures (SOPs) for workforce welfare, outsourcing frameworks, and annual performance appraisal systems."
    ],
    achievements: [
      "Successfully conducted merit-based All-India recruitment exercises for hundreds of personnel across countrywide establishments.",
      "Streamlined nationwide pension processing and employee service record systems."
    ]
  },
  {
    id: "asst-director-hqrs",
    role: "Assistant Director (Administration, Research, M&E & Special Projects)",
    organization: "Nehru Yuva Kendra Sangathan Hqrs.",
    parentBody: "Ministry of Youth Affairs & Sports, Govt. of India",
    period: "1998 – 2018 (20+ Years)",
    location: "New Delhi",
    category: "executive",
    summary: "Pioneered the national Monitoring & Evaluation Cell, authored Annual Action Plans for 500 kendras, and managed large-scale inter-ministerial projects.",
    responsibilities: [
      "Founded and operationalized the Inspection, Monitoring & Evaluation Cell of NYKS across 500 District Kendras, 47 Regional Offices, and 18 Zonal Offices.",
      "Prepared the nationwide NYKS Annual Action Plan and monitoring schedules.",
      "Project Director for the UNFPA-supported Adolescent Development Project across 64 districts (128 blocks), training 64 District Project Officers, 128 Peer Volunteers, and 6 Zonal Officers.",
      "Designed and executed 100% computer and IT automation training for 500 District Youth Coordinators, 47 Deputy Directors, and 500 Accounts Clerks.",
      "Initiated youth mobilization for the Namami Gange project across 29 districts along the river Ganga.",
      "Nodal Officer for National Youth Festivals in Kolkata, Chennai, Ahmedabad, Jamshedpur, Thiruvananthapuram, New Delhi, and Pune."
    ],
    achievements: [
      "Published daily multilingual news bulletins (5,000 daily copies in 3 languages) during National Youth Festival Chennai.",
      "Commanded the 1857 Programme Implementation Cell for the historic 30,000-youth Freedom Struggle commemoration at Lal Quila.",
      "Delivered timely programmatic and financial utilization reporting to UNFPA and Ministries with zero variance."
    ]
  },
  {
    id: "dyc-field",
    role: "District Youth Coordinator (DYC)",
    organization: "Nehru Yuva Kendra",
    parentBody: "Ministry of Youth Affairs & Sports, Govt. of India",
    period: "1988 – 1998 (10 Years)",
    location: "Sikkim, Odisha (Orissa), and Bihar",
    category: "grassroots",
    summary: "Ten years on the frontlines of grassroots Indian development, organizing youth clubs, adult literacy centers, and village community infrastructure.",
    responsibilities: [
      "Established thousands of village-level Youth Clubs, Mahila Mandals, and Self-Help Groups.",
      "Set up hundreds of Adult Education Centres, Jan Shiksha, and Non-Formal Education Centres under the National Literacy Mission (NLM).",
      "Organized work camps with youth volunteers constructing tangible community assets: rural roads, bridges, youth buildings, homes for the impoverished, and playgrounds.",
      "Spearheaded environmental conservation programs in collaboration with WWF-India and Wildlife Institute of India (Dehradun)."
    ],
    achievements: [
      "Led the 110-member delegation to the 2nd National Youth Festival at Calcutta, winning 3 Gold, 2 Silver, and 3 Bronze medals.",
      "Conducted extensive floristic surveys and research on Sacred Groves and Himalayan plant ecology in Sikkim."
    ]
  }
];

export const majorProjects: ProjectItem[] = [
  {
    id: "drug-abuse-prevention",
    title: "Awareness & Education for Prevention of Drug Abuse & Alcoholism",
    organizationOrMinistry: "Ministry of Social Justice & Empowerment, Govt. of India",
    period: "2011 – 2013",
    scale: "3,750 Villages · 17 Border Districts · 1.17 Crore Citizens",
    role: "National Project Lead & Coordinator",
    context: "A massive multi-state public health and social awareness intervention across high-vulnerability border districts in the states of Punjab and Manipur.",
    impactHighlights: [
      "Directly reached 1,17,02,740 individuals (65,26,956 males and 51,75,784 females) across 3,750 villages.",
      "Organized 6,05,664 village-level awareness activities including street plays, focus groups, rallies, yoga, and school competitions.",
      "Screened and contacted 3,75,000 young people, identifying 62,654 individuals battling drug or alcohol addiction.",
      "Provided 680 individuals with intensive free residential treatment and counseling services in 17 district 15-day camps.",
      "Covered over 1,000+ times across major national and regional publications (The Tribune, Dainik Jagran, Punjab Kesari, Sanghai Express, etc.)."
    ],
    details: "Mobilized teachers, religious leaders, parents, and youth volunteers into a unified civil defense against the epidemic of substance abuse, compiling detailed policy recommendations on addiction infrastructure submitted to the Central Government."
  },
  {
    id: "adolescent-development-unfpa",
    title: "Adolescent Development Project (UNFPA & NPYAD)",
    organizationOrMinistry: "UNFPA & Ministry of Youth Affairs and Sports",
    period: "2007 – 2012",
    scale: "64 Districts · 128 Blocks · Nationwide",
    role: "National Project Director & Protocol Author",
    context: "Comprehensive health and life-skills initiative for adolescents under the National Programme for Youth and Adolescent Development (NPYAD).",
    impactHighlights: [
      "Formulated standard operating protocols and guidelines for Adolescent Health & Development across 128 administrative blocks.",
      "Institutionalized Life Skill Education (LSE) and Adolescent Reproductive and Sexual Health (ARSH) modules.",
      "Led a cadre of 64 District Project Officers, 128 Adolescent Peer Volunteers, 6 Zonal Project Officers, and 3 National Program Officers.",
      "Established teen clubs, creative art workshops, physical fitness camps, and psychological support networks."
    ],
    details: "Authored periodic monitoring frameworks and impact studies submitted directly to UNFPA and the Ministry of Youth Affairs & Sports, ensuring 100% compliance and timely fund utilization."
  },
  {
    id: "freedom-struggle-rally",
    title: "150th Anniversary Freedom Struggle National Youth Rally",
    organizationOrMinistry: "Ministry of Youth Affairs & Sports, Govt. of India",
    period: "National Commemoration",
    scale: "30,000 Youth · Red Fort (Lal Quila), New Delhi",
    role: "Head of 1857 Programme Implementation Cell",
    context: "Commemorating 150 years of India's First War of Independence (1857) with representation from every state and union territory.",
    impactHighlights: [
      "Marshaled and coordinated 30,000 youth delegates assembling at the iconic Red Fort in New Delhi.",
      "Managed logistics, cultural contingents, transportation, accommodation, and commemorative literature across India.",
      "Created nationwide civic enthusiasm celebrating India's freedom struggle history and national integration."
    ],
    details: "Specially appointed by NYKS Headquarters to helm the high-security, high-visibility 1857 Implementation Cell with flawless operational execution."
  },
  {
    id: "swarna-jayanti-sgsy",
    title: "Swarna Jayanti Gram Swarojgar Yojana (SGSY)",
    organizationOrMinistry: "Ministry of Rural Development, Govt. of India",
    period: "3-Year Strategic Implementation",
    scale: "14 Districts · 1,400 SHGs · 14,000 BPL Families",
    role: "Supervisory Lead for Self-Employment Ventures",
    context: "Socio-economic self-employment program providing sustainable livelihoods to rural families living below the poverty line.",
    impactHighlights: [
      "Supervised 1,400 Self-Help Groups (SHGs) across 14 selected districts.",
      "Delivered direct economic benefits and livelihood stabilization to 14,000 Below Poverty Line (BPL) families.",
      "Orchestrated vocational training, technology transfer, subsidy distribution, market linkage, and grassroots innovation."
    ],
    details: "Integrated micro-credit mobilization with vocational skill acquisition to permanently lift rural families out of subsistence poverty."
  },
  {
    id: "namami-gange",
    title: "Namami Gange Youth Mobilization Initiative",
    organizationOrMinistry: "National Mission for Clean Ganga & NYKS",
    period: "Flagship Initiative",
    scale: "29 Districts along River Ganga (Bihar, WB, UP, Uttarakhand)",
    role: "Initiator & Nodal Officer",
    context: "Harnessing youth energy for the ecological rejuvenation, pollution abatement, and cultural preservation of the River Ganga.",
    impactHighlights: [
      "Initiated project frameworks in 29 Ganga-basin districts across Bihar, West Bengal, Uttar Pradesh, and Uttarakhand.",
      "Trained youth volunteers as Ganga Doots (Clean Ganga Ambassadors) for riverfront sanitation, tree planting, and zero-waste advocacy.",
      "Built multi-stakeholder linkages between local municipal bodies, schools, and village youth clubs."
    ],
    details: "Leveraged Dr. Verma's botanical and environmental background to anchor youth action around riverine ecosystem biodiversity and pollution monitoring."
  },
  {
    id: "smart-tribal-farming",
    title: "Smart Tribal Farming Digitalization",
    organizationOrMinistry: "Shobhit University (Meerut & Gangoh)",
    period: "Institutional Strategic Initiative",
    scale: "Regional Tribal Agriculture Clusters",
    role: "Director of Planning",
    context: "Bridging modern agricultural technologies with traditional tribal agronomy for sustainable income generation.",
    impactHighlights: [
      "Contributed to digital frameworks supporting sustainable, low-input tribal agriculture.",
      "Integrated academic research in biotechnology with practical field tools for marginalized agricultural communities.",
      "Promoted natural crop rotation and botanical pest management grounded in doctoral ecological expertise."
    ],
    details: "Pioneered university-community partnerships to empower tribal farmers with mobile agro-advisories and market pricing visibility."
  }
];

export const educationList: EducationItem[] = [
  {
    id: "phd-botany",
    degree: "Doctor of Philosophy (Ph.D.) in Botany",
    institution: "B. R. Ambedkar Bihar University, Muzaffarpur",
    year: "2005",
    specialization: "Himalayan Floristics & Environmental Ecology",
    guideOrNotes: "Guided by Dr. M. P. Nayar, former Director, Botanical Survey of India (Ministry of Environment & Forests, Govt. of India), Kolkata. Thesis Title: 'Flora and Vegetation of South Sikkim Himalaya'."
  },
  {
    id: "msc-botany",
    degree: "Master of Science (M.Sc.) in Botany",
    institution: "Sambalpur University",
    year: "1982",
    specialization: "Plant Biochemistry",
    honors: "First Class with Specialization"
  },
  {
    id: "bed-degree",
    degree: "Bachelor of Education (B.Ed.)",
    institution: "Sambalpur University",
    year: "1983",
    specialization: "Educational Measurement & Evaluation",
    honors: "Specialized Pedagogy & Assessment"
  },
  {
    id: "bsc-botany",
    degree: "Bachelor of Science (B.Sc. Hons.) in Botany",
    institution: "Sambalpur University",
    year: "1980",
    specialization: "Botany & Biological Sciences",
    honors: "First Class Honours with Distinction"
  }
];

export const advancedTrainings: TrainingItem[] = [
  {
    id: "conservation-biology",
    program: "20-Day Advanced Training on Conservation Biology",
    institution: "Indian Institute of Science (IISc), Bangalore",
    domain: "Ecological Sciences",
    durationOrDetails: "Under Prof. Madhav Gadgil, Director, Centre for Ecological Sciences. Presented research paper on 'Sacred Groves of Sikkim Himalaya'."
  },
  {
    id: "training-techniques",
    program: "15-Day Advanced Course in Training Techniques",
    institution: "Institute of Secretarial Training & Management (ISTM), Ministry of Personnel, New Delhi",
    domain: "Public Administration",
    durationOrDetails: "Executive pedagogy, curriculum development, and administrative systems for civil services."
  },
  {
    id: "parliamentary-course",
    program: "Parliamentary Appreciation Course",
    institution: "Lok Sabha Secretariat, Parliament of India",
    domain: "Legislative Affairs & Governance",
    durationOrDetails: "In-depth immersion into parliamentary procedures, legislative oversight, and democratic governance."
  },
  {
    id: "tot-commonwealth",
    program: "Training of Trainers (ToT) Course",
    institution: "Commonwealth Youth Programme, Asia Centre, Chandigarh",
    domain: "Youth Pedagogy",
    durationOrDetails: "Youth leadership facilitation, adult education, and community group dynamics across Commonwealth nations."
  },
  {
    id: "disaster-management",
    program: "Disaster Management & Preparedness Training",
    institution: "National Institute of Disaster Management (NIDM), Ministry of Home Affairs",
    domain: "Crisis Leadership",
    durationOrDetails: "Organized and participated in national protocols for community-level disaster rescue and risk mitigation."
  },
  {
    id: "science-popularization",
    program: "Science Popularization Training Programme",
    institution: "Ministry of Science and Technology, Govt. of India",
    domain: "Public Science & Ecology",
    durationOrDetails: "Public engagement, scientific literacy drives, and environmental education methodologies."
  },
  {
    id: "accounts-finance",
    program: "Financial Administration & Accounts Training",
    institution: "Salt Lake Stadium, Calcutta under NYKS",
    domain: "Fiscal Governance",
    durationOrDetails: "Public sector grant budgeting, fiscal reporting, audit compliance, and donor account management."
  },
  {
    id: "entrepreneurship-commonwealth",
    program: "International Workshop on Self-Employment & Entrepreneurship",
    institution: "Commonwealth Youth Programme, Asia Centre, Chandigarh",
    domain: "Micro-Enterprise & Livelihood",
    durationOrDetails: "Enterprise incubation, youth micro-credit models, and sustainable cooperative development."
  },
  {
    id: "iica-investor-protection",
    program: "Regional Orientation on Investor Awareness, Education and Protection (IAEP)",
    institution: "Indian Institute of Corporate Affairs (IICA), Manesar",
    domain: "Corporate Affairs & Investor Protection",
    durationOrDetails: "Under Ministry of Corporate Affairs, Govt. of India in collaboration with IEPFA and NYKS for rural financial empowerment and capital formation."
  },
  {
    id: "it-automation",
    program: "Course in MS Office, Internet & IT Systems",
    institution: "Commonwealth Asia Centre, NIIT New Delhi & Ministry of MSME, Govt. of India",
    domain: "Digital Transformation",
    durationOrDetails: "Pioneered computerization for 500+ district officers nationwide based on this curriculum."
  }
];

export const certificationsList: CertificationItem[] = [
  {
    id: "iica-iaep-certification",
    title: "Executive Certificate in Investor Awareness, Education & Protection (IAEP)",
    issuingAuthority: "Indian Institute of Corporate Affairs (IICA), Manesar",
    ministryOrBody: "Ministry of Corporate Affairs, Government of India & IEPFA",
    year: "November 2019",
    description: "Conferred by the Indian Institute of Corporate Affairs (IICA) under the Ministry of Corporate Affairs, Government of India, in joint partnership with the Investor Education and Protection Fund Authority (IEPFA) and Nehru Yuva Kendra Sangathan (NYKS). Advanced executive training and certification focused on rural investor protection, capital formation, financial fraud prevention, and nationwide youth-led financial literacy campaigns.",
    topics: [
      "Investor Rights & Grievance Redressal Mechanisms",
      "Rural Investor Protection & Fraud Prevention",
      "Corporate Regulatory Governance & IEPFA Mandates",
      "Grassroots Financial Literacy Mobilization via NYKS"
    ]
  }
];

export const publicationsList: PublicationItem[] = [
  {
    id: "pub-diversity",
    title: "Diversity of Plant Species of Sikkim Himalaya",
    type: "Research Paper",
    context: "Botanical Survey of India & UGC Research Communications",
    domain: "Himalayan Floristic Taxonomy"
  },
  {
    id: "pub-pollutants",
    title: "Effect of Some Pollutant Gases on Some Crop Plants",
    type: "Environmental Research Study",
    context: "5-Year UGC Environmental Pollution Research Project",
    domain: "Ecotoxicology & Crop Physiology"
  },
  {
    id: "pub-rhododendron",
    title: "Rhododendron of Sikkim Himalaya",
    type: "Botanical Monograph",
    context: "Taxonomic survey of high-altitude Himalayan flora",
    domain: "Plant Biodiversity & Conservation"
  },
  {
    id: "pub-climbing",
    title: "Climbing Taxa of Sikkim Himalaya",
    type: "Floristic Documentation",
    context: "Systematic investigation of tropical to alpine climbers in Sikkim",
    domain: "Flora & Plant Taxonomy"
  },
  {
    id: "pub-sacred-groves",
    title: "Sacred Groves of Sikkim Himalaya",
    type: "Symposium Research Paper",
    context: "Presented at Indian Institute of Science (IISc), Bangalore under Prof. Madhav Gadgil",
    domain: "Indigenous Ethnobotany & Conservation"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Public Policy & Executive Governance",
    description: "Senior administrative leadership guiding national statutory frameworks and large-scale public initiatives.",
    skills: [
      "Nationwide Annual Action Planning",
      "Standard Operating Procedures (SOPs)",
      "Inter-Ministerial Coordination",
      "Inspection & Audit Frameworks",
      "Public Sector Budget Forecasting",
      "Statutory Rule Compliance"
    ]
  },
  {
    category: "Youth Empowerment & Social Development",
    description: "Three decades of community mobilization, volunteer management, and human capital incubation.",
    skills: [
      "Village Youth Club Institutionalization",
      "Adolescent Health & ARSH Protocol",
      "Substance Abuse Prevention Drives",
      "Life Skill Education (LSE)",
      "Community Disaster Response",
      "National Youth Parliament & Festivals"
    ]
  },
  {
    category: "Botanical & Ecological Research",
    description: "Doctoral research in Himalayan biodiversity, plant taxonomy, and environmental impact assessments.",
    skills: [
      "Himalayan Floristic Taxonomy",
      "Conservation Biology & Sacred Groves",
      "Air Pollution Impact on Crops",
      "Biodiversity Mapping (Sikkim)",
      "Plant Biochemistry",
      "Riverine Ecosystem Restoration (Namami Gange)"
    ]
  },
  {
    category: "Institutional Management & HR",
    description: "Managing large All-India cadres, university administrations, and multi-tier organizational establishments.",
    skills: [
      "All-India Cadre Recruitment",
      "Performance Appraisal Systems",
      "Pension Cell Administration",
      "University Leave & Governance Policy",
      "Donor Grant Reporting (UNFPA)",
      "Workforce IT Automation Training"
    ]
  }
];

export const professionalPhilosophy = {
  quote: "Sustainable national development is born at the grassroots: when young minds are organized into purposeful communities and guided by scientific integrity and public ethics, transformative change is inevitable.",
  principles: [
    {
      title: "Participatory Grassroots Democracy",
      text: "True governance cannot remain confined to headquarters. Through 6,000+ village youth clubs and Mahila Mandals, community members must be equal architects in building rural roads, adult education, and disaster resilience."
    },
    {
      title: "Science-Grounded Public Action",
      text: "Whether addressing high-altitude Himalayan deforestation or combating the social epidemic of addiction across 3,750 villages, public interventions must rest on empirical research, meticulous data gathering, and verifiable impact."
    },
    {
      title: "Institutional Rigor & Standard Protocols",
      text: "Good intentions require institutional machinery. Developing comprehensive SOPs, monitoring schedules, and timely utilization certificates safeguards public funds and ensures lasting organizational credibility."
    },
    {
      title: "Nurturing the Whole Adolescent",
      text: "Youth development transcends physical fitness—it requires equipping teenagers with emotional resilience, life-skills education, reproductive health awareness, and constructive civic outlets."
    }
  ]
};
