import React from 'react';
import ReactDOM from 'react-dom';

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
        <p>same text</p>,
        this.el,
      );
    }
  }

  export default Modal;