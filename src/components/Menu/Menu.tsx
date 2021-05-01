import { MenuButton } from "./index";

type Props = {
  handleMainScreen: (screen: string) => void;
  mainScreen: string;
}
type Buttons = {
  label: string;
  name: string;
}[]

const Menu: React.FC<Props> = ({ handleMainScreen, mainScreen }) => {
  const buttons: Buttons = [
    {
      label: "Projects",
      name: "プロジェクト",
    },
    {
      label: "Groups",
      name: "グループ",
    },
    {
      label: "Messages",
      name: "メッセージ",
    },
    {
      label: "Profile",
      name: "プロフィール",
    }
  ];
  return (
    <div className="bg-blue-400 h-screen min-w-10 rounded-r-xl text-center w-1/4">
      <p className="font-black mb-3 p-3 text-2xl text-white tracking-wider">Dev Hall</p>
      {buttons.map((button, idx) => (
        <MenuButton handleMainScreen={handleMainScreen} key={idx} label={button.label} name={button.name} mainScreen={mainScreen} />
      ))}
    </div>
  )
}

export default Menu;