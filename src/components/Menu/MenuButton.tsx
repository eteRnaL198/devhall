type Props = {
  handleMainScreen: (screen: string) => void;
  label: string;
  mainScreen: string;
}

const MenuButton: React.FC<Props> = ({ handleMainScreen, label, mainScreen }) => {
  
  return (
    <button
      className={`duration-200 font-bold mb-4 mx-auto p-1 rounded-full tracking-wide w-3/4 ${(mainScreen === label ) ? "bg-gray-300 text-gray-500" : "bg-white" }`}
      onClick={() => handleMainScreen(label)}
    >
      {label}
    </button>
  )
}

export default MenuButton;