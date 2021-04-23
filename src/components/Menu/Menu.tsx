import { MenuButton } from "./index";

type Props = {
  handleMainScreen: (screen: string) => void;
  mainScreen: string;
}

const Menu: React.FC<Props> = ({ handleMainScreen, mainScreen }) => {
  const buttons = ["Home", "Projects", "Teams", "Messages", "Profile"];
  return (
    <div className="bg-red-200 h-screen rounded-r-xl text-center w-5/12">
      <p className="font-black mb-3 p-3 text-2xl text-white tracking-wider">Dev Hall</p>
      {buttons.map((button, idx) => (
        <MenuButton key={idx} handleMainScreen={handleMainScreen} label={button} mainScreen={mainScreen} />
      ))}
    </div>
  )
}

export default Menu;