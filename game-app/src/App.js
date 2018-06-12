import React, {Component} from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import gamecards from "./gamecards.json";
import "./App.css";

class App extends Component {
  state = {
    gamecards
  };

  beenClicked = id => {
    console.log(id);
    
    // cardsClicked = 0 to start

    //GameCard detects onclick, identifies the card id and className = clicked
    //Increment the cards beenClicked value +1
    //if beenClicked <2:  Change score = cardsClicked = +1

    
    // else clicked card more than once --  game over:
    //  cardsClicked = 0, beenClicked = 0
    
    this.setState({ gamecards });
  };

  render() {
    return (
      <Title>Click It!</Title>,
      <Wrapper>
      <h1 className="title">Click a Card!</h1>;
      <h2>Score:  </h2>;
      
       {gamecards.map(gamecard =>
      <GameCard 
        beenClicked={this.beenClicked}
        id={gamecard.id}
        key={gamecard.id}
        name={gamecard.name}
        image={gamecard.image}
      />)};
    </Wrapper>)}
    
};

export default App;
