import { Component } from 'react';
import { Backdrop, ModalWindow } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlePressKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressKey);
  }

  handlePressKey = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = ({target, currentTarget}) => {
    if (target === currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <Backdrop
        onClick={this.handleBackdropClick || this.handlePressKey}
      >
        <ModalWindow>
          <img src={this.props.modalImg} alt="" />
        </ModalWindow>
      </Backdrop>
    );
  }
}
