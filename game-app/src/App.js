import React, {Component} from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Scoreboard from "./components/Scoreboard";
import gamecards from "./gamecards.json";
import "./App.css";

let score, topscore;
let clickCount = 0;

class App extends Component {
  state = {
    gamecards,
    score: 0,
    topscore: 0
  };

  gameOver = () => {
    //score exceeds topscore, set topscore to that value
    if (this.state.score > this.state.topscore) {
        this.setState({topscore: this.state.score});
     }
    //set score to zero, refresh gamecards
        this.setState({score: 0});
     return true;
  };

  handleClick = id => {
    console.log(id);
    if (this.gamecard.clicked.find(function(card){
      this.gamecard.clicked++;
    }
    if (gamecard.clicked<2 ? score++ : this.gameOver());
   
    //const newGameCard = this.state.gamecards;

    this.setState({ gamecards });
  };

  //Shuffle cards after onclick
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };
  //end of card shuffle
  
  gamecards = shuffle(gamecards);
  console.log(gamecards);
 




  render() {
    return (
      
      <Wrapper>
      <Title>Click It!</Title>
      <Scoreboard>
      <h2>Score: {this.state.score} </h2>;
      <h2>Top Score: {this.state.topscore}</h2>;
      </Scoreboard>

      {gamecards.map(gamecard =>
        <GameCard 
          clickCount={this.handleClick}
          id={gamecard.id}
          key={gamecard.id}
          name={gamecard.name}
          image={gamecard.image}
      />)};

    </Wrapper>)};

};

export default App;
