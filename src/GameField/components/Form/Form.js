import React from 'react';

function Form( props ) {
    let { complexity, handleChange } = props;

    // let {}
    // console.log(easyMode, normalMode, hardMode )
    return(
        <form>
            <select value={complexity}  onChange={(event) => {handleChange(event)}} >
                <option value="select"   hidden>Please Choose...</option>
                <option value="easy">Easy Mode</option>
                <option value="normal">Normal Mode</option>
                <option value="hard">Hard Mode</option>
            </select>
        </form>
    )

}

export default Form;
