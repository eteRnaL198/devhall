type Props = {
  mainScreen: string;
}

const Projects: React.FC<Props> = ({ mainScreen }) => {
  return (
    (mainScreen !== "Projects") ? null :
    <div className="w-full">
      <div className="flex justify-around mx-3 my-3">
        <button
          className="bg-white flex-1 font-bold mx-2 px-2 rounded-full"
          >進行中
        </button>
        <button
          className="bg-white flex-1 font-bold mx-2 px-2 rounded-full"
          >募集中
        </button>
        <button
          className="bg-white flex-1 font-bold mx-2 px-2 rounded-full"
          >応募済
        </button>
        <button
          className="bg-white flex-1 font-bold mx-2 px-2 rounded-full"
          >いいね
        </button>
      </div>
      {/* <> */}
    </div>
  )
}

export default Projects;