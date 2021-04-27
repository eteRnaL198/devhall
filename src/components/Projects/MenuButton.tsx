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
      {
        (label === "Home") ? "ホーム" :
        (label === "Projects") ? "プロジェクト" :
        (label === "Teams") ? "チーム" :
        (label === "Messages") ? "メッセージ" :
        (label === "Profile") ? "プロフィール" : null
      }
    </button>
  )
}

export default MenuButton;