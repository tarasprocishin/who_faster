import React from 'react';

function Counter(props) {
    let { pointsComputer, pointsPlayer, pointForWinn } = props;

    return(
        <div className="counter">
            <p>The points for winn: {pointForWinn}</p>
            <p>The points of player: {pointsPlayer}</p>
            <p>The points of computer: {pointsComputer}</p>
        </div>
    )

}

export default Counter;