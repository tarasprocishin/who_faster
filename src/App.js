import React from 'react';

import GameField from './GameField/GameField';
import WinnersBoard from './LeaderBoard/WinnersBoard';
import getData from './servises/fetchData';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      winners: {},
      gameSeting: {},
      isLoaded: false
    }
  }

  async componentDidMount() {
    let gameSeting = await getData('/game-settings');
    let getWinner = await getData('/winners');
    this.setState({
      gameSeting: gameSeting, 
      winners: getWinner,
      isLoaded: true
     })
  }

  render(){
   let { winners, gameSeting, isLoaded } = this.state;

  if(isLoaded){
    return (
      <div className="App">
          <GameField />
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
