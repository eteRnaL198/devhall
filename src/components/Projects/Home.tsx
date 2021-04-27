import { Timeline } from "../Home/index";

type Props = {
  mainScreen: string;
}

const Home: React.FC<Props> = ({ mainScreen }) => {
  return (
    (mainScreen !== "Home") ? null :
    <div className="flex flex-col py-6 w-full">
      <button>更新 ↺</button>
      <button>作成 +</button>
      <Timeline />
    </div>
  )
}

export default Home;