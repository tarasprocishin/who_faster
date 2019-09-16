import React from 'react';

function Td(props) {
    let {chooseTd, id, style} = props;
    
   let  background = (chooseTd=== +id)? {background: 'red'} : null;
    
    console.log(style)
    return(
        <>
        <td style={background}>
        { props.children }
        </td>
   
        {/* <td id={id}  style={background} onClick={(event) => changeTd(event)}></td> */}
        </>
    )

}

export default Td;