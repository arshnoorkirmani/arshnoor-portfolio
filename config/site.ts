/**
 * Centralized configuration for all links, image assets, and static media files.
 * This ensures consistency across the project and makes it easy to update links.
 */

export const siteConfig = {
  name: "Arshnoor Kirmani",
  url: "https://arshnoorkirmani.dev",
  description: "Front-End Developer Portfolio",
  
  // Social and Contact Links
  links: {
    github: "https://github.com/arshnoork",
    linkedin: "https://linkedin.com/in/arshnoorkirmani",
    email: "personal.arshnoorkirmani@gmail.com",
    resume: "/resume.pdf", // Add your resume PDF to public folder
  },
  
  // Section Navigation Links
  nav: {
    home: "/",
    about: "#about",
    projects: "#projects",
    skills: "#skills",
    experience: "#experience",
  },
  
  // External Image Assets (used in MDX content)
  assets: {
    projects: {
      weatherApp: "https://images.unsplash.com/photo-1507238692062-678c2270150f?q=80&w=2070&auto=format&fit=crop",
      imdbClone: "https://images.unsplash.com/photo-1507238692062-678c2270150f?q=80&w=2070&auto=format&fit=crop",
      eduNexus: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    }
  }
};
