import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Greeting from './components/Header/Greeting';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header title={"BiBiStore"} />
        <Greeting greeting={"BiBi Store"}/>
        <div className="cards-container">
          <ItemListContainer greeting={"Bienvenidos"} />
        </div>
      </div>
    );
  }
}

export default App;
