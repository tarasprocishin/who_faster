import React from 'react';

function Td(props) {
    let {chooseTd, id, usedTds} = props;

    let  background = (usedTds.indexOf(id) !== -1) ? {background: 'red'} : null;
    

    return(
        <>
        <td id={id} style={background}>
            { props.children }
        </td>
        </>
    )

}

export default Td;