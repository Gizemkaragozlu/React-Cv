
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (

    <div className="App" 
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
    >
     <Navbar/>
     <Intro/>
     <Services/>
     <Experience/>
    </div>
  );
}

export default App;
