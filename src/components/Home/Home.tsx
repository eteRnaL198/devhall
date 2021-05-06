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
    <div className="flex flex-col py-6 w-full">
      <button>作成 +</button>
      <div className="w-full overflow-x-hidden">
        <Filter handleFilterButtonClick={handleFilterButtonClick} timeline={timeline}/>
        <Timeline timeline={timeline}/>
      </div>
    </div>
  )
}

export default Home;