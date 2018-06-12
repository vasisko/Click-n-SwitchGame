import React, {Component} from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import gamecards from "./gamecards.json";
import "./App.css";

class App extends Component {
  state = {
    gamecards
  };

  removeCard = id => {
    console.log(id);
    const gamecards = this.state.gamecards.filter(gamecard => gamecard.id !== id);
    this.setState({ gamecards });
  };

  render() {
    return (
      <Wrapper>
      <h1 className="title">Click a Card!</h1>
       {gamecards.map(gamecard =>
      <GameCard 
        removeCard={this.removeCard}
        id={gamecard.id}
        key={gamecard.id}
        name={gamecard.name}
        image={gamecard.image}
      />)};
    </Wrapper>)}
    
};

export default App;
