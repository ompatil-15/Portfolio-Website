import Tag from "./Tag";

const Certifications = ({ certificates, theme }) => {
	return (
		<div className="flex flex-col mt-6">
			<div className="text-2xl md:text-3xl font-bold">Certifications</div>
			<div className="flex flex-col mt-3">
				{certificates.map((c) => (
					<div className="flex justify-between">
						<a
							href={c.certificate}
							target="_blank"
							rel="noopener noreferrer"
							className="font-semibold text-sm md:text-base hover:underline"
						>
							{c.title} | {c.platform}
						</a>
						<div className="mt-1 hidden sm:block">
							<Tag text="Certificate" link={c.certificate} theme={theme} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Certifications;
