import React from 'react';
import './card.css'

class Card extends React.Component{
  render() {
    return(
      <div className="card" onClick={() => this.props.action(this.props.project.id)}>
        <div className="picture">
          <img src={this.props.project.image} alt={this.props.project.name}/>
        </div>
        <div className="content">
          <div className="symbol">
            <img src={this.props.project.tech} alt={this.props.project.name}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
