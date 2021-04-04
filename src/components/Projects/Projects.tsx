type Props = {
  mainScreen: string;
}

const Projects: React.FC<Props> = ({ mainScreen }) => {
  return (
    (mainScreen !== "Projects") ? null :
    <div className="w-full">
      <p>プロジェクト</p>
    </div>
  )
}

export default Projects;