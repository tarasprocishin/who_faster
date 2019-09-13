import React from 'react';

function ItemWinner(props) {
    let { winner, date } = props;
    return(
        <p>{winner} : {date}</p>
    )

}

export default ItemWinner;