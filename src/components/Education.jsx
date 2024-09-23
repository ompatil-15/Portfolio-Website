import EducationCard from "./EducationCard";

const Education = ({ education }) => {
	return (
		<div className="flex flex-col mt-6">
			<div className="text-2xl md:text-3xl font-bold">Education</div>
			{education.map((e) => (
				<EducationCard
					institution={e.institution}
					timeframe={e.timeframe}
					degree={e.degree}
                    sgpa={e.sgpa}
				/>
			))}
		</div>
	);
};

export default Education;
