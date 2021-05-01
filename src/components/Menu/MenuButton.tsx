type Props = {
  handleMainScreen: (screen: string) => void;
  name: string;
  label: string;
  mainScreen: string;
}

const MenuButton: React.FC<Props> = ({ handleMainScreen, name, label, mainScreen }) => {
  
  return (
    <button
      className={`duration-200 font-bold mb-4 mx-auto p-1 rounded-full tracking-wide w-3/4 ${(mainScreen === label ) ? "bg-gray-300 text-gray-500" : "bg-white" }`}
      onClick={() => handleMainScreen(label)}
    >{name}
    </button>
  )
}

export default MenuButton;