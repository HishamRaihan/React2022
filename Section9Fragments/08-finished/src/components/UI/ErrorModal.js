import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />
}
const ModalOverlay = props => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  )
}
const ErrorModal = (props) => {
  // should use a portal b/c it is being rendered in the place it shouldnt be rendered
  // error modals are being rendered near the card  
  return (
    // reactdom makes it compatible with the dom is the adapter for react to the browser
    <React.Fragment>
      {/* createPortal takes two args 1st is react node to be rendered */}
      {/* createPortal takes two args 2nd is a pointer to that container to where it should be rendered access to a dom element same as app.js*/}
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}

      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('overlay-root'))}
    </React.Fragment>
  );
};

export default ErrorModal;
