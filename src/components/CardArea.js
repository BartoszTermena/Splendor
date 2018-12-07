import React, { Component } from 'react';
import Situation from './situation.png'


export default class CardArea extends Component {
  render() {
    return (
    <div className="card_area">
        <div className="col s-2">
        <img className="responsive-img cards" src={Situation} />
    </div>
    </div>
    )
  }
}
