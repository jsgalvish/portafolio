import React from 'react';
import Board from './components/board/board';
import Deck from  './components/deck/deck'
import Card from './components/card/card';
import Header from './components/header/header';
import images from './assets/img/imagenLoader';
class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          "id": 0,
          "name": "Sebastian",
          "description": "Soy Sebastian Galvis, desarrollador con 4 años de experiencia, e trabajado con Spring Boot, Laravel, Angular, SQL y AWS, Me gusta Express, React y desarrollar para Web",
          "image": images[0].src,
          "tech": images[6].src,
          "symbol": "Github",
          "symbol_url": "https://github.com/jsgalvish",
          "info": "CV",
          "info_url": ""

        },
        {
          "id": 1,
          "name": "Solitarie",
          "description": "Solitarie React",
          "image": images[1].src,
          "tech": images[7].src,
          "symbol": "Demo",
          "symbol_url": "",
          "info": "Source Code",
          "info_url": ""
        },
        {
          "id": 2,
          "name": "Chat",
          "description": "Chat React",
          "image": images[2].src,
          "tech": images[7].src,
          "symbol": "Demo",
          "symbol_url": "",
          "info": "Source Code",
          "info_url": ""
        },
        {
          "id": 3,
          "name": "Pomodoro",
          "description": "Pomodoro React",
          "image": images[3].src,
          "tech": images[7].src,
          "symbol": "Demo",
          "symbol_url": "",
          "info": "Source Code",
          "info_url": ""
        },
        {
          "id": 4,
          "name": "Badges",
          "description": "Badges React",
          "image": images[4].src,
          "tech": images[7].src,
          "symbol": "Demo",
          "symbol_url": "",
          "info": "Source Code",
          "info_url": ""
        },
        {
          "id": 5,
          "name": "Manager",
          "description": "Manager React",
          "image": images[5].src,
          "tech": images[7].src,
          "symbol": "Demo",
          "symbol_url": "",
          "info": "Source Code",
          "info_url": ""
        }

      ],
      current: {}
    }
    this.handlerCurrent = this.handlerCurrent.bind(this);
  }

  handlerCurrent(id){
    this.setState({current: this.state.projects[id]})
  }

  componentDidMount() {
    this.handlerCurrent(0)
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Board current={ this.state.current } />
        <Deck>
          {this.state.projects.map(project =>
            <Card
              key={project.id}
              project={project}
              action={this.handlerCurrent}
            />
           )}
        </Deck>
      </div>
    )
  }
}

export default App;
