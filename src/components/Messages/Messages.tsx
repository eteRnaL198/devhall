type Props = {
  mainScreen: string;
}

const Messages: React.FC<Props> = ({ mainScreen }) => {
  return (
    (mainScreen !== "Messages") ? null :
    <div className="w-full">
      
    </div>
  )
}

export default Messages;