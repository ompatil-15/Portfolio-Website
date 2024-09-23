import ExperienceCard from "./ExperienceCard";

const Experience = ({ experiences }) => {
	return (
		<div className="flex flex-col mt-6">
			<div className="text-2xl md:text-3xl font-bold">Experience</div>
			{experiences.map((experience) => (
				<ExperienceCard
					company={experience.company}
					position={experience.position}
					timeframe={experience.timeframe}
					description={experience.description}
				/>
			))}
		</div>
	);
};

export default Experience;
