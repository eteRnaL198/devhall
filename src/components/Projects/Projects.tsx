import React from 'react';
import { Filter, Timeline } from "./index";

type Props = {
  mainScreen: string;
}

const Projects: React.FC<Props> = ({ mainScreen }) => {
  return (
    (mainScreen !== "Projects") ? null :
    <React.Fragment>
      {/* <button
        className="bg-white flex-1 font-bold mx-2 px-2 rounded-full"
        >作成
      </button> */}
      <div className="w-full">
        <Filter/>
        <Timeline/>
      </div>
    </React.Fragment>
  )
}

export default Projects;