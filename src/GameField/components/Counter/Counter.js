import React from 'react';
import './Counter.css';

function Counter(props) {
    let { pointsComputer, pointsPlayer, pointForWinn } = props;

    return(
        <div className="game_field__counter">
            <p className="counter__points_for_win">The points for winn: {pointForWinn}</p>
            <div className="conter__curr_points">
                <p>The points of player: {pointsPlayer}</p>
                <p>The points of computer: {pointsComputer}</p>
            </div>

        </div>
    )

}

export default Counter;