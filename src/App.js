import React, {Component} from 'react';
import Header from './Header';
import Board from './Board';
import DealCards from './utilities/DealCards'
import './App.css';

import 'font-awesome/css/font-awesome.css';

const getInitialState = () =>{
  const cards = DealCards();
  return{
    cards,
    selectedCards: [],
    attemps: 0 
  }
}

class App extends Component{
  constructor(props){
    super(props);
    this.state = getInitialState();
  }
  render(){
    const {cards} = this.state;
    return (
      <div className="App"  >
        <Header 
        attemps={this.state.attemps}
        restartGame={()=>this.restartGame()}
        />
        <Board 
          cards={cards}
          selectCard={(card)=> this.selectCard(card)}
        />
      </div>
    );
  }
  
  selectCard(cardClicked){
    if(cardClicked.flipped || 
    this.state.selectedCards.length === 2){
      return
    }
    cardClicked.flipped = true
    
    const coupleOfCards = [...this.state.selectedCards, cardClicked]
    this.setState({selectedCards: coupleOfCards})

    if(coupleOfCards.length === 2){
      const [cardOne, cardTwo] = coupleOfCards
      if(cardOne.icon === cardTwo.icon){
        coupleOfCards.map((card)=>{return card.isMatch = true})
        this.setState({selectedCards: []})
      }else{
        setTimeout(() => {
          coupleOfCards.map((card)=>{return card.flipped = false})
          this.setState({selectedCards: []})
        }, 1000);
      }
      let attempsNumber = this.state.attemps
      this.setState({attemps: attempsNumber+1})
      console.log('intentos', this.state.attemps) 
    }
  }
  restartGame(){
    const cards = DealCards()
    this.setState({cards, attemps: 0})
  }
}  

export default App;
