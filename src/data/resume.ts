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
      title: "Sentinel-AI",
      description: "Disaster intelligence platform with live sensor ingestion, physics-based risk classification (flood, wildfire, earthquake), and Google Gemini AI summaries. Deploys to Azure via GitHub Actions CI/CD with an interactive choropleth map.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=800&fit=crop&auto=format",
      tags: ["TypeScript", "React", "FastAPI", "Azure", "Docker", "RabbitMQ", "Gemini AI"],
      link: "https://github.com/rohitarodi/sentinal-ai",
      featured: true
    },
    {
      title: "H1B Job Matcher",
      description: "Matches H1B-sponsoring companies from USCIS data with live new-grad job listings. Tracks applications via Gmail integration and visualizes the hiring funnel with an interactive D3 pipeline dashboard.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&auto=format",
      tags: ["Python", "Flask", "Docker", "D3.js", "USCIS Data", "Gmail API"],
      link: "https://github.com/rohitarodi/h1b-job-matcher",
      featured: false
    },
    {
      title: "Self-Hosted AI Stack",
      description: "Privacy-first home lab bundling an AI assistant (OpenClaw), Obsidian note-sync, WireGuard VPN, and Nginx proxy — all brought up with a single Docker Compose command. Your data stays on your server.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&auto=format",
      tags: ["Docker", "WireGuard", "Nginx", "Obsidian", "Shell", "Self-Hosted"],
      link: "https://github.com/rohitarodi/selfhosted-ai",
      featured: false
    },
    {
      title: "MNIST Federated Learning",
      description: "Federated learning system for MNIST digit classification with Byzantine attack detection via cosine similarity analysis. Malicious clients are isolated while maintaining ~98% accuracy across distributed nodes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format",
      tags: ["Python", "PyTorch", "Federated Learning", "ML Security", "CNN"],
      link: "https://github.com/rohitarodi/CSC8370_Federated_learning_Project",
      featured: false
    },
    {
      title: "Secure File Storage App",
      description: "Hybrid AES + RSA encrypted file storage backed by Azure Key Vault and Blob Storage. Streamlit frontend, Flask backend, and Docker packaging for local or cloud deployment.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&auto=format",
      tags: ["Python", "Azure", "AES/RSA", "Streamlit", "Flask", "Docker"],
      link: "https://github.com/rohitarodi/SecureFileStorageApp",
      featured: false
    },
    {
      title: "pyNas – Personal NAS",
      description: "Self-hosted photo server with AI face detection, EXIF metadata extraction, GPS map integration, and drag-and-drop uploads. Full-stack FastAPI + React 18 with automatic thumbnail generation.",
      image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=800&h=600&fit=crop&auto=format",
      tags: ["FastAPI", "React", "OpenCV", "Python", "SQLAlchemy"],
      link: "https://github.com/rohitarodi/pyNas",
      featured: false
    },
    {
      title: "Personal Portfolio Website",
      description: "Developer portfolio built with React 19, TypeScript, Tailwind CSS 4, and Framer Motion. Dark glass-morphism design with smooth scroll animations, deployed on Vercel.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop&auto=format",
      tags: ["TypeScript", "React 19", "Tailwind CSS", "Vite", "Vercel"],
      link: "https://github.com/rohitarodi/Personal_Website",
      featured: false
    },
    {
      title: "My Lofi",
      description: "Browser-based lofi music player with a minimal atmospheric interface. JavaScript-powered with curated playlists designed for focused work and study sessions.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop&auto=format",
      tags: ["JavaScript", "HTML", "CSS", "Music Player"],
      link: "https://github.com/rohitarodi/My_Lofi",
      featured: false
    },
    {
      title: "Work Tracker",
      description: "LaTeX-based personal work journal for structured logging of tasks, progress, and notes with clean typesetting and version-controlled history.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop&auto=format",
      tags: ["LaTeX", "TeX", "Productivity", "Documentation"],
      link: "https://github.com/rohitarodi/Work_Tracker",
      featured: false
    },
    {
      title: "DevOps Shell Scripts",
      description: "Collection of DevOps and system administration shell scripts covering automation, monitoring, and infrastructure tasks — extended from the devops-by-examples project.",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop&auto=format",
      tags: ["Shell", "Bash", "DevOps", "Automation", "Linux"],
      link: "https://github.com/rohitarodi/Shell",
      featured: false
    },
    {
      title: "NeetCode DSA Submissions",
      description: "LeetCode / NeetCode problem submissions organized by topic. Python solutions spanning arrays, binary search, trees, graphs, dynamic programming, and more.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop&auto=format",
      tags: ["Python", "Algorithms", "Data Structures", "LeetCode"],
      link: "https://github.com/rohitarodi/neetcode-submissions-b3wl7gpi",
      featured: false
    },
    {
      title: "is-a.dev Subdomain",
      description: "Registered a free developer subdomain via the is-a.dev open-source DNS registry — a community project enabling developers to host personal sites under the is-a.dev domain.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&auto=format",
      tags: ["DNS", "Open Source", "Community", "Web"],
      link: "https://github.com/rohitarodi/register",
      featured: false
    },
    {
      title: "GitHub Profile README",
      description: "Animated GitHub profile README showcasing skills, projects, and contribution stats with dynamic badges and visual graphs.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop&auto=format",
      tags: ["Markdown", "GitHub", "Profile", "Badges"],
      link: "https://github.com/rohitarodi/rohitarodi",
      featured: false
    }
  ]
};
