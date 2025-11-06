// TypeScript type definitions for content structure

export interface Profile {
  name: string;
  title: string;
  heroContent: string;
  aboutText: string;
  profileImage: string;
  aboutImage: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  twitter: string;
  instagram: string;
}

export interface Technology {
  name: string;
  icon: string;
  color: string;
  duration: number;
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
}

export interface Contact {
  address: string;
  phoneNo: string;
  email: string;
}

export interface PortfolioContent {
  profile: Profile;
  social: SocialLinks;
  technologies: Technology[];
  experiences: Experience[];
  projects: Project[];
  contact: Contact;
}
