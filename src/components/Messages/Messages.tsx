type Props = {
  mainScreen: string;
}

const Messages: React.FC<Props> = ({ mainScreen }) => {
  return (
    (mainScreen !== "Messages") ? null :
    <div className="w-full">
      <p>メッセージ</p>
    </div>
  )
}

export default Messages;