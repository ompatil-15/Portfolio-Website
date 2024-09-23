const EducationCard = ({ institution, timeframe, degree, sgpa }) => {
	return (
		<div className="flex flex-col mt-3">
			<div className="flex flex-col sm:flex-row justify-between md:text-lg">
				<div className="font-bold">{institution}</div>
				<div className="font-semibold">{timeframe}</div>
			</div>
			<div className="flex flex-col sm:flex-row justify-between text-sm md:text-base">
				<div>{degree}</div>
				<div>{sgpa}</div>
			</div>
		</div>
	);
};

export default EducationCard;
