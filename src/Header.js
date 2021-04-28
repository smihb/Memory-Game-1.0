import React, {Component} from 'react';
import './Header.css'

export default class Header extends Component {
    render(){
        const {attemps, restartGame} = this.props
        return(
            <header>
                <div className="title">React-Memory</div>
                <div>
                    <button className="restart-button" onClick={()=>restartGame()}>
                        Restart
                    </button>
                </div>
                <div className="title">
                    Attemps: {attemps}
                </div>
            </header>
        );
    }
}