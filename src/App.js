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
    parejaSeleccionada: [],
    estaComparando: false,
    girada: true
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
      <Header/>
      <Board cards={cards} 
      parejaSeleccionada={this.state.parejaSeleccionada}
      seleccionarCarta={(carta) => this.seleccionarCarta(carta)}
      estaComparando={this.state.estaComparando}
      girada={this.state.girada} />
    </div>
    );
  }

  seleccionarCarta(carta){
    if(this.state.estaComparando || 
      this.state.parejaSeleccionada.indexOf(carta)>-1 ||
      carta.isMatch){
        return;
    }
    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta]
    this.setState({
      parejaSeleccionada
    })
    if(parejaSeleccionada.length === 2){
      this.compararPareja(parejaSeleccionada)
    }
  }

  compararPareja(parejaSeleccionada){
    this.setState({estaComparando: true});

    const [primeraCarta, segundaCarta] = parejaSeleccionada
    let baraja = this.state.cards

    
    if(primeraCarta.icon === segundaCarta.icon){
      baraja = baraja.map((carta)=>{
        if(carta.icon !== primeraCarta.icon){
          return carta
        }
        return{...carta, isMatch: true}
      })
    }
    setTimeout(()=>{
      this.setState({
        parejaSeleccionada: [],
        cards: baraja,
        estaComparando:false
      })
    }, 1000)
    console.log(parejaSeleccionada)
  }
}

export default App;
