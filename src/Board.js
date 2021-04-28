import React, {Component} from 'react';
import Card from './Card';
import './Board.css';

export default class Board extends Component{
    render(){
        const {cards} = this.props
        return (
            <div className="board" >
                {
                    cards.map((card, index) => {
                        const estaSiendoComparada = this.props.parejaSeleccionada.indexOf(card)>-1
                        
                        return(
                            <Card 
                            key={index} 
                            icon={card.icon} 
                            estaSiendoComparada={estaSiendoComparada}
                            seleccionarCarta={()=>this.props.seleccionarCarta(card)}
                            fueAdivinada={card.isMatch} 

                            girada={this.props.girada}
                            estaComparando={this.props.estaComparando}
                            parejaSeleccionada={this.props.parejaSeleccionada} />
                        )
                    })
                }
            </div>
        );
    }
}