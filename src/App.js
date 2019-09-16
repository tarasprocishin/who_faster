import React from 'react';

import GameField from './GameField/GameField';
import WinnersBoard from './WinnersBoard/WinnersBoard';
import {getData} from './servises/fetchData';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      winners: [],
      gameModes: {},
      isLoaded: false
    }
  }

  async componentDidMount() {
    let getGameModes = await getData('/game-settings');
    let getWinner = await getData('/winners');
    this.setState({
      gameModes: getGameModes, 
      winners: getWinner,
      isLoaded: true
     })
  }

  render(){
   let { winners, gameModes, isLoaded } = this.state;

  if(isLoaded){
    return (
      <div className="App">
          <GameField
            gameModes={gameModes}
          />
          <WinnersBoard
            winners={winners} 
          />
      </div>
    );
  } 
    return(
      <div>
         <h1>Loading... </h1>
      </div>
    )

    
  }
}

export default App;
