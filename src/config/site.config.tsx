import { Zap, TrendingUp, Target, Code2 } from 'lucide-react';
import { Certification, Experience, NavItem, Project, Skill, Stat } from '../types/ui.types';

export const CONFIG = {
  site: {
    title: 'VKD',
    name: 'Vamshi Krishna Durganala',
    role: 'Full Stack Software Developer',
    typingRoles: ['Full Stack Developer', 'React Specialist', 'Spring Boot Expert', 'DevOps Engineer', 'Cloud Architect'],
    location: 'Charlotte, NC',
    phone: '(980) 613-7558',
    tagline: 'Building enterprise-grade applications with modern tech stacks and cloud-native architecture',
    email: 'vamshi.durganala2000@gmail.com',
    resumeUrl: '/resume.pdf', // TODO: Update with your actual resume file path
    social: {
      github: 'https://github.com/vamshi-krishna-durganala', // TODO: UPDATE THIS
      linkedin: 'https://linkedin.com/in/vamshi-krishna-durganala/'
    }
  },
  stats: [
    { value: 99.9, label: 'Uptime', suffix: '%', icon: <Zap className="w-6 h-6" /> },
    { value: 40, label: 'Reliability Boost', suffix: '%', icon: <TrendingUp className="w-6 h-6" /> },
    { value: 95, label: 'Test Coverage', suffix: '%', icon: <Target className="w-6 h-6" /> },
    { value: 3, label: 'Years Experience', suffix: '+', icon: <Code2 className="w-6 h-6" /> }
  ] as Stat[],
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ] as NavItem[],
  experience: [
    {
      company: 'TGS Technology LLC',
      role: 'Full Stack Developer',
      period: 'Jul 2024 - Present',
      location: 'Charlotte, NC',
      achievements: [
        'Developed scalable Election Management System with 40% reliability improvement',
        'Engineered modular UI components reducing form-related bugs by 30%',
        'Integrated JWT authentication and Keycloak RBAC for 100% compliant access control',
        'Enhanced backend APIs reducing database response time by 35%',
        'Achieved 99.9% uptime deploying containerized services on AWS EKS'
      ]
    },
    {
      company: 'TGS Technology LLC',
      role: 'Web Developer Intern',
      period: 'Jan 2024 - Jul 2024',
      location: 'Charlotte, NC',
      achievements: [
        'Built React and Node.js application with ChatGPT integration',
        'Reduced AI response times by 25% through optimization',
        'Increased user engagement by 60% with personalized AI responses'
      ]
    },
    {
      company: 'Cognizant Technology Solutions',
      role: 'Full Stack Engineer',
      period: 'Aug 2021 - Dec 2022',
      location: 'Tamil Nadu, India',
      achievements: [
        'Refined test management system improving user satisfaction by 40%',
        'Integrated Jira APIs reducing ticket handling time by 35%',
        'Delivered real-time dashboards enhancing debugging efficiency by 30%',
        'Optimized SQL queries accelerating data access by 20%'
      ]
    }
  ] as Experience[],
  skills: [
    { name: 'React.js', icon: '⚛️', category: 'Frontend', proficiency: 95 },
    { name: 'TypeScript', icon: '📘', category: 'Frontend', proficiency: 90 },
    { name: 'Next.js', icon: '▲', category: 'Frontend', proficiency: 85 },
    { name: 'Spring Boot', icon: '🍃', category: 'Backend', proficiency: 90 },
    { name: 'Node.js', icon: '🟢', category: 'Backend', proficiency: 88 },
    { name: 'Python', icon: '🐍', category: 'Backend', proficiency: 82 },
    { name: 'AWS', icon: '☁️', category: 'DevOps', proficiency: 85 },
    { name: 'Docker', icon: '🐳', category: 'DevOps', proficiency: 88 },
    { name: 'Kubernetes', icon: '⚙️', category: 'DevOps', proficiency: 80 },
    { name: 'Jenkins', icon: '🔧', category: 'DevOps', proficiency: 83 },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database', proficiency: 87 },
    { name: 'MongoDB', icon: '🍃', category: 'Database', proficiency: 85 }
  ] as Skill[],
  projects: [
    {
      title: 'Election Management System',
      description: 'Scalable full-stack platform with JWT authentication, RBAC, and microservices architecture',
      tags: ['React', 'Spring Boot', 'AWS EKS'],
      gradient: 'from-cyan-600 to-blue-600',
      techDetails: ['Microservices Architecture', 'JWT + Keycloak Auth', 'Docker + Kubernetes', 'AWS EKS Deployment', 'JPA + Hibernate ORM'],
      impact: '99.9% uptime, 40% reliability improvement'
    },
    {
      title: 'AI-Powered Rehabilitation Platform',
      description: 'ChatGPT-integrated counseling platform with personalized intelligent dialogue',
      tags: ['React', 'Node.js', 'OpenAI API'],
      gradient: 'from-emerald-600 to-teal-600',
      techDetails: ['ChatGPT API Integration', 'Real-time WebSocket', 'SQL Server Database', 'RESTful APIs', 'Optimized Response Engine'],
      impact: '60% engagement increase, 25% faster responses'
    },
    {
      title: 'Test Management & VDI Monitoring',
      description: 'Enterprise dashboard with Jira API integration and real-time execution logs',
      tags: ['React', 'Spring Boot', 'Jira API'],
      gradient: 'from-orange-600 to-amber-600',
      techDetails: ['Jira API Integration', 'Real-time Dashboards', 'MySQL Database', 'Interactive Visualizations', 'Automated Workflows'],
      impact: '35% faster ticket handling, 30% better debugging'
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Optimized deployment pipeline using Jenkins, Docker, and AWS services',
      tags: ['Jenkins', 'Docker', 'AWS Lambda'],
      gradient: 'from-violet-600 to-purple-600',
      techDetails: ['Jenkins Pipeline', 'Docker Containers', 'AWS Lambda Functions', 'Bitbucket Integration', 'Automated Testing'],
      impact: 'Zero rollback errors, seamless deployments'
    }
  ] as Project[],
  certifications: [
    { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', year: '2024' },
    { name: 'Microsoft Azure Fundamentals (AZ-900)', issuer: 'Microsoft', year: '2024' },
    { name: 'Tricentis Tosca Automation Specialist 1 & 2', issuer: 'Tricentis', year: '2023' },
    { name: 'Programming, Data Structures and Algorithms', issuer: 'NPTEL', year: '2023' }
  ] as Certification[],
  about: {
    intro: "Full Stack Software Developer with a Master's in Information Technology from UNC Charlotte",
    highlights: [
      {
        title: 'Enterprise Development',
        text: 'Specializing in building scalable applications using React, Spring Boot, and AWS cloud infrastructure'
      },
      {
        title: 'Current Role',
        text: 'At TGS Technology LLC, architecting mission-critical systems with 40% reliability improvement through microservices and containerization'
      },
      {
        title: 'DevOps Expertise',
        text: 'Hands-on experience with Docker, Kubernetes, CI/CD pipelines, and achieving 99.9% uptime on AWS EKS'
      },
      {
        title: 'Quality Focus',
        text: 'Implemented automated testing achieving 95% code coverage with JUnit, Jest, and SonarQube integration'
      }
    ]
  }
};