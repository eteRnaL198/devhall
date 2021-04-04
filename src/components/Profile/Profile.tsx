type Props = {
  mainScreen: string;
}

const Profile: React.FC<Props> = ({ mainScreen }) => {
  return (
    (mainScreen !== "Profile") ? null :
    <div>
      profile
    </div>
  )
}

export default Profile;