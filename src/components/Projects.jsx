import MiniTag from "./MiniTag";

const Projects = ({ projects, theme }) => {
	return (
		<div className="flex flex-col mt-6">
			<div className="font-bold text-2xl">Projects</div>
			<div className="grid grid-cols-2 gap-4 mt-4">
				{projects.map((project) => (
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col justify-between h-[260px] px-5 py-6 border rounded-xl hover:border-dark-3"
					>
						<div className="flex flex-col">
							<div className="text-lg font-bold">{project.title}</div>
							<div className="text-sm mt-1">{project.description}</div>
						</div>

						<div className="flex flex-wrap mt-auto">
							{project.skills.map((skill) => (
								<MiniTag text={skill} theme={theme} />
							))}
						</div>
					</a>
				))}
			</div>
		</div>
	);
};

export default Projects;
