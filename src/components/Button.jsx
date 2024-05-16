

const Button = ({onClick,btnText}) => {
  return (
    <button className="w-full h-10 bg-indigo-600 text-white flex items-center justify-center rounded-xl mt-6 border-transparent hover:scale-95 " onClick={onClick}>{btnText}</button>
  )
}

export default Button