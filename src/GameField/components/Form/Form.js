import React from 'react';

function Form( props ) {
    let { complexity, handleChangeMode, playerName, handleChangeName } = props;

    // let {}
    // console.log(easyMode, normalMode, hardMode )
    return(
        <form>
            <select value={complexity}  onChange={(event) => {handleChangeMode(event)}} >
                <option value="select"   hidden>Please Choose...</option>
                <option value="easy">Easy Mode</option>
                <option value="normal">Normal Mode</option>
                <option value="hard">Hard Mode</option>
            </select>
            <input type='text' value={playerName} onChange={(event) => {handleChangeName(event)}} placeholder="Enter your name"></input>
            <input type="submit" value="Play" />
        </form>
    )

}

export default Form;
