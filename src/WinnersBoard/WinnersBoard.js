import React from 'react';
import ItemWinner from './components/ItemWinner'

function WinnersBoard(props) {
    let { winners } = props;
    console.log(winners)
    return(
        <div>
            <h1>WinnersBoard</h1>
            {winners.winner}
        { winners.map(winner => (
            <ItemWinner
                key={winner.id}
                winner={winner.winner}
                date={winner.date}
            />
        ))}
           
        </div>
    )

}

export default WinnersBoard;