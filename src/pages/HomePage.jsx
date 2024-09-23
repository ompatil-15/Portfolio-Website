import { useState } from "react";
import AboutMe from "../components/AboutMe";
import Certifications from "../components/Certifications";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Theme from "../components/Theme";
import {
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
} from "../components/Information"

const HomePage = () => {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || 1);

	const toggleTheme = (theme) => {
		const newTheme = theme === 1 ? 0 : 1;
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	return (
		<main>
			<Theme theme={theme} toggleTheme={toggleTheme} />
			<div className={`flex justify-center px-4 sm:px-16 md:px-0 ${theme === 1 ? "bg-white" : "bg-zinc-800"} min-h-screen  ${theme === 1 ? "text-zinc-800" : "text-zinc-300"}`}>
				<div className="flex flex-col w-full md:w-[660px] mb-5 mt-2">
					<Introduction
						name={name}
						tagline={tagline}
						personal_interests={personal_interests}
						location={location}
						theme={theme}
					/>
					<AboutMe aboutMe={aboutMe} />
					<Experience experiences={experiences} />
					<Education education={education} />
					<Skills skills={skills} theme={theme} />
					<Projects projects={projects} theme={theme} />
					<Certifications certificates={certificates} theme={theme} />
				</div>
			</div>
		</main>
	);
};

export default HomePage;
