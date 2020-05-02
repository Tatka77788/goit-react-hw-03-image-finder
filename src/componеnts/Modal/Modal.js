/* eslint-disable react/no-deprecated */
/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  state = {};

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPressESC);
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    window.removeEventListener('keydown', this.handleKeyPressESC);
  }

  handleKeyPressESC = e => {
    const { onClick } = this.props;
    if (e.keyCode === 27) {
      onClick();
    }
  };

  render() {
    const { onClick, children } = this.props;

    return (
      <div className={styles.Overlay} onClick={onClick} role="presentation">
        <div className={styles.Modal}>{children}</div>
      </div>
    );
  }
}
