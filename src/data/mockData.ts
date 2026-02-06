export interface Document {
  documentNumber: string;
  documentName: string;
  documentLead: string;
  documentPreparer: string;
  date: string;
  dueDate: string;
  status: 'Approved' | 'Pending Review' | 'In Progress' | 'Draft';
}

export interface Comment {
  id: string;
  author: string;
  initials: string;
  date: string;
  content: string;
}

export interface Activity {
  id: string;
  description: string;
  timeAgo: string;
  type: 'upload' | 'approval' | 'review';
}

export interface StatsData {
  totalEvidence: number;
  underReviewEvidence: number;
  inProgressEvidence: number;
  completedEvidence: number;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
}

export const navigationItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard', active: true },
  { id: 'perspectives', label: 'Perspectives', icon: 'Eye' },
  { id: 'tasks', label: 'Tasks', icon: 'CheckSquare' },
  { id: 'documents', label: 'Documents', icon: 'FileText' },
  { id: 'reports', label: 'Reports', icon: 'BarChart3' },
  { id: 'users', label: 'Users & Roles', icon: 'Users' },
];

export const statsData: StatsData = {
  totalEvidence: 4,
  underReviewEvidence: 3,
  inProgressEvidence: 2,
  completedEvidence: 1,
};

export const documents: Document[] = [
  {
    documentNumber: '5.4.1.1',
    documentName: 'Digital_Transformation_Plan.Pdf',
    documentLead: 'Ahmed Khaled',
    documentPreparer: 'Ahmed Khaled',
    date: '2025-08-01',
    dueDate: '2025-08-01',
    status: 'Approved',
  },
  {
    documentNumber: '5.4.1.2',
    documentName: 'KPI_Framework.Xlsx',
    documentLead: 'Mona Hamed',
    documentPreparer: 'Mona Hamed',
    date: '2025-08-01',
    dueDate: '2025-08-01',
    status: 'Pending Review',
  },
  {
    documentNumber: '5.4.1.3',
    documentName: 'Roadmap_Version1.Docx',
    documentLead: 'Rami AlSharif',
    documentPreparer: 'Rami AlSharif',
    date: '2025-08-01',
    dueDate: '2025-08-01',
    status: 'Pending Review',
  },
];

export const comments: Comment[] = [
  {
    id: '1',
    author: 'Sara Ibrahim',
    initials: 'E',
    date: '2025-08-05',
    content: 'Ensure The Plan Includes A Clear Governance Model.',
  },
  {
    id: '2',
    author: 'Mona Hamed',
    initials: 'M',
    date: '2025-08-05',
    content: 'Ensure The Plan Includes A Clear Governance Model.',
  },
];

export const recentActivities: Activity[] = [
  {
    id: '1',
    description: 'Roadmap_Version1.Docx Uploaded By Rami AlSharif',
    timeAgo: '5 Mins Ago',
    type: 'upload',
  },
  {
    id: '2',
    description: 'KPI_Framework.Xlsx Uploaded By Mona Hamed',
    timeAgo: '20 Mins Ago',
    type: 'upload',
  },
  {
    id: '3',
    description: 'Digital_Transformation_Plan.Pdf Approved By Advisory Team',
    timeAgo: '1 Hour Ago',
    type: 'approval',
  },
];

export const projectInfo = {
  category: 'Strategy & Planning',
  title: 'Digital Transformation Strategic Planning',
  description: 'Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals',
  progress: 100,
};

export const currentUser = {
  name: 'Farooq',
  avatar: 'F',
};
