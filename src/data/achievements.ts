export type AchievementCategory =
  | 'Community Milestone'
  | 'AWS Recognition'
  | 'Certifications'
  | 'Hackathons'
  | 'Community Awards'
  | 'Leadership'
  | 'Event Milestones'
  | 'Collaborations';

export interface AchievementItem {
  id: string;
  title: string;
  category: AchievementCategory;
  date: string;
  context: string;
  description: string;
  tags: string[];
  externalUrl?: string;
  isPlaceholder?: boolean;
}

export const ACHIEVEMENT_CATEGORIES: AchievementCategory[] = [
  'Community Milestone',
  'AWS Recognition',
  'Certifications',
  'Hackathons',
  'Community Awards',
  'Leadership',
  'Event Milestones',
  'Collaborations',
];

/**
 * Achievements Data
 * Uses clean timeline entries with clear placeholder markers where formal records are pending.
 * Update with verified records as milestones are accomplished.
 */
export const achievementsData: AchievementItem[] = [
  {
    id: 'achieve-charter-establishment',
    title: 'Official Establishment of AWS SBG at COMSATS Lahore',
    category: 'Community Milestone',
    date: '2026-03',
    context: 'COMSATS University Islamabad, Lahore Campus',
    description:
      'Formal setup of the AWS Student Builder Group chapter at COMSATS Lahore Campus to foster student cloud development, hands-on architectures, and collaborative workshops.',
    tags: ['Chapter Launch', 'Student Community', 'Cloud Leadership'],
    isPlaceholder: false,
  },
  {
    id: 'achieve-membership-milestone',
    title: 'Initial Student Builder Community Formation',
    category: 'Community Milestone',
    date: '2026-04',
    context: 'Department of Computer Science',
    description:
      'Onboarding core student builders and cloud enthusiasts across software engineering, computer science, and data disciplines.',
    tags: ['Community Growth', 'Onboarding', 'Students'],
    isPlaceholder: false,
  },
  {
    id: 'achieve-cloud-practitioner-cohort',
    title: 'Cloud Certification Study Cohort [Placeholder]',
    category: 'Certifications',
    date: '2026-05',
    context: 'AWS Skill Builder Track',
    description:
      '[Placeholder]: Study group milestone documenting verified AWS Certified Cloud Practitioner / Solutions Architect Associate completions by chapter members.',
    tags: ['Certifications', 'AWS Certified', 'Study Group'],
    isPlaceholder: true,
  },
  {
    id: 'achieve-hackathon-build',
    title: 'Student Hackathon Prototype Showcase [Placeholder]',
    category: 'Hackathons',
    date: '2026-06',
    context: 'Inter-University Tech Arena',
    description:
      '[Placeholder]: Section reserved for verified student hackathon rankings, innovation awards, and prototype submissions built on AWS.',
    tags: ['Hackathon', 'Cloud Native', 'Innovation'],
    isPlaceholder: true,
  },
  {
    id: 'achieve-university-collaboration',
    title: 'Academic & Society Collaboration Initiative [Placeholder]',
    category: 'Collaborations',
    date: '2026-07',
    context: 'COMSATS Student Societies & External Chapters',
    description:
      '[Placeholder]: Joint technological seminars and collaborative cloud workshop initiatives held in partnership with university tech bodies.',
    tags: ['Collaboration', 'Partnership', 'Tech Outreach'],
    isPlaceholder: true,
  },
  {
    id: 'achieve-aws-community-recognition',
    title: 'AWS Student Community Spotlight [Placeholder]',
    category: 'AWS Recognition',
    date: '2026-08',
    context: 'AWS Community Network',
    description:
      '[Placeholder]: Record for official feature, speaker highlights, or community recognition within the broader AWS student builder ecosystem.',
    tags: ['AWS Recognition', 'Spotlight', 'Global Ecosystem'],
    isPlaceholder: true,
  },
];
