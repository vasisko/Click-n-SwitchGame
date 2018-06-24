import React, {Component} from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Scoreboard from "./components/Scoreboard";
import HowTo from "./components/HowTo";
import gamecards from "./gamecards.json";
import "./App.css";

class App extends Component {
  state = {
    gamecards,
    score: 0,
    topscore: 0,
    clickedCards: []
  };

  gameOver = () => {
    //score exceeds topscore, set topscore to that value
  
    if (this.state.score > this.state.topscore) {
        this.setState({topscore: this.state.score});
     };
    //set score to zero  
    this.setState({score: 0});
    //refresh gamecard:
     // clear clickCards array
     this.setState({ clickedCards:[] });
  };

 
handleClick = id => {
//make an array, store clicked cards there 
//for every click, compare card id to array -- if matched, it is second click, game over

  // check clickedCards array first to see if card has been clicked and is in array
  if (this.state.clickedCards.indexOf(id) === -1) {
    // add card to array
    this.setState({clickedCards: this.state.clickedCards.concat(id)});
    this.handleScore();
  } 
  // if card had already been clicked, 2nd click ends game ....call gameOver()
  else { 
   this.gameOver();
  }
};
handleScore = () => {
  // update score
  const updatedScore = this.state.score +1;
  this.setState({score: updatedScore});
  this.handleShuffle();
}  

//Fisher-Yates shuffle
 
handleShuffle = () => {
  var i = 0
    , j = 0
    , temp = null
    , testing = this.state.gamecards

  for (i = this.state.gamecards.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = this.state.gamecards[i]
    testing[i] = this.state.gamecards[j]
    testing[j] = temp
  }
  this.setState({ gamecards });
};
 

  render() {
    return (
      
    <Wrapper>

      <Title>Click It!</Title>
      <HowTo>Instructions:  <br /> Click on a card.  If you have not clicked on that card yet, you will earn one point.  Every time you click on a card, the cards will switch positions. If you click on the same card twice, the game is over.
      </HowTo>

      <Scoreboard 
        score = {this.state.score}
        topscore = {this.state.topscore}
      />
      

      
      {gamecards.map(gamecard =>
        <GameCard 
          handleClick={this.handleClick}
          id={gamecard.id}
          key={gamecard.id}
          name={gamecard.name}
          image={gamecard.image}
      />)};

      
    </Wrapper>)};

};

export default App;


//     
  //     if (gamecard(i).id === id){
  //       gamecard(i).clicked++;
  //       //clicked just once -- good click, increment score, keep playing
  //       if (gamecard(i).clicked <2) {
  //         this.setState({score: this.state.score + 1});
          
  //       }
  //       // clicked card for second time -- bad click, game over, reset/restart
  //       else {this.gameOver()}; 
       
  //     } 
  //     return true;
  //     this.setState({ gamecards });

  //   // Shuffle cards after each click
  //   this.handleShuffle();

  //   });
  //};

  // //Shuffle cards after onclick