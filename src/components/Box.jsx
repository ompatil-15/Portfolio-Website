
const Box = ({ href, icon, altText, download }) => {
  return (
    <a
      href={href}
      download={download}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:text-accent-foreground size-8 mr-1"
    >
      {icon}
      <span className="sr-only">{altText}</span>
    </a>
  )
}

export default Box