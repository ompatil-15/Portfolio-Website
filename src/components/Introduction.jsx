import ContactLinks from "./ContactLinks";
import Tag from "./Tag";

const Introduction = ({ name, tagline, personal_interests, location, theme }) => {
	return (
		<div className="flex">
			<div className="flex flex-col flex-grow pr-5">
				<div className="text-5xl font-bold mt-2 mb-1 tracking-tight">
					{name}
				</div>
				<div className="text-base">{tagline}</div>
				<div className="flex flex-wrap">
					{personal_interests.map((interest) => (
						<Tag text={interest.domain} link={interest.link} theme={theme} />
					))}
				</div>
				<div className="flex justify-start items-center mt-1">
						<a
							href="https://maps.app.goo.gl/Dy5M3Vm7idYupH769"
							target="_blank"
							rel="noopener noreferrer"
							className=" hover:underline flex justify-start items-center"
						>
							<div className="pr-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="12"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-globe size-3"
								>
									<circle cx="12" cy="12" r="10"></circle>
									<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
									<path d="M2 12h20"></path>
								</svg>
							</div>
							<div className="text-xs my-1">{location}</div>
						</a>
				</div>

				<div>
					<ContactLinks />
				</div>
			</div>
			<div>
				<div className="w-[100px] h-full flex items-center">
					<img
						src="/photo.png"
						alt="profile-photo"
						className="rounded-lg"
					></img>
				</div>
			</div>
		</div>
	);
};

export default Introduction;
