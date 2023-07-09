import { PlusIcon } from "@heroicons/react/24/solid"

interface IButtonCreate {
  onClick?: () => void
  disabled?: boolean
}

export const ButtonCreate = ({ onClick, disabled = false }: IButtonCreate) => {

  const handleOnClick = () => {
    onClick && onClick()
  }

  return (
    <button
      disabled={disabled}
      onClick={handleOnClick}
      className={`
        flex justify-center items-center gap-1
        border p-2 rounded 
        ${disabled ? "cursor-not-allowed text-neutral-200" : "text-neutral-400 hover:text-indigo-500 hover:border-indigo-400 hover:bg-neutral-300 hover:shadow-lg"}`}
      >
      <PlusIcon className="w-5 h-5"/>

      Adicionar
    </button>
  )
}