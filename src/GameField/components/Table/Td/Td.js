import React from 'react';

function Td(props) {
    let {chooseTd, id, useTds, addPoint, cliked } = props;
    let  background = (useTds.indexOf(id) !== -1) ? {background: '#00ccff'} : null;
    let usedTds = useTds.slice(0, useTds.length - 1);


    if(usedTds.indexOf(id) !== -1 ){
        background = {
            background: 'red'
        }
    }
    if(cliked.indexOf(id) !== -1)  {
        background = {
            background: 'green'
        }
    }
    

    return(
        <>
        <td id={id} style={background} onClick={(event) => {addPoint(event)}}>
            { props.children }
        </td>
        </>
    )

}

export default Td;