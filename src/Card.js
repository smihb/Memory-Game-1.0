import React, {Component} from 'react';
import Flipcard from '@kennethormandy/react-flipcard'
import './Card.css';

import '@kennethormandy/react-flipcard/dist/Flipcard.css'


export default class Card extends Component{
    constructor(){
        super()
        this.state = {
            flipped: false
        }
    }
    limitarDos(parejaSeleccionada){
        
        if(parejaSeleccionada.length === 2){
            
            const [cartaUno, CartaDos] = parejaSeleccionada

            if(cartaUno.icon ===CartaDos.icon ){
                console.log('son iguales')
            }

            setTimeout(()=>{
                
                this.setState({ flipped: false })
        
            }, 1000) 
        }
    }

    componentDidUpdate(){
    }

    render(){
        const {icon, seleccionarCarta, estaSiendoComparada, parejaSeleccionada, fueAdivinada,
        girada } = this.props;

        this.limitarDos(parejaSeleccionada)

        const girarCarta = () =>{
            if(this.state.flipped){
                return
            }
            this.setState({ flipped: !this.state.flipped })

            seleccionarCarta()
        }
        
        return(
            <div className="card" onClick={()=> girarCarta()}>
                <Flipcard className="flip" flipped={false}>
                    <div className="center">
                        <i className="fa fa-heart fa-5x"></i>
                    </div>
                    <div className="show">
                        <i className={`fa ${icon} fa-5x`} ></i>
                    </div> 
                </Flipcard>
            </div>
        );
    }
}