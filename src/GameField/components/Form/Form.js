import React from 'react';

function Form( props ) {
    let {
        complexity,
        handleChangeMode,
        playerName,
        handleChangeName,
        handleSubmit,
        play } = props;
        
        const statePlay = play ? "Restar game" : "play";

    return(
        <form  onSubmit={(event) => {handleSubmit(event)}}>
            <select value={complexity}  onChange={(event) => {handleChangeMode(event)}} >
                <option value=""   hidden>Please Choose...</option>
                <option value="easy">Easy Mode</option>
                <option value="normal">Normal Mode</option>
                <option value="hard">Hard Mode</option>
            </select>
            <input type='text' value={playerName} onChange={(event) => {handleChangeName(event)}} placeholder="Enter your name"></input>
           <input type="submit" value={statePlay}/>
        </form>
    )

}

export default Form;
