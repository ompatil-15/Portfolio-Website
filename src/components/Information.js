const name = "Om Patil";

const tagline = "Software Engineer with a passion for";

const personal_interests = [
    {
        domain: "Engineering",
        link: "https://en.wikipedia.org/wiki/Engineering",
    },
    {
        domain: "Quantum Computing",
        link: "https://en.wikipedia.org/wiki/Quantum_computing",
    },
    {
        domain: "Space",
        link: "https://en.wikipedia.org/wiki/SpaceX",
    },
    {
        domain: "Cybersecurity",
        link: "https://en.wikipedia.org/wiki/Computer_security",
    },
    {
        domain: "Cybernetics",
        link: "https://en.wikipedia.org/wiki/Cybernetics",
    },
    {
        domain: "Permaculture",
        link: "https://www.permaculturenews.org/what-is-permaculture/",
    },
];

const location = "Pune, Maharashtra, India";

const aboutMe = `
		I'm Om Patil, an engineer by passion who loves building products that people use, value, and remember. 
  		I care deeply about purpose, when you're clear on the why, the how follows. I focus on creating value 
    		through engineering, believing that what you give returns through leverage, learning, and luck. 
      		My flagship project is SHIELD, a zero-knowledge, end-to-end encrypted password manager with a custom-designed 
		security architecture inspired by real-world threat models and research papers.
	`;

const experiences = [
    {
        company: "Bizmorphic Research",
        position: "Full Stack Developer Intern",
        timeframe: "October 2024 - March 2025",
	description: `Took full ownership of the conversation service at wisemelon.ai, 
	 		resolving major system-breaking bugs, implementing real-time socket communication, 
	   		and leading architectural changes, transforming a broken prototype into a production-ready 
	     		platform for onboarding customer support businesses.
       	`,
    },
    {
        company: "Persistent Systems",
        position: "Generative AI Mentorship",
        timeframe: "May 2024 - July 2024",
        description: `Developed generative AI applications using Google Gemini, LangChain, 
			and CrewAI, including an AI chatbot for document interaction, fine-tuned PEFT models, 
			and multi-agent workflows for a blog website.`,
    },
    {
        company: "PICT INC Web Team",
        position: "Web Developer Intern",
        timeframe: "February 2024 - April 2024",
        description: `Collaborated with a team to develop an Event Management System for 
			Impetus and Concepts (InC), the flagship event of PICT, Pune, increasing operational 
			efficiency for the organizing team by automating and digitizing the entire process.`,
    },
];

const education = [
    {
        institution: "Pune Institute of Computer Technology",
        timeframe: "June 2022 - June 2025",
        degree: "Bachelor of Engineering in Information Technology",
        sgpa: "SGPA: 8.88",
    },
];

const skills = [
    "C++",
    "Python",
    "JavaScript",
    "HTML5",
    "CSS3",
    "MongoDB",
    "MySQL",
    "Express.js",
    "React",
    "Redux",
    "RTK Query",
    "Node.js",
    "Flutter",
    "Dart",
    "Firebase",
    "GitHub",
    "AWS",
    "Docker",
    "Bootstrap",
    "Tailwind",
    "Touch Typing: 121 wpm",
    "Generative AI",
    "RESTful API",
    "Wireshark",
    "Postman",
    "AI/ML",
    "OpenCV",
    "Cybersecurity",
    "Cryptography",
    "Linux",
];

const projects = [
    {
        title: "SHIELD Password Manager",
        description: `
				A secure password manager with advanced encryption to store 
				your passwords, notes, and personal data with payment integration
				for premium service`,
        skills: [
            "MERN",
            "Web Crypto API",
            "Zero Knowledge",
            "End-to-end encryption",
            "Chrome Extension",
            "Freemium service",
            "PhonePe API",
        ],
        link: "https://ompatil-shield.onrender.com/",
    },
    {
        title: "SKYNET Chat Application",
        description: `
				A real-time chat application with Gemini API integration for AI chatbot functionality`,
        skills: [
            "Flutter",
            "Dart",
            "Firebase",
            "Realtime",
            "Cross-platform",
            "Gemini API",
        ],
        link: "https://github.com/ompatil-15/SKYNET-Chat-Application",
    },
    {
        title: "DocuMind",
        description: `
				A generative AI-powered chatbot that interact with documents, fine-tuned on 
				their content and aware of chat history`,
        skills: [
            "Generative AI",
            "Chatbot",
            "Langchain",
            "NLP",
            "FAISS",
            "Streamlit",
            "Gemini API"
        ],
        link: "https://ompatil-genai-rag.streamlit.app/",
    },
    {
        title: "Galvatron",
        description: `
				A Python script to encrypt and decrypt any file into a binary video and vice versa, 
				allowing uploads to YouTube for unlimited cloud storage`,
        skills: ["OpenCV", "Python", "Glitch", "Cryptography", "Encryption"],
        link: "https://github.com/ompatil-15/Galvatron",
    },
    {
        title: "Smart Waste Management System",
        description: `
				A platform that streamlines waste management with real-time tracking, efficient routing, 
				and an online marketplace`,
        skills: [
            "MERN",
            "Tailwind",
            "ESP-32",
            "Firebase",
            "Dijkstra",
            "Maps API",
        ],
        link: "https://github.com/ompatil-15/Smart-Waste-Management",
    },
    {
        title: "Ride Rental Platform",
        description: `
				A platform to rent out bicycles for emergency commutes, ensuring quick and convenient 
				transportation when needed most.`,
        skills: [
            "MERN", 
            "Tailwind", 
            "E-commerce", 
            "Redux", 
            "RESTful API",
        ],
        link: "https://github.com/ompatil-15/Retro-Ride-Share/tree/main",
    },
];

const certificates = [
    {
        title: "The Web Developer Bootcamp 2024",
        platform: "Udemy",
        certificate:
            "https://www.udemy.com/certificate/UC-d2208527-e81a-49fc-90ed-fdb24060953e/",
    },
    {
        title: "Responsive Web Design",
        platform: "freeCodeCamp",
        certificate:
            "https://www.freecodecamp.org/certification/cyb3rm4n/responsive-web-design",
    },
    {
        title: "LangChain for LLM Application Development",
        platform: "DeepLearning.AI",
        certificate:
            "https://learn.deeplearning.ai/accomplishments/48220fff-62e7-434f-a32b-3fb27e0b7f80",
    },
];

export {
    name,
    tagline,
    personal_interests,
    location,
    aboutMe,
    experiences,
    education,
    skills,
    projects,
    certificates
}
