type Props = {
  mainScreen: string;
}

const Teams: React.FC<Props> = ({ mainScreen }) => {
  return (
    (mainScreen !== "Teams") ? null :
    <div>
      Teams
    </div>
  )
}

export default Teams;