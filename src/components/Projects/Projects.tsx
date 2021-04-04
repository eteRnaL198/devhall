type Props = {
  mainScreen: string;
}

const Projects: React.FC<Props> = ({ mainScreen }) => {
  return (
    (mainScreen !== "Projects") ? null :
    <div className="w-full">
      <button>進行中</button>
      <button>募集中</button>
      <button>応募済</button>
      <button>いいね</button>
    </div>
  )
}

export default Projects;