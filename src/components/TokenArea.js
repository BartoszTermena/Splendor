import React, { Component } from 'react';
import TakenTokens from './TakenTokens';

const Api = '../api.json';

export default class TokenArea extends Component {
  state = {
    tokens: [
    {
      name: "diamant",
      value: 3
    },
    {
      name: "emeraude",
      value: 2
    },
    {
      name: "gold",
      value: 4
    },
    {
      name: "onyx",
      value: 1
    },
    {
      name: "rubis",
      value: 2
    },
    {
      name: "saphir",
      value: 3
    }
  ],
  taken_tokens : []
  }
  handleAdd = (name) => {
    const { tokens } = this.state;
    const clickedToken = tokens.find(token => token.name === name);
    clickedToken.value--;
    const clickedTokenIndex = tokens.indexOf(clickedToken);
    const newTokens = [
      ...tokens.slice(0, clickedTokenIndex),
      clickedToken,
      ...tokens.slice(clickedTokenIndex + 1)
    ];

    this.setState({tokens: newTokens,
      taken_tokens: clickedToken});
    
    };
  
  render() {
    const token = this.state.tokens;
    const tokenList = token.map(t => {
      return (
      <div className="col s-2" value={t.name} onClick={() => this.handleAdd(t.name, t.value)}>
        <img className="responsive-img tokens higlight" src={window.location.origin + `/tokens/${t.name}.png`}/>
        <i className="bottom-left">{t.value}</i>
        
        </div>
        
      )
    })

    return (
    <div>
        <div className="token_area">
        {tokenList}
        </div>
        <div className="user_tokens">
        <TakenTokens  taken_tokens={this.state.taken_tokens}/>
    </div>
    </div>

    )
  }
}
