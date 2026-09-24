export type ResourceCategory = 'AWS Learning' | 'Developer Resources' | 'Community Resources';

export interface ResourceItem {
  id: string;
  title: string;
  category: ResourceCategory;
  description: string;
  url: string;
  badge?: string;
  isExternal: boolean;
}

export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  'AWS Learning',
  'Developer Resources',
  'Community Resources',
];

export const resourcesData: ResourceItem[] = [
  // AWS Learning
  {
    id: 'res-aws-skill-builder',
    title: 'AWS Skill Builder',
    category: 'AWS Learning',
    description:
      'Official digital learning center featuring 600+ free digital courses, learning plans, and interactive learning challenges directly from AWS experts.',
    url: 'https://explore.skillbuilder.aws/',
    badge: 'Official Learning',
    isExternal: true,
  },
  {
    id: 'res-aws-builder-center',
    title: 'AWS Builder Center',
    category: 'AWS Learning',
    description:
      'Hub for developers to explore code tutorials, architecture best practices, real-world case studies, and builder tools.',
    url: 'https://aws.amazon.com/developer/community/',
    badge: 'Developer Portal',
    isExternal: true,
  },
  {
    id: 'res-aws-documentation',
    title: 'AWS Official Documentation',
    category: 'AWS Learning',
    description:
      'Comprehensive API references, architecture guides, SDK walkthroughs, and tutorials for every AWS service.',
    url: 'https://docs.aws.amazon.com/',
    badge: 'Documentation',
    isExternal: true,
  },
  {
    id: 'res-aws-workshops',
    title: 'AWS Self-Paced Workshops',
    category: 'AWS Learning',
    description:
      'Catalog of hands-on technical workshops built by AWS Solutions Architects covering containers, serverless, AI/ML, and security.',
    url: 'https://workshops.aws/',
    badge: 'Hands-on Labs',
    isExternal: true,
  },
  {
    id: 'res-aws-free-tier',
    title: 'AWS Free Tier Overview',
    category: 'AWS Learning',
    description:
      'Official breakdown of 12-month free, always-free, and short-term trial services to build projects without incurring surprise costs.',
    url: 'https://aws.amazon.com/free/',
    badge: 'Cost Management',
    isExternal: true,
  },
  {
    id: 'res-aws-educate',
    title: 'AWS Educate',
    category: 'AWS Learning',
    description:
      'Self-paced cloud courses and hands-on labs designed for students with no credit card required to start learning.',
    url: 'https://aws.amazon.com/education/awseducate/',
    badge: 'Student Program',
    isExternal: true,
  },

  // Developer Resources
  {
    id: 'res-github-student-pack',
    title: 'GitHub Student Developer Pack',
    category: 'Developer Resources',
    description:
      'Free developer tools, cloud credits, domains, and premium developer software available to verified university students.',
    url: 'https://education.github.com/pack',
    badge: 'Free Software',
    isExternal: true,
  },
  {
    id: 'res-docker-docs',
    title: 'Docker & Container Basics',
    category: 'Developer Resources',
    description:
      'Foundational guides for containerizing microservices, building Docker images, and deploying with Amazon ECS and EKS.',
    url: 'https://docs.docker.com/get-started/',
    badge: 'DevOps',
    isExternal: true,
  },
  {
    id: 'res-linux-fundamentals',
    title: 'Linux CLI & Server Fundamentals',
    category: 'Developer Resources',
    description:
      'Essential terminal navigation, file permissions, bash scripting, and system admin skills required for cloud server configuration.',
    url: 'https://linuxjourney.com/',
    badge: 'Operating Systems',
    isExternal: true,
  },
  {
    id: 'res-cloud-networking',
    title: 'Computer Networking for Cloud',
    category: 'Developer Resources',
    description:
      'Practical guides covering CIDR blocks, subnets, DNS, TCP/IP, NAT gateways, and secure internet routing in virtual private clouds.',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work',
    badge: 'Networking',
    isExternal: true,
  },
  {
    id: 'res-python-cloud',
    title: 'Python for Cloud & Boto3 SDK',
    category: 'Developer Resources',
    description:
      'Official documentation and recipes for automating AWS services and writing serverless Lambda functions using Python and the Boto3 SDK.',
    url: 'https://boto3.amazonaws.com/v1/documentation/api/latest/index.html',
    badge: 'Programming',
    isExternal: true,
  },

  // Community Resources
  {
    id: 'res-comm-slides',
    title: 'Presentation Slides & Decks',
    category: 'Community Resources',
    description:
      'Centralized archive of presentation slide decks, visual diagrams, and session notes from all chapter workshops and guest sessions.',
    url: '/events',
    badge: 'Chapter Material',
    isExternal: false,
  },
  {
    id: 'res-comm-workshop-repos',
    title: 'Workshop Starter Repositories',
    category: 'Community Resources',
    description:
      'Step-by-step code samples, Infrastructure as Code (Terraform / AWS CDK) templates, and starter projects maintained on GitHub.',
    url: 'https://github.com/placeholder-aws-sbg-comsats',
    badge: 'Open Source',
    isExternal: true,
  },
  {
    id: 'res-comm-event-recordings',
    title: 'Event Recordings & Tech Talks',
    category: 'Community Resources',
    description:
      'Curated playlist of recorded technical sessions, live coding walkthroughs, and career panels hosted by the chapter.',
    url: '/events',
    badge: 'Video Archive',
    isExternal: false,
  },
  {
    id: 'res-comm-cheatsheets',
    title: 'AWS Architecture & CLI Cheatsheets',
    category: 'Community Resources',
    description:
      'Quick reference cards for AWS CLI commands, IAM policy syntax, S3 bucket policy structures, and EC2 instance types.',
    url: 'https://aws.amazon.com/cli/',
    badge: 'Quick Reference',
    isExternal: true,
  },
];
