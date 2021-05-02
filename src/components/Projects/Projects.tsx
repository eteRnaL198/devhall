import React, { useState } from 'react';
import { Filter, Timeline } from "./index";

type Props = {
  mainScreen: string;
}

const Projects: React.FC<Props> = ({ mainScreen }) => {
  const [timeline, setTimeline] = useState<string>('search');

  const handleFilterButtonClick = (label: string): void => {
    setTimeline(label);
  }

  return (
    (mainScreen !== "Projects") ? null :
    <React.Fragment>
      {/* <button
        className="bg-white flex-1 font-bold mx-2 px-2 rounded-full"
        >作成
      </button> */}
      <div className="w-full overflow-x-hidden">
        <Filter handleFilterButtonClick={handleFilterButtonClick} timeline={timeline}/>
        <Timeline timeline={timeline}/>
      </div>
    </React.Fragment>
  )
}

export default Projects;