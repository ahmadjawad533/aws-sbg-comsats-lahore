export interface NavItem {
  name: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  heroHeadline: string;
  heroSupportingText: string;
  university: string;
  campus: string;
  location: string;
  fullAddress: string;
  contactEmail: string;
  joinCommunityUrl: string;
  disclaimer: string;
  stats: {
    members: string;
    events: string;
    workshops: string;
    projects: string;
    reviews: string;
    rating: string;
  };
  socials: {
    linkedin: string;
    instagram: string;
    github: string;
    whatsapp: string;
    meetup: string;
    linktree: string;
    email: string;
  };
  navLinks: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: 'AWS Student Builder Group COMSATS Lahore',
  shortName: 'AWS SBG COMSATS Lahore',
  tagline: 'Build. Learn. Innovate. With AWS.',
  heroHeadline: 'Build. Learn. Innovate. With AWS.',
  heroSupportingText:
    'AWS Student Builder Group COMSATS Lahore is a student-led technology community helping students learn cloud technologies, build real projects, collaborate with peers, and connect with industry.',
  university: 'COMSATS University Islamabad',
  campus: 'Lahore Campus',
  location: 'COMSATS University Islamabad, Lahore Campus, Lahore, Pakistan',
  fullAddress:
    'Department of Computer Science, COMSATS University Islamabad, Lahore Campus, Defence Road, Off Raiwind Road, Lahore, Pakistan',
  contactEmail: 'awscloudclubcomsatslahore@gmail.com',
  joinCommunityUrl: 'https://chat.whatsapp.com/FbGAj9LzhM5Ilyn6WxAjb0',
  disclaimer:
    'AWS Student Builder Group COMSATS Lahore is a student community and is not an AWS corporate organization.',
  stats: {
    members: '1343+',
    events: '7+',
    reviews: '91+',
    rating: '4.75+',
    workshops: '3',
    projects: '47+',
  },
  socials: {
    linkedin: 'https://www.linkedin.com/company/aws-cloud-club-cui-lahore',
    instagram: 'https://www.instagram.com/awssbgcomsatslahore',
    github: 'https://github.com/aws-sbg-comsats-lahore',
    whatsapp: 'https://chat.whatsapp.com/FbGAj9LzhM5Ilyn6WxAjb0',
    meetup: 'https://www.meetup.com/aws-cloud-club-at-comsats-univ-islamabad/',
    linktree: 'https://linktr.ee/awssbgcomsatslahore',
    email: 'mailto:awscloudclubcomsatslahore@gmail.com',
  },
  navLinks: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Team', href: '/team' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Resources', href: '/resources' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
  ],
};
