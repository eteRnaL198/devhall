import { Message, MessageButton } from "./index";

type Props = {
  mainScreen: string;
}

const Messages: React.FC<Props> = ({ mainScreen }) => {
  return (
    (mainScreen !== "Messages") ? null :
    <div className="w-full">
      <MessageButton/>
      <Message/>
    </div>
  )
}

export default Messages;