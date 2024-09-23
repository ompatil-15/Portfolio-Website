const Tag = ({ text, link, theme }) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className={`${theme === 1 ? "bg-accent" : "bg-neutral-700"} text-white rounded-full px-2 py-1 text-xs mr-1 mt-1 cursor-pointer transition-opacity hover:bg-opacity-90`}
		>
			{text}
		</a>
	);
};

export default Tag;
