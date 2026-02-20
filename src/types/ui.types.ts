export interface Skill {
  name: string;
  icon: string;
  category: string;
  proficiency: number;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  techDetails: string[];
  impact: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface Stat {
  value: number;
  label: string;
  suffix: string;
  icon: React.ReactNode;
}
