import { EyeIcon } from "@heroicons/react/24/solid"

interface IButtonView {
  onClick?: () => void
  disabled?: boolean
}

export const ButtonView = ({ onClick, disabled = false }: IButtonView) => {

  const handleOnClick = () => {
    onClick && onClick()
  }

  return (
    <button
      disabled={disabled}
      onClick={handleOnClick}
      className={`
        border p-2 rounded 
        ${disabled ? "cursor-not-allowed text-neutral-200" : "text-neutral-400 hover:text-blue-500 hover:border-blue-400 hover:bg-neutral-300 hover:shadow-lg"}`}
      >
      <EyeIcon className="w-5 h-5"/>
    </button>
  )
}