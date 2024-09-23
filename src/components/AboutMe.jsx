const AboutMe = ({ aboutMe }) => {
	return (
		<div className="flex flex-col mt-6">
			<div className="text-2xl font-bold">About Me</div>
			<div className="text-sm mt-2 tracking-tight">{aboutMe}</div>
		</div>
	);
};

export default AboutMe;