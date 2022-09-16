import React from 'react';
import SideBar from "./components/sideBar/sideBar";
import "./styles/index.css";
import Header from "./components/Header/header";
import Content from "./components/Contetnt/content";

function App() {
  return (
    <div>
      <div className="nav">
        <SideBar toggle={false} />

      </div>
      <div className="content">
        <Header/>
        <Content/>
      </div>
    </div>




  )

}

export default App;
