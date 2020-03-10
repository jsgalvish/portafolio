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
          "description": "I'm Sebastian Galvis, Developer with 4 years of experience, I worked with Spring Boot, Laravel, Angular, SQL and AWS, I like Express, React and develop for Web",
          "image": images[0].src,
          "tech": images[6].src,
          "symbol": "Github",
          "symbol_url": "https://github.com/jsgalvish",
          "info": "CV",
          "info_url": "https://drive.google.com/file/d/1rSvkRtMOGO3cV_fLB85_3tvuO2WP5qyh/view?usp=sharing"

        },
        {
          "id": 1,
          "name": "Solitarie",
          "description": "Solitaire Card Game made with React, using Redux and vanilla javascript",
          "image": images[1].src,
          "tech": images[7].src,
          "symbol": "Demo",
          "symbol_url": "https://jsgalvish.github.io/react-solitaire/",
          "info": "Source Code",
          "info_url": "https://github.com/jsgalvish/react-solitaire"
        },
        {
          "id": 2,
          "name": "Chat",
          "description": "Real time chat built in React, using socket.io and express and deployed in heroku (just wait a little when demo is starting)",
          "image": images[2].src,
          "tech": images[7].src,
          "symbol": "Demo",
          "symbol_url": "https://react-chat-jsgalvish.herokuapp.com/",
          "info": "Source Code",
          "info_url": "https://github.com/jsgalvish/react-chat"
        },
        {
          "id": 3,
          "name": "Pomodoro",
          "description": "Pomodoro Timer made 100% in React, a good time management method",
          "image": images[3].src,
          "tech": images[7].src,
          "symbol": "Demo",
          "symbol_url": "https://jsgalvish.github.io/react-pomodoro/",
          "info": "Source Code",
          "info_url": "https://github.com/jsgalvish/react-pomodoro"
        },
        {
          "id": 4,
          "name": "Weather",
          "description": "Weather widget build with react, using api.openweathermap, weather-icons and a little of bootstrap ",
          "image": images[4].src,
          "tech": images[7].src,
          "symbol": "Demo",
          "symbol_url": "https://jsgalvish.github.io/react-weather/",
          "info": "Source Code",
          "info_url": "https://github.com/jsgalvish/react-weather"
        },
        {
          "id": 5,
          "name": "Map",
          "description": "Mapbox implementation built in React and react-map-gl, using custom markers and props in Bogota City ",
          "image": images[5].src,
          "tech": images[7].src,
          "symbol": "Demo",
          "symbol_url": "https://jsgalvish.github.io/react-map/",
          "info": "Source Code",
          "info_url": "https://github.com/jsgalvish/react-map"
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
