const EducationCard = ({ institution, timeframe, degree, cgpa }) => {
	return (
		<div className="flex flex-col my-2">
			<div className="flex justify-between">
				<div className="font-bold">{institution}</div>
				<div className="font-semibold">{timeframe}</div>
			</div>
            <div className="flex justify-between text-sm">
            <div>{degree}</div>
            <div>{cgpa}</div>
            </div>
		</div>
	);
};

export default EducationCard;