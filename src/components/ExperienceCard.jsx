const ExperienceCard = ({ company, position, timeframe, description }) => {
	return (
		<div className="flex flex-col mt-4">
			<div className="flex flex-col sm:flex-row justify-between md:text-lg">
				<div className="font-bold">{company} | {position}</div>
				<div className="font-semibold">{timeframe}</div>
			</div>
            <div className="text-sm md:text-base">{description}</div>
		</div>
	);
};

export default ExperienceCard;
