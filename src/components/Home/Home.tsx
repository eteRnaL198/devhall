import { Timeline } from "./index";

type Props = {
  mainScreen: string;
}

const Home: React.FC<Props> = ({ mainScreen }) => {
  return (
    (mainScreen !== "Home") ? null :
    <div className="flex flex-col py-6 w-full">
      <Timeline />
    </div>
  )
}

export default Home;