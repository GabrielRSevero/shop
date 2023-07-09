import { Cog8ToothIcon } from "@heroicons/react/24/solid"

interface IButtonConfigs {
  onClick?: () => void
}

export const ButtonConfigs = ({ onClick }: IButtonConfigs) => {

  const handleOnClick = () => {
    onClick && onClick()
  }

  return (
    <button
      onClick={handleOnClick}
      className="
        border p-2 rounded text-neutral-400 
        hover:text-gray-500 hover:border-gray-400 hover:bg-neutral-300 hover:shadow-lg"
      >
      <Cog8ToothIcon className="w-5 h-5"/>
    </button>
  )
}