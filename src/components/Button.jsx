
const Button = ({label, iconURL, backgroundColor, borderCorlor, textColor, fullWidth}) => {
  return (
    <button className={`flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full 
    ${
      backgroundColor 
      ? `${backgroundColor} ${textColor} ${borderCorlor}` 
      : 'bg-coral-red text-white border-coral-red'
    }
    ${ fullWidth && 'w-full' }
     `}>
        {label}
        { iconURL && <img 
          src={iconURL} 
          alt="arrow rigth icon"
          className="ml-2 rounded-full w-5 h-5" 
        />
      }
    </button>
  )
}

export default Button