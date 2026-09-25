export type PartnerCategory =
  | 'Technology Partners'
  | 'Community Partners'
  | 'University Partners'
  | 'Sponsors'
  | 'Outreach Partners';

export interface PartnerItem {
  id: string;
  name: string;
  category: PartnerCategory;
  shortDescription: string;
  websiteUrl: string;
  logoUrl?: string;
  isPlaceholder?: boolean;
}

export const PARTNER_CATEGORIES: PartnerCategory[] = [
  'Technology Partners',
  'Community Partners',
  'University Partners',
  'Sponsors',
  'Outreach Partners',
];

export const partnersData: PartnerItem[] = [
  {
    id: 'partner-comsats',
    name: 'COMSATS University Islamabad, Lahore Campus',
    category: 'University Partners',
    shortDescription:
      'Host university providing institutional support, seminar auditoriums, computing lab infrastructure, and academic mentorship.',
    websiteUrl: 'https://lahore.comsats.edu.pk/',
    isPlaceholder: false,
  },
  {
    id: 'partner-kiro',
    name: 'Kiro',
    category: 'Technology Partners',
    shortDescription:
      'Flagship collaborator powering AI-assisted developer workflows and specification-driven development for our flagship hackathons.',
    websiteUrl: 'https://kiro.dev',
    isPlaceholder: false,
  },
  {
    id: 'partner-notion',
    name: 'Notion',
    category: 'Technology Partners',
    shortDescription:
      'Global productivity and workspace collaborator supporting builder sprint documentation, project tracking, and student workflows.',
    websiteUrl: 'https://notion.so',
    isPlaceholder: false,
  },
  {
    id: 'partner-nic-lahore',
    name: 'NIC Lahore',
    category: 'University Partners',
    shortDescription:
      'National Incubation Center Lahore — incubator collaborator empowering student tech founders, startups, and innovation initiatives.',
    websiteUrl: 'https://niclahore.lums.edu.pk',
    isPlaceholder: false,
  },
  {
    id: 'partner-cheezious',
    name: 'Cheezious',
    category: 'Sponsors',
    shortDescription:
      'Official food and refreshment collaborator energizing student builders during the Build with Kiro Grand Finale.',
    websiteUrl: 'https://cheezious.com',
    isPlaceholder: false,
  },
  {
    id: 'partner-build-with-kiro-43-partners',
    name: '43 Community Partners of Build with Kiro',
    category: 'Community Partners',
    shortDescription:
      'A nationwide coalition of 43 technology communities, student developer clubs, and tech societies across Pakistan collaborating on Build with Kiro.',
    websiteUrl: 'https://linktr.ee/awssbgcomsatslahore',
    isPlaceholder: false,
  },
  {
    id: 'partner-aws-community-pakistan',
    name: 'AWS Community Pakistan',
    category: 'Community Partners',
    shortDescription:
      'The premier nationwide collective of AWS Heroes, Community Builders, and cloud engineers empowering tech talent across Pakistan.',
    websiteUrl: 'https://www.linkedin.com/company/aws-community-pakistan/',
    isPlaceholder: false,
  },
  {
    id: 'partner-aws-ug-lahore',
    name: 'AWS User Group Lahore',
    category: 'Community Partners',
    shortDescription:
      'Regional community of professional cloud architects, DevOps practitioners, and builders in Lahore collaborating on meetups and tech talks.',
    websiteUrl: 'https://www.meetup.com/aws-user-group-lahore/',
    isPlaceholder: false,
  },
  {
    id: 'partner-aws-wit-lahore',
    name: 'AWS Women in Tech Lahore',
    category: 'Community Partners',
    shortDescription:
      'Dedicated initiative fostering diversity, female leadership, and cloud engineering opportunities for women in computing across Lahore.',
    websiteUrl: 'https://www.linkedin.com/company/aws-community-pakistan/',
    isPlaceholder: false,
  },
  {
    id: 'partner-cloud-native-security-pk',
    name: 'Cloud Native Security Pakistan',
    category: 'Technology Partners',
    shortDescription:
      'Specialized community focusing on zero-trust architectures, DevSecOps, container security, and cloud compliance standards.',
    websiteUrl: 'https://www.linkedin.com',
    isPlaceholder: false,
  },
];
