import React, { Component } from "react";
import Flipcard from "@kennethormandy/react-flipcard";
import "./Card.css";

import "@kennethormandy/react-flipcard/dist/Flipcard.css";

export default class Card extends Component {
  render() {
    const {icon, flipped, selectCard} = this.props;
    
    return (
      <div className="card" onClick={() => selectCard()}>
        <Flipcard className="flip" flipped={flipped}>
          <div className="center">
            <i className="fa fa-heart fa-5x"></i>
          </div>
          <div className="show">
            <i className={`fa ${icon} fa-5x`}></i>
          </div>
        </Flipcard>
      </div>
    );
  }
}
