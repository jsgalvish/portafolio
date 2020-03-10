import React from 'react';
import './board.css'

class Board extends React.Component {

  render() {
    return(
      <div className="board">
        <div className="card">
          <div className="picture">
            <img src={this.props.current.image} alt={this.props.current.name}/>
          </div>
          <div className="content">
            <div className="symbol">
              <a href={this.props.current.symbol_url} target="_blank" rel="noopener noreferrer">
                <p>{this.props.current.symbol}</p>
              </a>
            </div>
        </div>
        </div>
        <div className="info">
          <div className="info-flex">
            <pre> {this.props.current.description}</pre>
            <a href={this.props.current.info_url} target="_blank" rel="noopener noreferrer">
              {this.props.current.info}
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Board;
