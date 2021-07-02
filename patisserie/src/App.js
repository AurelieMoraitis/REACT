import React from "react";
import {GlobalStyle} from "./styles/GlobalStyle";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
