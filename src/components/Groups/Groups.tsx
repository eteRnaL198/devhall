type Props = {
  mainScreen: string;
}

const Groups: React.FC<Props> = ({ mainScreen }) => {
  return (
    (mainScreen !== "Groups") ? null :
    <div className="w-full">
      <button>作成</button>
      <button>検索</button>
      <div>所属</div>
    </div>
  )
}

export default Groups;