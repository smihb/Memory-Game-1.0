import React, {Component} from 'react';
import Card from './Card';
import './Board.css';

export default class Board extends Component{
    render(){
        const {cards, selectCard} = this.props

        return (
            <div className="board" >
                {
                    cards.map((card, index) => {
                        return(
                            <Card 
                            key={index} 
                            icon={card.icon}
                            flipped={card.flipped}
                            selectCard={() => selectCard(card)}
                            />
                        )
                    })
                }
            </div>
        );
    }
}