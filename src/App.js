import React from "react";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
 
export default class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <Main />
      </div>
    )
  }
}