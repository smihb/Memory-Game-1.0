import React, {Component} from 'react';
import './Header.css'

export default class Header extends Component {
    render(){
        return(
            <header>
                <div className="title">React-Memory</div>
                <div>
                    <button className="restart-button">
                        Restart
                    </button>
                </div>
                <div className="title">
                    Attemps
                </div>
            </header>
        );
    }
}