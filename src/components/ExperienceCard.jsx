const ExperienceCard = ({ company, position, timeframe, description }) => {
	return (
		<div className="flex flex-col mt-2">
			<div className="flex justify-between">
				<div className="font-bold">{company} | {position}</div>
				<div className="font-semibold">{timeframe}</div>
			</div>
            <div className="text-sm">{description}</div>
		</div>
	);
};

export default ExperienceCard;
