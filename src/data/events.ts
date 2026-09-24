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
  githubUrl?: string;
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
}

export const EVENT_CATEGORIES: EventCategory[] = [
  'Workshop',
  'Hackathon',
  'Meetup',
  'Community Session',
  'AWS Session',
  'Career Session',
];

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
    date: '2026-09-18',
    time: '10:00 AM - 05:00 PM PKT',
    venue: 'Main Auditorium & Computer Labs, COMSATS Lahore',
    shortDescription:
      'Flagship build sprint and hackathon challenging students to design, prototype, and ship cloud-connected applications utilizing Kiro AI IDE and specification-driven development.',
    fullDescription: [
      'Build with Kiro 2026 was the flagship student innovation sprint hosted by AWS Student Builder Group at COMSATS Lahore. Student teams tackled real-world campus and cloud problem statements using modern agentic development environments.',
      'Participants leveraged Kiro IDE to draft specifications, architect data models, generate full-stack prototypes, and deploy resilient cloud services.',
      'The day concluded with live demos, technical critique from chapter leads and mentors, and recognition of the highest-performing project teams.',
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    isUpcoming: false,
    isFeatured: true,
    registrationOpen: false,
    speakers: [
      {
        name: 'Ahmad Jawad Bandesha',
        role: 'Chapter Lead',
        affiliation: 'AWS SBG COMSATS Lahore',
        bio: 'Spearheaded event architecture, hackathon prompt formulation, and technical evaluation.',
        avatarUrl: '/team/ahmad-jawad-bandesha.jpeg',
        linkedinUrl: 'https://www.linkedin.com/company/aws-cloud-club-cui-lahore',
      },
      {
        name: 'Rana Asad ur Rehman',
        role: 'Technical Lead',
        affiliation: 'AWS SBG COMSATS Lahore',
        bio: 'Provided architecture reviews, debugging assistance, and cloud deployment mentorship.',
        avatarUrl: '/team/rana-asad-ur-rehman.jpeg',
        linkedinUrl: 'https://www.linkedin.com/company/aws-cloud-club-cui-lahore',
      },
    ],
    agenda: [
      {
        time: '10:00 AM - 10:45 AM',
        title: 'Opening Ceremony & Track Briefing',
        description: 'Introduction to Build with Kiro sprint guidelines, evaluation rubrics, and workspace setups.',
      },
      {
        time: '10:45 AM - 01:30 PM',
        title: 'Sprint 1: Specification Formulation & Rapid Prototyping',
        description: 'Structuring project requirements, generating architecture schemas, and initial building.',
      },
      {
        time: '01:30 PM - 02:30 PM',
        title: 'Networking Lunch & Mentor Checkpoints',
        description: 'Midway architecture check-in with technical leads and senior mentors.',
      },
      {
        time: '02:30 PM - 04:15 PM',
        title: 'Sprint 2: Integration, Polish & Deployment',
        description: 'Finalizing live URLs, documentation, and preparing 3-minute project pitches.',
      },
      {
        time: '04:15 PM - 05:00 PM',
        title: 'Project Pitches & Award Showcase',
        description: 'Live student presentations, project scoring, and certificates ceremony.',
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
        title: 'Build with Kiro Hackathon Guide & Prompts',
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
    date: '2026-08-30',
    time: '02:30 PM - 04:30 PM PKT',
    venue: 'Computer Lab 3, Department of Computer Science',
    shortDescription:
      'Hands-on technical workshop covering how to write precise technical specifications and steer agentic workflows in Kiro to deliver maintainable software.',
    fullDescription: [
      'Writing code without well-defined specifications leads to rework and architectural debt. In this workshop, students learned the principles of Specification-Driven Development (SDD).',
      'The session walked through translating ambiguous problem descriptions into clear markdown requirements, functional schemas, and automated testable milestones.',
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    isUpcoming: false,
    isFeatured: true,
    registrationOpen: false,
    speakers: [
      {
        name: 'Dawood Ahmad',
        role: 'Technical Co-Lead',
        affiliation: 'AWS SBG COMSATS Lahore',
        bio: 'Coordinated workshop live coding, terminal walkthroughs, and student setup troubleshooting.',
        avatarUrl: '/team/dawood-ahmad.jpeg',
        linkedinUrl: 'https://www.linkedin.com/company/aws-cloud-club-cui-lahore',
      },
    ],
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
    date: '2026-08-15',
    time: '03:00 PM - 04:30 PM PKT',
    venue: 'Seminar Hall B, COMSATS Lahore',
    shortDescription:
      'Interactive orientation on installing, configuring, and accelerating daily developer workflows using the Kiro IDE and terminal tooling.',
    fullDescription: [
      'A practical onboarding session introducing students to Kiro IDE. We covered installation, Linux/Mac/Windows terminal configurations, custom keybindings, and integrating version control.',
      'Students experienced live demonstrations of how Kiro reduces boilerplate and assists in navigating unfamiliar codebases.',
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    isUpcoming: false,
    isFeatured: true,
    registrationOpen: false,
    speakers: [
      {
        name: 'Rana Asad ur Rehman',
        role: 'Technical Lead',
        affiliation: 'AWS SBG COMSATS Lahore',
        bio: 'Demonstrated environment setups, extension configurations, and terminal productivity hacks.',
        avatarUrl: '/team/rana-asad-ur-rehman.jpeg',
        linkedinUrl: 'https://www.linkedin.com/company/aws-cloud-club-cui-lahore',
      },
    ],
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
    id: 'cloud-quest-level-3',
    slug: 'cloud-quest-level-3',
    title: 'Cloud Quest Level 3',
    category: 'Community Session',
    date: '2026-06-10',
    time: '02:00 PM - 04:00 PM PKT',
    venue: 'Computer Lab 4, COMSATS Lahore',
    shortDescription:
      'Gamified cloud challenges and competitive architectural quest where students solved real infrastructure scenarios on AWS.',
    fullDescription: [
      'Cloud Quest Level 3 engaged student builders in solving hands-on architectural scenarios. Tasks included debugging broken S3 bucket policies, resolving VPC subnet routing conflicts, and configuring load balancers.',
      'Students competed on speed, architectural adherence, and security practices.',
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    isUpcoming: false,
    isFeatured: false,
    registrationOpen: false,
    speakers: [
      {
        name: 'Technical Team Panel',
        role: 'Quest Facilitators',
        affiliation: 'AWS SBG COMSATS Lahore',
        bio: 'Organized quest scenarios and guided students through console verification checkpoints.',
        avatarUrl: '/team/dawood-ahmad.jpeg',
      },
    ],
    agenda: [
      {
        time: '02:00 PM - 02:20 PM',
        title: 'Quest Rules & Challenge Briefing',
        description: 'Scoring criteria, sandbox access verification, and safety constraints.',
      },
      {
        time: '02:20 PM - 03:40 PM',
        title: 'Level 3 Challenge Sprint',
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
    date: '2026-04-20',
    time: '03:00 PM - 04:45 PM PKT',
    venue: 'Main Auditorium, COMSATS Lahore',
    shortDescription:
      'Official community launch and orientation session introducing the mission, upcoming workshop roadmap, and leadership team of AWS SBG COMSATS Lahore.',
    fullDescription: [
      'The inaugural orientation event uniting students interested in cloud computing across COMSATS Lahore Campus.',
      'Chapter leads presented the semester roadmap, introduced the core domains (Technical, Creative, Operations, Partnerships), and shared guidance on how to get started with AWS Free Tier and student credits.',
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    isUpcoming: false,
    isFeatured: false,
    registrationOpen: false,
    speakers: [
      {
        name: 'Ahmad Jawad Bandesha',
        role: 'Chapter Lead',
        affiliation: 'AWS SBG COMSATS Lahore',
        bio: 'Introduced chapter charter, university partnership, and vision for cloud builders.',
        avatarUrl: '/team/ahmad-jawad-bandesha.jpeg',
        linkedinUrl: 'https://www.linkedin.com/company/aws-cloud-club-cui-lahore',
      },
      {
        name: 'Areej Fatima',
        role: 'Deputy Lead',
        affiliation: 'AWS SBG COMSATS Lahore',
        bio: 'Outlined member onboarding channels, volunteer opportunities, and event calendar.',
        avatarUrl: '/team/areej-fatima.jpeg',
        linkedinUrl: 'https://www.linkedin.com/company/aws-cloud-club-cui-lahore',
      },
    ],
    agenda: [
      {
        time: '03:00 PM - 03:30 PM',
        title: 'Welcome & Welcome from Campus Leads',
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
