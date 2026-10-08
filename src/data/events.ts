export type EventCategory =
  | 'Workshop'
  | 'Hackathon'
  | 'Meetup'
  | 'Community Session'
  | 'AWS Session'
  | 'Career Session';

export interface EventSpeaker {
  name: string;
  role: string;
  affiliation: string;
  bio: string;
  avatarUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  description: string;
}

export interface EventResource {
  title: string;
  type: 'slides' | 'github' | 'recording' | 'documentation';
  url: string;
}

export interface EventGalleryImage {
  id: string;
  url: string;
  caption: string;
  alt: string;
}

export interface CommunityEvent {
  id: string;
  slug: string;
  title: string;
  category: EventCategory;
  date: string;
  time: string;
  venue: string;
  shortDescription: string;
  fullDescription: string[];
  bannerImage: string;
  isUpcoming: boolean;
  isFeatured: boolean;
  registrationOpen: boolean;
  registrationUrl?: string;
  speakers: EventSpeaker[];
  agenda: AgendaItem[];
  gallery: EventGalleryImage[];
  resources: EventResource[];
  collaborators?: string[];
  communityPartnersCount?: number;
}

export const EVENT_CATEGORIES: EventCategory[] = [
  'Workshop',
  'Hackathon',
  'Meetup',
  'Community Session',
  'AWS Session',
  'Career Session',
];

// Standard Chapter Team Speakers
const ahmadJawadSpeaker: EventSpeaker = {
  name: 'Ahmad Jawad Bandesha',
  role: 'Chapter Lead',
  affiliation: 'AWS SBG COMSATS Lahore',
  bio: 'Chapter Lead driving cloud innovation, community initiatives, and hands-on builder programs at COMSATS Lahore.',
  avatarUrl: '/team/ahmad-jawad-bandesha.jpeg',
  linkedinUrl: 'https://www.linkedin.com/in/ahmadjawad533',
  instagramUrl: 'https://www.instagram.com/ahmadjawad.533',
};

const ghanwaKashifSpeaker: EventSpeaker = {
  name: 'Ghanwa Kashif',
  role: 'Deputy Co-Lead',
  affiliation: 'AWS SBG COMSATS Lahore',
  bio: 'Deputy Co-Lead coordinating chapter operations, event management, and builder community workflows.',
  avatarUrl: '/team/ghanwa-kashif.jpeg',
  linkedinUrl: 'https://www.linkedin.com/in/ghanwa-k-135991287?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  instagramUrl: 'https://www.instagram.com/ghan3a?stkn=MXNtam4waG44dGl1cA==',
};

const hajraMominSpeaker: EventSpeaker = {
  name: 'Hajra Momin',
  role: 'Creative Media Lead',
  affiliation: 'AWS SBG COMSATS Lahore',
  bio: 'Creative Media Lead directing visual storytelling, digital campaign designs, and creative branding.',
  avatarUrl: '/team/hajra-momin.jpeg',
  linkedinUrl: 'https://www.linkedin.com/in/hajra-momin-1779a8246?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  instagramUrl: 'https://www.instagram.com/photogram.hm?stkn=ZWNmZGQxdzQyMmc=',
};

/**
 * Chapter Events
 * All sessions listed here are completed chapter events.
 */
export const eventsData: CommunityEvent[] = [
  {
    id: 'build-with-kiro-2026',
    slug: 'build-with-kiro-2026',
    title: 'Build with Kiro 2026',
    category: 'Hackathon',
    date: 'Aug 10 – Sep 19, 2026',
    time: '10:00 AM - 01:30 PM PKT (Grand Finale)',
    venue: 'Lahore Garrison University (Grand Finale) & Online Hackathon',
    shortDescription:
      'Month-long flagship innovation sprint and hackathon with 43 community partners. Featured 4 structured phases culminating in a grand finale at Lahore Garrison University.',
    fullDescription: [
      'Build with Kiro 2026 was the flagship student hackathon and innovation sprint organized by AWS Student Builder Group COMSATS Lahore, uniting 43 community partners nationwide.',
      'Phase 1 — Building Phase (August 10 – September 10): Teams brainstormed architectures, crafted system specifications, and built cloud-integrated applications powered by Kiro IDE and AWS.',
      'Phase 2 — Submission Phase (September 11 – September 12): Student builder teams submitted code repositories, architecture diagrams, and product walkthrough demos.',
      'Phase 3 — Judgement Phase (September 13 – September 18): Rigorous review and scoring across technical depth, innovation, AWS cloud integration, and spec execution.',
      'Phase 4 — Grand Finale (September 19, 10:00 AM – 1:30 PM): Hosted in-person at Lahore Garrison University, featuring keynote presentations, 1-hour builder networking, and award celebrations with food & refreshments.',
      'Collaborators: Notion, NIC Lahore, Cheezious, and Kiro.',
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    isUpcoming: false,
    isFeatured: true,
    registrationOpen: false,
    collaborators: ['Kiro', 'Notion', 'NIC Lahore', 'Cheezious'],
    communityPartnersCount: 43,
    speakers: [ahmadJawadSpeaker, ghanwaKashifSpeaker, hajraMominSpeaker],
    agenda: [
      {
        time: 'Aug 10 – Sep 10',
        title: 'Building Phase',
        description: 'Teams brainstorm, formulate specs, and build cloud-native applications with Kiro IDE.',
      },
      {
        time: 'Sep 11 – Sep 12',
        title: 'Submission Phase',
        description: 'Submission of project code repositories, live deployment links, and video walkthroughs.',
      },
      {
        time: 'Sep 13 – Sep 18',
        title: 'Judgement Phase',
        description: 'Evaluation by technical leads and industry mentors across architecture, innovation, and code quality.',
      },
      {
        time: '10:00 AM - 11:30 AM (Sep 19)',
        title: 'Grand Finale: Keynotes & Finalist Presentations',
        description: 'Held at Lahore Garrison University. Finalist project showcases, technical critiques, and chapter reflections.',
      },
      {
        time: '11:30 AM - 12:30 PM (Sep 19)',
        title: 'Builder Networking Session',
        description: '1 full hour of dedicated student-to-mentor networking, talent connections, and partner interactions.',
      },
      {
        time: '12:30 PM - 01:30 PM (Sep 19)',
        title: 'Food, Refreshment & Award Ceremony',
        description: 'Delicious refreshments courtesy of our food collaborators, trophy distribution, and closing remarks.',
      },
    ],
    gallery: [
      {
        id: 'kiro-gal-1',
        url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
        caption: 'Students collaborating during Build with Kiro 2026',
        alt: 'Students coding on laptops in computer lab',
      },
      {
        id: 'kiro-gal-2',
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
        caption: 'Team architecture discussion during build sprint',
        alt: 'Participants discussing architecture diagrams',
      },
    ],
    resources: [
      {
        title: 'Build with Kiro Hackathon Guide & Rubrics',
        type: 'slides',
        url: 'https://linktr.ee/awssbgcomsatslahore',
      },
      {
        title: 'Sample Project Repository',
        type: 'github',
        url: 'https://github.com/aws-sbg-comsats-lahore',
      },
    ],
  },
  {
    id: 'spec-driven-dev-kiro',
    slug: 'spec-driven-development-with-kiro',
    title: 'Spec Driven Development with Kiro',
    category: 'Workshop',
    date: '2026-08-23',
    time: '02:30 PM - 04:30 PM PKT',
    venue: 'Virtual (Online)',
    shortDescription:
      'Hands-on technical workshop covering how to write precise technical specifications and steer agentic workflows in Kiro to deliver maintainable software.',
    fullDescription: [
      'Writing code without well-defined specifications leads to rework and architectural debt. In this virtual workshop, students learned the principles of Specification-Driven Development (SDD).',
      'The session walked through translating ambiguous problem descriptions into clear markdown requirements, functional schemas, and automated testable milestones.',
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    isUpcoming: false,
    isFeatured: true,
    registrationOpen: false,
    speakers: [ahmadJawadSpeaker, ghanwaKashifSpeaker, hajraMominSpeaker],
    agenda: [
      {
        time: '02:30 PM - 03:00 PM',
        title: 'Core Concepts of Spec Driven Development',
        description: 'Why specs matter: bridging mental models, AI agents, and code generation.',
      },
      {
        time: '03:00 PM - 04:00 PM',
        title: 'Live Walkthrough: Specifying a Cloud API in Kiro',
        description: 'Drafting endpoints, data models, error handlers, and generating implementation.',
      },
      {
        time: '04:00 PM - 04:30 PM',
        title: 'Hands-on Practice & Q&A',
        description: 'Students implement their own mini specifications with live support.',
      },
    ],
    gallery: [],
    resources: [
      {
        title: 'Specification Templates & Cheatsheet (PDF)',
        type: 'slides',
        url: 'https://linktr.ee/awssbgcomsatslahore',
      },
    ],
  },
  {
    id: 'getting-started-with-kiro',
    slug: 'getting-started-with-kiro',
    title: 'Getting Started with Kiro',
    category: 'Workshop',
    date: '2026-08-16',
    time: '03:00 PM - 04:30 PM PKT',
    venue: 'Virtual (Online)',
    shortDescription:
      'Interactive virtual orientation on installing, configuring, and accelerating daily developer workflows using the Kiro IDE and terminal tooling.',
    fullDescription: [
      'A practical virtual onboarding session introducing students to Kiro IDE. We covered installation, Linux/Mac/Windows terminal configurations, custom keybindings, and integrating version control.',
      'Students experienced live demonstrations of how Kiro reduces boilerplate and assists in navigating unfamiliar codebases.',
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    isUpcoming: false,
    isFeatured: true,
    registrationOpen: false,
    speakers: [ahmadJawadSpeaker, hajraMominSpeaker],
    agenda: [
      {
        time: '03:00 PM - 03:30 PM',
        title: 'Kiro Overview & Environment Installation',
        description: 'Setting up the IDE across different student operating systems.',
      },
      {
        time: '03:30 PM - 04:15 PM',
        title: 'Productivity Features & Workflow Demos',
        description: 'Multi-file edits, intelligent command generation, and terminal navigation.',
      },
      {
        time: '04:15 PM - 04:30 PM',
        title: 'Troubleshooting & Community Resources',
        description: 'Resolving common installation questions and linking to documentation.',
      },
    ],
    gallery: [],
    resources: [
      {
        title: 'Kiro Getting Started Notes',
        type: 'documentation',
        url: 'https://linktr.ee/awssbgcomsatslahore',
      },
    ],
  },
  {
    id: 'cloud-quest-level-2-game-night',
    slug: 'cloud-quest-level-2-game-night',
    title: 'Cloud Quest Level 2 Game Night',
    category: 'Community Session',
    date: '2026-06-06',
    time: '02:00 PM - 04:00 PM PKT',
    venue: 'CEGA, NASTP',
    shortDescription:
      'Gamified cloud challenges and competitive architectural quest held at CEGA, NASTP where students solved real infrastructure scenarios on AWS.',
    fullDescription: [
      'Cloud Quest Level 2 Game Night engaged student builders in solving hands-on architectural scenarios at CEGA, NASTP in an exciting gamified format.',
      'Tasks included debugging broken S3 bucket policies, resolving VPC subnet routing conflicts, and configuring load balancers.',
      'Students competed on speed, architectural adherence, and security practices.',
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    isUpcoming: false,
    isFeatured: false,
    registrationOpen: false,
    speakers: [ahmadJawadSpeaker],
    agenda: [
      {
        time: '02:00 PM - 02:20 PM',
        title: 'Game Night Rules & Challenge Briefing',
        description: 'Scoring criteria, sandbox access verification, and safety constraints.',
      },
      {
        time: '02:20 PM - 03:40 PM',
        title: 'Level 2 Game Night Challenge Sprint',
        description: 'Hands-on console troubleshooting and network architecture fixes.',
      },
      {
        time: '03:40 PM - 04:00 PM',
        title: 'Leaderboard Review & Key Takeaways',
        description: 'Deconstructing optimal architectures and celebrating top finishers.',
      },
    ],
    gallery: [],
    resources: [
      {
        title: 'AWS Cloud Quest Learning Plan',
        type: 'documentation',
        url: 'https://explore.skillbuilder.aws/',
      },
    ],
  },
  {
    id: 'intro-to-aws-sbg',
    slug: 'intro-to-aws-sbg',
    title: 'Intro to AWS SBG',
    category: 'Meetup',
    date: '2026-05-02',
    time: '03:00 PM - 04:45 PM PKT',
    venue: 'Virtual (Online)',
    shortDescription:
      'Official virtual community launch and orientation session introducing the mission, upcoming workshop roadmap, and leadership team of AWS SBG COMSATS Lahore.',
    fullDescription: [
      'The inaugural virtual orientation session uniting students interested in cloud computing across COMSATS Lahore Campus.',
      'Chapter lead presented the semester roadmap, introduced the core domains (Technical, Creative, Operations, Partnerships), and shared guidance on how to get started with AWS Free Tier and student credits.',
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    isUpcoming: false,
    isFeatured: false,
    registrationOpen: false,
    speakers: [ahmadJawadSpeaker],
    agenda: [
      {
        time: '03:00 PM - 03:30 PM',
        title: 'Welcome & Welcome from Campus Lead',
        description: 'Why AWS SBG exists and the importance of cloud skills in Pakistan.',
      },
      {
        time: '03:30 PM - 04:15 PM',
        title: 'Chapter Roadmap & Domain Introductions',
        description: 'Upcoming workshops, build challenges, and student study groups.',
      },
      {
        time: '04:15 PM - 04:45 PM',
        title: 'Community Q&A & WhatsApp Group Onboarding',
        description: 'Open discussion with attendees and welcoming new members.',
      },
    ],
    gallery: [],
    resources: [
      {
        title: 'Introductory Slide Deck (PDF)',
        type: 'slides',
        url: 'https://linktr.ee/awssbgcomsatslahore',
      },
    ],
  },
];
