import React, { useState } from 'react';
import { Timeline } from "./index";

type Props = {
  mainScreen: string;
}

const Projects: React.FC<Props> = ({ mainScreen }) => {
  const [timeline, setTimeline] = useState<string>('search');

  return (
    (mainScreen !== "Projects") ? null :
    <React.Fragment>
      {/* <button
        className="bg-white flex-1 font-bold mx-2 px-2 rounded-full"
        >作成
      </button> */}
      <div className="w-full overflow-x-hidden">
        <Timeline timeline={timeline}/>
      </div>
    </React.Fragment>
  )
}

export default Projects;