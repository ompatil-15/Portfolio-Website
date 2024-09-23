import Tag from "./Tag";

const Skills = ({ skills, theme }) => {
	return (
		<div className="flex flex-col mt-6">
			<div className="text-2xl font-bold">Skills</div>
			<div className="flex flex-wrap mt-2">
				{skills.map((skill) => (
					<Tag text={skill} theme={theme} />
				))}
			</div>
		</div>
	);
};

export default Skills;
