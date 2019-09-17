import React from 'react';
import ItemWinner from './components/ItemWinner'
import './WinnersBoard.css';

function WinnersBoard(props) {
    let { winners } = props;
    return (
        <div className="winners_board">
            <h1>WinnersBoard</h1>
            {winners.map(winner => (
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