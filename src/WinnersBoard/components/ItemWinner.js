import React from 'react';
import './ItemWinner.css';

function ItemWinner(props) {
    let { winner, date } = props;
    return(
        <p>{winner} : {date}</p>
    )

}

export default ItemWinner;