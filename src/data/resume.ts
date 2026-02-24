import { Github, Linkedin, Mail, Cloud, Server, Terminal, Database, Code, Cpu } from 'lucide-react';

export const resumeData = {
  personalInfo: {
    name: "Rohit Arodi Ramachandra",
    title: "Cloud & Software Engineer | DevOps",
    tagline: "Architecting scalable cloud solutions and automating infrastructure.",
    location: "Atlanta, GA",
    email: "rohitarodi7@gmail.com",
    social: [
      { name: "LinkedIn", url: "https://linkedin.com/in/arodirohit", icon: Linkedin },
      { name: "GitHub", url: "https://github.com/rohitarodi", icon: Github },
      { name: "Email", url: "mailto:rohitarodi7@gmail.com", icon: Mail },
    ]
  },
  about: {
    summary: "Cloud & Software Engineer with 4+ years of experience specializing in DevOps, AWS, Azure, and Kubernetes. Pursuing MS in Computer Science (GPA: 3.72) at Georgia State University. Passionate about designing scalable multi-tenant architectures, building ML pipelines for predictive maintenance, and automating secure CI/CD pipelines for enterprise systems.",
    stats: [
      { label: "Years Exp.", value: "4+" },
      { label: "Microservices", value: "13+" },
      { label: "Cloud Platforms", value: "3" },
      { label: "MS GPA", value: "3.72" },
    ]
  },
  education: [
    {
      school: "Georgia State University",
      degree: "Master of Science in Computer Science",
      period: "Aug 2023 – Dec 2025",
      gpa: "3.72 / 4.0",
      courses: ["Big Data Programming", "Data Science", "Cloud Computing", "Advanced Algorithms", "Cryptography", "Advanced Data Security"]
    },
    {
      school: "JSS Science and Technology University",
      degree: "Bachelor of Science in Computer Science",
      period: "Aug 2017 – May 2021",
      gpa: "8.84 / 10",
      courses: ["Database Management Systems", "Software Engineering", "Distributed Computing", "Algorithm Design"]
    }
  ],
  experience: [
    {
      company: "Bosch",
      role: "Cloud and Data Intern",
      period: "Jun 2025 – Oct 2025",
      description: "Designed a scalable multi-tenant deployment framework using Terraform and Azure DevOps. Led the transition to a SaaS-ready architecture by automating secure CI/CD pipelines, significantly improving onboarding reliability for the BDTI platform.",
      logo: "B"
    },
    {
      company: "Georgia State University – TRiO SSS",
      role: "Graduate Administrative Assistant",
      period: "Sep 2024 – Present",
      description: "Provide technical guidance and develop CS workshop materials for underrepresented students. Manage social media outreach, mentor students, and organize academic events to support student success and retention.",
      logo: "G"
    },
    {
      company: "Bosch Global Software Technology",
      role: "Senior Software Developer",
      period: "Aug 2021 – Jul 2024",
      description: "Architected enterprise cloud solutions on Azure/AWS for Digital Twin platforms. Built REST APIs with Flask handling 1000+ concurrent requests at 99.9% uptime. Developed ML pipelines for predictive maintenance and RUL estimation of industrial equipment.",
      logo: "B"
    },
    {
      company: "Bosch",
      role: "Software Development Intern",
      period: "Apr 2021 – Jul 2021",
      description: "Applied ML techniques including Extreme Learning Machines (ELM) and Subtractive Clustering for Remaining Useful Life (RUL) prediction models. Focused on fast training algorithms and pattern identification for industrial equipment health monitoring.",
      logo: "B"
    },
    {
      company: "Vinyas Innovative Technologies",
      role: "Software Development Intern",
      period: "Apr 2020 – Jun 2020",
      description: "Built a Bill of Materials (BOM) price finder application with third-party API integration and a Tkinter desktop UI. Gained end-to-end SDLC experience including requirements gathering, development, testing, and technical documentation.",
      logo: "V"
    }
  ],
  skills: [
    { name: "Cloud & DevOps", icon: Cloud, level: "AWS, Azure, GCP, Kubernetes" },
    { name: "Backend Dev", icon: Server, level: "Spring Boot, Flask, FastAPI" },
    { name: "Infrastructure", icon: Terminal, level: "Terraform, Docker, Ansible" },
    { name: "Data & ML", icon: Database, level: "SQL, NoSQL, Spark, PyTorch" },
    { name: "Languages", icon: Code, level: "Python, Java, JavaScript, Shell" },
    { name: "Big Data", icon: Cpu, level: "Hadoop, MapReduce, Power BI" },
  ],
  projects: [
    {
      title: "ESSMS – Enterprise Service Suite",
      description: "Managed 13 Spring Boot microservices on Kubernetes with end-to-end CI/CD pipelines, production failure diagnosis, and automated scaling.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop&auto=format",
      tags: ["Kubernetes", "Spring Boot", "AWS", "Docker", "CI/CD"],
      link: "https://github.com/rohitarodi",
      featured: true
    },
    {
      title: "Diaguru – Medical Communication Platform",
      description: "Award-winning Android app connecting doctors and patients in real time. Listed on Google Play Store, won ₹20,000 prize from JSS Medical College.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&auto=format",
      tags: ["Android", "Firebase", "Java", "XML"],
      link: "https://github.com/rohitarodi",
      featured: false
    },
    {
      title: "Disaster Management API",
      description: "Template-driven REST API for real-time disaster monitoring and prediction. Built with Python FastAPI and MongoDB for high-throughput async data ingestion.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop&auto=format",
      tags: ["Python", "FastAPI", "MongoDB", "Async"],
      link: "https://github.com/rohitarodi",
      featured: false
    },
    {
      title: "Route IT: Travel Recommendation System",
      description: "Android app for optimized travel routes using Google Distance API. Won 3rd place at MHRD Ideathon with 97% positive user feedback.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&auto=format",
      tags: ["Android", "Google APIs", "Firebase", "Cloud"],
      link: "https://github.com/rohitarodi",
      featured: false
    },
    {
      title: "Modeling & Simulation – Particle Filtering",
      description: "Data assimilation system using particle filtering in DEVSJAVA for joint state-parameter estimation with RMSE-based statistical validation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format",
      tags: ["DEVSJAVA", "Data Assimilation", "Python", "Statistics"],
      link: "https://github.com/rohitarodi",
      featured: false
    },
    {
      title: "COVID-19 Feature Detection via SMOTE",
      description: "ML research applying Neural Networks, SMOTE oversampling, and Random Forest classification for COVID-19 feature detection and predictive modeling.",
      image: "https://images.unsplash.com/photo-1584118624012-df056829fbd0?w=800&h=600&fit=crop&auto=format",
      tags: ["Machine Learning", "SMOTE", "Random Forest", "Python"],
      link: "https://github.com/rohitarodi",
      featured: false
    }
  ]
};
