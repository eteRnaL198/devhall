import { Timeline } from "./index";

type Props = {
  mainScreen: string;
}

const Home: React.FC<Props> = ({ mainScreen }) => {
  return (
    <div className="flex flex-col py-2 w-full">
      <Timeline />
    </div>
  )
}

export default Home;