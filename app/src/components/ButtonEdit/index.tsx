import { PencilIcon } from "@heroicons/react/24/solid"

interface IButtonEdit {
  onClick?: () => void
  disabled?: boolean
}

export const ButtonEdit = ({ onClick, disabled = false }: IButtonEdit) => {

  const handleOnClick = () => {
    onClick && onClick()
  }

  return (
    <button
      disabled={disabled}
      onClick={handleOnClick}
      className={`
        border p-2 rounded 
        ${disabled ? "cursor-not-allowed text-neutral-200" : "text-neutral-400 hover:text-emerald-500 hover:border-emerald-400 hover:bg-neutral-300 hover:shadow-lg"}`}
      >
      <PencilIcon className="w-5 h-5"/>
    </button>
  )
}