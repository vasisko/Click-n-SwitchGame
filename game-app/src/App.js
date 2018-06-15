import React, {Component} from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Scoreboard from "./components/Scoreboard";
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
    //refresh gamecards
     // foreach gamecard, set clickCount = 0
     this.state.gamecards.forEach(gamecard => {
        gamecard.clicked = 0;
     });
  };

 
handleClick = id => {
//FORGET updating gamecards.clicked --- instead make an array, store clicked cards there 
//for every click, compare card id to array -- if matched, it is second click, game over

  // check clickedCards array first to see if card has been clicked and is in array
  if (this.state.clickedCards.indexOf(id) === -1) {
    // add card to array
    this.setState({clickedCards: this.state.clickedCards.concat(id)});
  
    // update score
    const updatedScore = this.state.score +1;
    this.setState({score: updatedScore});
    this.handleShuffle();
  } 
  // if card had already been clicked, 2nd click ends game ....call gameOver()
  else { 
   this.gameOver();
  }
};
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

  //Example of array shuffle:
  handleShuffle = () => {
    var currentIndex = this.state.gamecards.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = this.state.gamecards[currentIndex];
      this.state.gamecards[currentIndex] = this.state.gamecards[randomIndex];
      this.state.gamecards[randomIndex] = temporaryValue;
    }
  
    return gamecards;
  };
  //end of card shuffle
  
  
 

  render() {
    return (
      
    <Wrapper>

      <Title>Click It!</Title>

      <Scoreboard 
        score = {this.state.score}
        topscore = {this.state.score}
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


 //handleClick = id => {
  
    //find clicked game card in gamecards array
    // example of 'find':  var obj = objArray.find(function (obj) { return obj.id === 3; });

    // var card = this.state.gamecards.find(function (card, i) { return card.id === id; });
    // console.log(card);

    // card[i].clicked ++;
    // if ( card[i].clicked < 2 ? this.setState({score: this.state.score + 1}) : this.gameOver() );
    // this.setState({ gamecards });

    // Shuffle cards after each click
  //  this.handleShuffle();

  //   this.state.gamecards.find((o, i) => {
  //     if (o.id === id) {
  //       if(gamecards[i].clicked === 0){
  //         gamecards[i].clicked++;
  //         this.handleShuffle();
  //         return true; 
  //       } else {
  //         this.gameOver();
  //       }
  //     };
  //   });
  // };
