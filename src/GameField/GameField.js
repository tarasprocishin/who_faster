import React from 'react';



class GameField extends React.Component {
    constructor() {
        super()
        this.state = {
            data: {}
        }
        
    }

// async componentDidMount() {
//         let date = await fetch(URL + '/game-settings');
//         let json = await date.json();

//         this.setState({ date: json})
//     }


  

    render() {

        // console.log(this.state.date)
        return(
            <h1>GameField</h1>
        )
    }
 
}


export default GameField;