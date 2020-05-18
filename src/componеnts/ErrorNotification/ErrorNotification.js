/* eslint-disable react/prop-types */
import React from 'react';
import styles from './ErrorNotification.module.css';

const ErrorNotification = ({ text }) => (
  <h1 className={styles.erro}>
    WHOOPS, SOMETHING WENT WRONG! <br />
    {text}
  </h1>
);

export default ErrorNotification;
