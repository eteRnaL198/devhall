type Props = {
  chat: ChatData;
}

type ChatData = {
  from: string;
  text: string;
}

const Chat: React.FC<Props> = ({chat}) => {
  return (
    <div className="flex">
      <p>{chat.from}</p>
      <p>{chat.text}</p>
    </div>
  )
}

export default Chat;