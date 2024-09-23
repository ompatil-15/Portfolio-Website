const MiniTag = ({text, theme}) => {
    return (
      <div className={`${theme === 1 ? "bg-accent" : "bg-neutral-700"} text-white rounded-full px-2 py-1 italic text-xs mr-1 mt-1`}>
        {text}
      </div>
    )
  }
  
  export default MiniTag
  