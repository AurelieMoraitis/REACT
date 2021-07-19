import React, {useState} from "react";
import {GlobalStyle} from "./styles/GlobalStyle";
import Header from "./components/header";
import Main from "./components/main";
import Side from "./components/side";
import Footer from "./components/footer";

function App() {

  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log("open/close the side");
        setIsOpen(!isOpen);
    }
  return (
    <div className="App">
      <GlobalStyle />
      <Header toggleMenu={toggleMenu}/>
      <Side isOpen={isOpen} toggleMenu={toggleMenu}/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
