import Tag from "./Tag";

const Certifications = ({ certificates, theme }) => {
	return (
		<div className="flex flex-col mt-6">
			<div className="text-2xl font-bold">Certifications</div>
			<div className="flex flex-col mt-3">
				{certificates.map((c) => (
					<div className="flex justify-between">
						<div className="font-bold text-sm">
							{c.title} | {c.platform}
						</div>
						<div className="mt-1">
							<Tag text="Certificate" link={c.certificate} theme={theme} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Certifications;
