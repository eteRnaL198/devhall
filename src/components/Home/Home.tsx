import React, { useState } from 'react';
import { Filter, Timeline } from "./index";

type Props = {
  mainScreen: string;
}

const Home: React.FC<Props> = ({ mainScreen }) => {
  const [timeline, setTimeline] = useState<string>('search');

  const handleFilterButtonClick = (label: string): void => {
    setTimeline(label);
  }

  return (
    (mainScreen !== "Home") ? null :
    <div className="flex flex-col overflow-x-hidden w-full">
      <div className="flex flex-col items-center w-full">
        <Filter handleFilterButtonClick={handleFilterButtonClick} timeline={timeline}/>
        <button className="bg-white font-bold mb-3 py-1 rounded-full w-3/4 focus:outline-none"
        >新規作成 +</button>
        <Timeline timeline={timeline}/>
      </div>
    </div>
  )
}

export default Home;