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
		I am a purpose-driven Software Engineer specializing in scalable, secure web 
		and mobile applications using the MERN stack, Flutter, and AI integration. 
		With expertise in end-to-end project ownership and first-principles analysis, 
		I tackle complex challenges from design to deployment. Notably, I engineered 
		the security design of an end-to-end encrypted password manager from scratch. 
		As an effective communicator, I am committed to continuous learning and innovation, 
		adapting to emerging technologies to build future-ready applications.
	`;

const experiences = [
    {
        company: "Bizmorphic Research",
        position: "Full Stack Developer Intern",
        timeframe: "October 2024 - Present",
	description: `Working as a Full Stack Developer in a startup with a dynamic team of 10. 
			Currently integrating slack to handle chatbot conversations facilitating 
			real-time communication between agents and visitor.`,
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
