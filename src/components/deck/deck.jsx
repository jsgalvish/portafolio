import React from 'react';
import './deck.css'

class Deck extends React.Component{

  render() {
    return(
      <div className="deck">
        {this.props.children}
      </div>
    )
  }
}

export default Deck;
