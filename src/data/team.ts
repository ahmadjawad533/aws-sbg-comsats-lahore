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
  photoUrl: string;
  imageTitle: string;
  linkedinUrl?: string;
  githubUrl?: string;
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
    photoUrl: '/team/ahmad-jawad-bandesha.jpeg',
    imageTitle: 'Ahmad Jawad Bandesha - Chapter Lead',
    linkedinUrl: 'https://www.linkedin.com/company/aws-cloud-club-cui-lahore',
    githubUrl: 'https://github.com/aws-sbg-comsats-lahore',
    isLeadRole: true,
    imageScale: 'scale-[1.5] translate-y-3',
    imagePosition: 'object-[50%_22%] origin-[50%_25%]',
  },
  {
    id: 'areej-fatima',
    name: 'Areej Fatima',
    position: 'Deputy Lead',
    department: 'Executive Leadership',
    bio: 'Deputy Lead spearheading operational execution, community engagement, and cross-team strategy.',
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
    photoUrl: '/team/hafsa-qureshi.jpeg',
    imageTitle: 'Hafsa Qureshi - Partnership & Outreach Co-Lead',
    linkedinUrl: 'https://www.linkedin.com/company/aws-cloud-club-cui-lahore',
    isLeadRole: false,
  },
];
