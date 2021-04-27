import { useState } from 'react'
import { Menu, Projects, Teams, Messages, Profile } from './components/index';

function App() {
  const [mainScreen, setMainScreen] = useState("Home");
  
  const handleMainScreen = (screen: string) => {
    setMainScreen(screen);
  }

  return (
    <div className="flex bg-gray-200">
      <Menu handleMainScreen={handleMainScreen} mainScreen={mainScreen} />
      <Projects mainScreen={mainScreen} />
      <Teams mainScreen={mainScreen} />
      <Messages mainScreen={mainScreen} />
      <Profile mainScreen={mainScreen} />
    </div>
  );
}

export default App;
