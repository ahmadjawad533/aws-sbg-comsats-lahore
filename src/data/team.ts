export type TeamDepartment =
  | 'Executive Leadership'
  | 'Technical & Cloud'
  | 'Creative & Media'
  | 'Operations & Logistics'
  | 'Partnerships & Outreach';

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: TeamDepartment;
  bio: string;
  fullBio?: string[];
  responsibilities?: string[];
  skills?: string[];
  eventSlugs?: string[];
  quote?: string;
  email?: string;
  photoUrl: string;
  imageTitle: string;
  linkedinUrl?: string;
  githubUrl?: string;
  linktreeUrl?: string;
  portfolioUrl?: string;
  isLeadRole?: boolean;
  imageScale?: string;
  imagePosition?: string;
}

/**
 * Official Leadership & Team Directory of AWS SBG COMSATS Lahore
 */
export const teamMembers: TeamMember[] = [
  // Executive Leadership
  {
    id: 'ahmad-jawad-bandesha',
    name: 'Ahmad Jawad Bandesha',
    position: 'Chapter Lead',
    department: 'Executive Leadership',
    bio: 'Chapter Lead driving cloud innovation, community initiatives, and hands-on builder programs at COMSATS Lahore.',
    fullBio: [
      'Ahmad Jawad Bandesha is the Chapter Lead of AWS Student Builder Group (AWS SBG) at COMSATS University Islamabad, Lahore Campus. He spearheads strategic chapter vision, university collaborations, and high-impact student builder initiatives.',
      'Under his leadership, the chapter has scaled to over 1,250+ community members, successfully executed flagship hackathons like Build with Kiro 2026 with 43 national community partners, and delivered practical AWS cloud immersion workshops.',
      'He is passionate about cloud architecture, developer productivity, agentic AI ecosystems, and bridging academia with modern tech industry standards.',
    ],
    responsibilities: [
      'Setting chapter vision, strategic milestones, and university administration liaison.',
      'Overseeing technical workshops, hackathon problem statements, and speaker engagements.',
      'Representing AWS SBG COMSATS Lahore across national tech ecosystems, AWS User Groups, and student developer networks.',
      'Mentoring executive and domain leads across technical, creative, logistics, and outreach branches.',
    ],
    skills: [
      'AWS Cloud Architecture',
      'Community Leadership',
      'Event Direction',
      'AI & Agentic Workflows',
      'Spec-Driven Development',
      'Public Speaking',
      'Strategic Partnerships',
    ],
    eventSlugs: [
      'build-with-kiro-2026',
      'spec-driven-dev-kiro',
      'getting-started-with-kiro',
      'cloud-quest-level-2-game-night',
      'intro-to-aws-sbg',
    ],
    quote: 'Empowering every student builder to architect scalable solutions on the AWS cloud.',
    email: 'awscloudclubcomsatslahore@gmail.com',
    photoUrl: '/team/ahmad-jawad-bandesha.jpeg',
    imageTitle: 'Ahmad Jawad Bandesha - Chapter Lead',
    linkedinUrl: 'https://www.linkedin.com/in/ahmadjawad533/',
    githubUrl: 'https://github.com/ahmadjawad533',
    linktreeUrl: 'https://linktr.ee/ahmadjawad.533',
    portfolioUrl: 'https://iahmadjawad533.wixsite.com/my-site',
    isLeadRole: true,
    imageScale: 'scale-100',
    imagePosition: 'object-[50%_15%]',
  },
  {
    id: 'areej-fatima',
    name: 'Areej Fatima',
    position: 'Deputy Lead',
    department: 'Executive Leadership',
    bio: 'Deputy Lead spearheading operational execution, community engagement, and cross-team strategy.',
    fullBio: [
      'Areej Fatima serves as Deputy Lead for AWS SBG COMSATS Lahore, orchestrating operational execution and organizational coherence across all chapter domains.',
      'She works closely with the Chapter Lead to ensure flawless execution of chapter milestones, student onboarding, mentorship cohorts, and cross-society collaborations.',
      'Her focus lies in community empowerment, scalable student programs, and driving inclusive technical education for university builders.',
    ],
    responsibilities: [
      'Supervising inter-departmental collaboration and operational execution.',
      'Managing member onboarding, communication channels, and community feedback loops.',
      'Aligning event schedules, speaker logistics, and chapter governance standards.',
      'Assisting in strategic planning and long-term chapter sustainability.',
    ],
    skills: [
      'Program Management',
      'Team Leadership',
      'Community Engagement',
      'Operational Strategy',
      'Event Coordination',
      'Agile Planning',
    ],
    eventSlugs: ['intro-to-aws-sbg', 'build-with-kiro-2026'],
    quote: 'Building cohesive community structures where student talent can thrive and lead.',
    photoUrl: '/team/areej-fatima.jpeg',
    imageTitle: 'Areej Fatima - Deputy Lead',
    linkedinUrl: 'https://www.linkedin.com/company/aws-cloud-club-cui-lahore',
    githubUrl: 'https://github.com/aws-sbg-comsats-lahore',
    isLeadRole: true,
  },
  {
    id: 'ghanwa-kashif',
    name: 'Ghanwa Kashif',
    position: 'Deputy Co-Lead',
    department: 'Executive Leadership',
    bio: 'Deputy Co-Lead coordinating chapter administration, member onboarding, and leadership workflows.',
    fullBio: [
      'Ghanwa Kashif is the Deputy Co-Lead of AWS SBG COMSATS Lahore, actively driving community moderation, administrative workflows, and member retention.',
      'She co-hosted and facilitated flagship initiatives including Build with Kiro 2026 and the Spec Driven Development series, ensuring high student participation and engagement.',
      'Ghanwa is dedicated to creating accessible entry points for newcomers embarking on cloud learning journeys.',
    ],
    responsibilities: [
      'Coordinating executive documentation, chapter reporting, and student registrations.',
      'Facilitating host duties and student support during technical workshops and build sprints.',
      'Managing community interaction across WhatsApp groups and campus communication desks.',
      'Collaborating with Creative and Outreach leads on event promotion and announcements.',
    ],
    skills: [
      'Community Moderation',
      'Event Hosting',
      'Student Mentorship',
      'Team Coordination',
      'Organizational Administration',
      'Public Communication',
    ],
    eventSlugs: ['build-with-kiro-2026', 'spec-driven-dev-kiro'],
    quote: 'Making cloud computing accessible, interactive, and welcoming for every learner.',
    photoUrl: '/team/ghanwa-kashif.jpeg',
    imageTitle: 'Ghanwa Kashif - Deputy Co-Lead',
    linkedinUrl: 'https://www.linkedin.com/company/aws-cloud-club-cui-lahore',
    githubUrl: 'https://github.com/aws-sbg-comsats-lahore',
    isLeadRole: false,
  },

  // Technical & Cloud
  {
    id: 'rana-asad-ur-rehman',
    name: 'Rana Asad ur Rehman',
    position: 'Technical Lead',
    department: 'Technical & Cloud',
    bio: 'Technical Lead driving AWS cloud workshops, architecture walkthroughs, and developer lab sessions.',
    fullBio: [
      'Rana Asad ur Rehman heads the Technical & Cloud domain at AWS SBG COMSATS Lahore. He leads technical curriculum design, hands-on architectural workshops, and cloud lab setups.',
      'He possesses deep interest in AWS infrastructure, serverless frameworks, DevOps pipelines, and practical implementation of cloud services.',
      'Asad mentors student engineers in transitioning from classroom theory to practical, production-ready cloud system designs.',
    ],
    responsibilities: [
      'Designing technical workshop curricula, code repositories, and hands-on lab exercises.',
      'Conducting technical architecture reviews and mentoring project teams during hackathons.',
      'Guiding students through AWS Free Tier setup, IAM security best practices, and CLI tooling.',
      'Leading technical demos and live coding sessions for university builders.',
    ],
    skills: [
      'AWS Core Services (EC2, S3, Lambda, VPC)',
      'Cloud Architecture',
      'DevOps & CI/CD',
      'Technical Mentorship',
      'Linux & Terminal Tooling',
      'System Design',
    ],
    eventSlugs: ['getting-started-with-kiro', 'build-with-kiro-2026', 'spec-driven-dev-kiro'],
    quote: 'Architecture is not just diagrams on a whiteboard — it is resilient systems running in the cloud.',
    photoUrl: '/team/rana-asad-ur-rehman.jpeg',
    imageTitle: 'Rana Asad ur Rehman - Technical Lead',
    linkedinUrl: 'https://www.linkedin.com/company/aws-cloud-club-cui-lahore',
    githubUrl: 'https://github.com/aws-sbg-comsats-lahore',
    isLeadRole: true,
  },
  {
    id: 'dawood-ahmad',
    name: 'Dawood Ahmad',
    position: 'Technical Co-Lead',
    department: 'Technical & Cloud',
    bio: 'Technical Co-Lead assisting in curriculum delivery, student mentorship, and technical challenges.',
    fullBio: [
      'Dawood Ahmad is the Technical Co-Lead at AWS SBG COMSATS Lahore, working side-by-side with the Technical Lead to provide on-ground debugging assistance and student mentorship.',
      'He plays a key role in structuring hands-on exercises, facilitating terminal workflows, and guiding participants through complex cloud configurations.',
      'Dawood is passionate about software engineering, API development, and modern cloud deployment methodologies.',
    ],
    responsibilities: [
      'Assisting students during live hands-on lab sessions with real-time troubleshooting.',
      'Supporting curriculum development and verifying sample code repositories.',
      'Conducting interactive Q&A and breakout mentoring sessions during workshops.',
      'Contributing to student challenge prompts and cloud quest evaluations.',
    ],
    skills: [
      'Full-Stack Development',
      'AWS Services',
      'API Design',
      'Debugging & Troubleshooting',
      'Git & Version Control',
      'Student Coaching',
    ],
    eventSlugs: ['spec-driven-dev-kiro', 'cloud-quest-level-2-game-night'],
    quote: 'The fastest way to learn the cloud is to break things, fix them, and build again.',
    photoUrl: '/team/dawood-ahmad.jpeg',
    imageTitle: 'Dawood Ahmad - Technical C0-Lead',
    linkedinUrl: 'https://www.linkedin.com/company/aws-cloud-club-cui-lahore',
    githubUrl: 'https://github.com/aws-sbg-comsats-lahore',
    isLeadRole: false,
  },

  // Creative & Media
  {
    id: 'hajra-momin',
    name: 'Hajra Momin',
    position: 'Creative Media Lead',
    department: 'Creative & Media',
    bio: 'Creative Media Lead directing chapter visual storytelling, digital campaign designs, and creative branding.',
    fullBio: [
      'Hajra Momin leads the Creative & Media department at AWS SBG COMSATS Lahore. She is the creative director behind the chapter visual identity, marketing materials, and digital presence.',
      'Her work spans branding design, event stage graphics, social media campaigns, and official merchandise that give AWS SBG COMSATS Lahore its distinct, professional aesthetic.',
      'She co-hosted and facilitated Build with Kiro 2026, Spec Driven Development, and Getting Started with Kiro, amplifying their visibility nationwide.',
    ],
    responsibilities: [
      'Directing brand aesthetics, visual guidelines, and official marketing collateral.',
      'Overseeing digital campaign designs, posters, stage backdrops, and promotional videos.',
      'Collaborating with executive leadership on creative media storytelling and announcements.',
      'Managing media coverage, event photography, and creative student engagement.',
    ],
    skills: [
      'Brand Identity & Art Direction',
      'Graphic & UI/UX Design',
      'Digital Campaign Strategy',
      'Event Media Production',
      'Content Creation',
      'Visual Storytelling',
    ],
    eventSlugs: ['build-with-kiro-2026', 'spec-driven-dev-kiro', 'getting-started-with-kiro'],
    quote: 'Design gives technology its voice, turning complex ideas into compelling community stories.',
    photoUrl: '/team/hajra-momin.jpeg',
    imageTitle: 'Hajra Momin - Creative Media Lead',
    linkedinUrl: 'https://www.linkedin.com/company/aws-cloud-club-cui-lahore',
    isLeadRole: true,
  },
  {
    id: 'zarwa-ayaz',
    name: 'Zarwa Ayaz',
    position: 'Creative Media Co-Lead',
    department: 'Creative & Media',
    bio: 'Creative Media Co-Lead crafting visual social assets, event photography coverage, and creative design.',
    fullBio: [
      'Zarwa Ayaz serves as Creative Media Co-Lead at AWS SBG COMSATS Lahore, focusing on visual content creation, layout aesthetics, and social media media execution.',
      'She works closely with the Creative Lead to ensure high-quality design deliverables across Instagram, LinkedIn, and university display screens.',
      'Zarwa combines artistic creativity with a strong understanding of tech audience engagement.',
    ],
    responsibilities: [
      'Designing social media posts, carousel infographics, and event countdown assets.',
      'Documenting live events through high-resolution photography and video captures.',
      'Maintaining brand consistency across all digital communication touchpoints.',
      'Supporting creative ideation for student giveaways, badges, and certificates.',
    ],
    skills: [
      'Social Media Graphic Design',
      'Visual Layouts & Typography',
      'Event Photography',
      'Asset Optimization',
      'Creative Ideation',
      'Content Publishing',
    ],
    eventSlugs: ['build-with-kiro-2026', 'getting-started-with-kiro'],
    quote: 'Every pixel should reflect the energy, ambition, and passion of our builder community.',
    photoUrl: '/team/zarwa-ayaz.jpeg',
    imageTitle: 'Zarwa Ayaz - Creative Media Co-Lead',
    linkedinUrl: 'https://www.linkedin.com/company/aws-cloud-club-cui-lahore',
    isLeadRole: false,
  },

  // Operations & Logistics
  {
    id: 'abdul-raheem-wattoo',
    name: 'Abdul Raheem Wattoo',
    position: 'Operational Lead',
    department: 'Operations & Logistics',
    bio: 'Operational Lead managing on-ground logistics, venue coordination, and smooth chapter event execution.',
    fullBio: [
      'Abdul Raheem Wattoo heads the Operations & Logistics domain for AWS SBG COMSATS Lahore. He is responsible for flawless execution of on-ground events, seminars, and hackathons.',
      'From reserving auditoriums and computer labs with campus administration to coordinating equipment and stage setups, Raheem ensures events run seamlessly.',
      'His meticulous logistical planning was central to the success of the Build with Kiro Grand Finale and hands-on lab nights.',
    ],
    responsibilities: [
      'Managing university venue reservations, audio/visual setups, and lab infrastructure.',
      'Coordinating on-ground volunteer teams, attendee check-in desks, and crowd control.',
      'Liaising with vendors for catering, stage equipment, and printed materials.',
      'Ensuring event safety, timing adherence, and operational contingency readiness.',
    ],
    skills: [
      'Event Operations & Logistics',
      'Venue & Lab Management',
      'Volunteer Leadership',
      'Vendor Coordination',
      'Crisis & Contingency Planning',
      'Resource Allocation',
    ],
    eventSlugs: ['build-with-kiro-2026', 'intro-to-aws-sbg'],
    quote: 'Flawless execution behind the scenes is what makes unforgettable events possible.',
    photoUrl: '/team/abdul-raheem-wattoo.jpeg',
    imageTitle: 'Abdul Raheem Wattoo - Operational Lead',
    linkedinUrl: 'https://www.linkedin.com/company/aws-cloud-club-cui-lahore',
    isLeadRole: true,
  },
  {
    id: 'tehreem-abdul-sattar',
    name: 'Tehreem Abdul Sattar',
    position: 'Operational Co-Lead',
    department: 'Operations & Logistics',
    bio: 'Operational Co-Lead facilitating student registrations, event check-ins, and logistics management.',
    fullBio: [
      'Tehreem Abdul Sattar is the Operational Co-Lead at AWS SBG COMSATS Lahore, specializing in attendee management, check-in operations, and volunteer workflow synchronization.',
      'She ensures students have a smooth arrival experience, registration verification is efficient, and workshop lab resources are properly assigned.',
      'Tehreem brings high organizational clarity and empathy to university community operations.',
    ],
    responsibilities: [
      'Overseeing student check-in desks, QR ticket validation, and registration rosters.',
      'Coordinating volunteer shift schedules and assigning on-ground tasks.',
      'Managing participant inquiries and resolving attendance logistics.',
      'Assisting in post-event logistics, feedback collection, and certificate dispatch.',
    ],
    skills: [
      'Attendee Experience Management',
      'Registration Operations',
      'Volunteer Coordination',
      'On-Ground Logistics',
      'Communication & Hospitality',
      'Data Recordkeeping',
    ],
    eventSlugs: ['build-with-kiro-2026', 'cloud-quest-level-2-game-night'],
    quote: 'Creating a seamless, welcoming event experience for every student who walks through our doors.',
    photoUrl: '/team/tehreem-abdul-sattar.jpeg',
    imageTitle: 'Tehreem Abdul Sattar - Operational Co-Lead',
    linkedinUrl: 'https://www.linkedin.com/company/aws-cloud-club-cui-lahore',
    isLeadRole: false,
  },

  // Partnerships & Outreach
  {
    id: 'sundas-abid',
    name: 'Sundas Abid',
    position: 'Partnership and Outreach Lead',
    department: 'Partnerships & Outreach',
    bio: 'Partnership and Outreach Lead cultivating relationships with industry networks, communities, and tech sponsors.',
    fullBio: [
      'Sundas Abid leads Partnerships & Outreach at AWS SBG COMSATS Lahore. She is instrumental in building external relationships with industry leaders, corporate sponsors, and national tech communities.',
      'Her strategic outreach was the catalyst behind assembling 43 community partners nationwide for Build with Kiro 2026 and securing key industry collaborations.',
      'Sundas is dedicated to expanding student builders’ career pathways through high-value tech ecosystem partnerships.',
    ],
    responsibilities: [
      'Building relationships with AWS User Groups, tech companies, and ecosystem partners.',
      'Leading sponsorship proposals, outreach communications, and deliverables tracking.',
      'Coordinating multi-community co-hosted events, cross-promotions, and guest speakers.',
      'Expanding chapter reach across universities in Punjab and throughout Pakistan.',
    ],
    skills: [
      'Strategic Partnerships',
      'Community Outreach & Networking',
      'Sponsorship Acquisition',
      'Stakeholder Management',
      'Cross-Organization Negotiation',
      'Public Relations',
    ],
    eventSlugs: ['build-with-kiro-2026', 'intro-to-aws-sbg'],
    quote: 'Collaboration multiplies impact — when communities unite, builders build the future.',
    photoUrl: '/team/sundas-abid.jpeg',
    imageTitle: 'Sundas Abid - Partnership and Outreach Lead',
    linkedinUrl: 'https://www.linkedin.com/company/aws-cloud-club-cui-lahore',
    isLeadRole: true,
  },
  {
    id: 'hafsa-qureshi',
    name: 'Hafsa Qureshi',
    position: 'Partnership & Outreach Co-Lead',
    department: 'Partnerships & Outreach',
    bio: 'Partnership & Outreach Co-Lead cultivating student society collaborations, community outreach, and sponsor engagement.',
    fullBio: [
      'Hafsa Qureshi is the Partnership & Outreach Co-Lead at AWS SBG COMSATS Lahore, focusing on inter-university society alliances, student outreach, and partner engagement.',
      'She works closely with the Outreach Lead to coordinate joint university initiatives, maintain communication channels with community partners, and invite guest mentors.',
      'Hafsa is driven by community empowerment, youth networking, and building lasting institutional bridges.',
    ],
    responsibilities: [
      'Engaging with student tech societies, departmental clubs, and university liaisons.',
      'Assisting in drafting partnership invites, MoU coordination, and follow-ups.',
      'Managing communication pipelines with community partners and student ambassadors.',
      'Facilitating partner branding presence at chapter events and digital channels.',
    ],
    skills: [
      'Inter-Society Liaison',
      'Outreach Communication',
      'Student Ambassador Programs',
      'Partner Coordination',
      'Community Networking',
      'Event Promotion',
    ],
    eventSlugs: ['build-with-kiro-2026', 'intro-to-aws-sbg'],
    quote: 'Connecting passionate minds to build opportunities that outlast any single event.',
    photoUrl: '/team/hafsa-qureshi.jpeg',
    imageTitle: 'Hafsa Qureshi - Partnership & Outreach Co-Lead',
    linkedinUrl: 'https://www.linkedin.com/company/aws-cloud-club-cui-lahore',
    isLeadRole: false,
  },
];
