import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

let modalRoot = document.getElementById('modal');

class Modal extends React.Component {
    constructor(props) {
      super(props);
      this.el = document.createElement('div');
    }
  
    componentDidMount() {
      modalRoot.appendChild(this.el);
    }
  
    componentWillUnmount() {
      modalRoot.removeChild(this.el);
    }
    
    render() {

      return ReactDOM.createPortal(
        <div className="modal">
           <div className="modal__alert">
               {this.props.winner} win!
           </div>
           <button form="inputSettings" >Restar game</button> 
       </div>,
      this.el,
      );
    }
  }

  export default Modal;