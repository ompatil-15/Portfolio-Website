const AboutMe = ({ aboutMe }) => {
	return (
		<div className="flex flex-col mt-6">
			<div className="text-2xl md:text-3xl font-bold">About Me</div>
			<div className="text-sm md:text-base mt-4 tracking-tight">{aboutMe}</div>
		</div>
	);
};

export default AboutMe;
