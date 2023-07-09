import { TrashIcon } from "@heroicons/react/24/solid"

interface IButtonDelete {
  onClick?: () => void
  disabled?: boolean
}

export const ButtonDelete = ({ onClick, disabled = false }: IButtonDelete) => {

  const handleOnClick = () => {
    onClick && onClick()
  }

  return (
    <button
      disabled={disabled}
      onClick={handleOnClick}
      className={`
        border p-2 rounded  
        ${disabled ? "cursor-not-allowed text-neutral-200" : "text-neutral-400 hover:text-rose-500 hover:border-rose-400 hover:bg-neutral-300 hover:shadow-lg"}`}
      >
      <TrashIcon className="w-5 h-5"/>
    </button>
  )
}