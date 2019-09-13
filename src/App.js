import React from 'react';

import GameField from './GameField/GameField';
import LeaderBoard from './LeaderBoard/LeaderBoard';
import getData from './servises/fetchData';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      winners: {},
      gameSeting: {}
    }
  }

  async componentDidMount() {
    let gameSeting = await getData('/game-settings');
    let getWinner = await getData('/winners');
    this.setState({ gameSeting: gameSeting, winners: getWinner })
  }

  render(){
   let { winners, gameSeting } = this.state;
   console.log(winners);
    return (
      <div className="App">
          <GameField />
          <LeaderBoard />
      </div>
    );
    
  }
}

export default App;
