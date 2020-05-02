import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { render } from "@testing-library/react";
import styles from './SearchForm.module.css';

const initState = {
  inputValue: '',
};
export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    inputValue: ' ',
  };

  handleOnChange = e => {
    const { value } = e.target;
    this.setState({ inputValue: value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { inputValue } = this.state;
    onSubmit(inputValue);
    this.setState({ ...initState });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleOnSubmit}>
          <button type="submit" className={styles.SearchForm_button}>
            <span className={styles.SearchForm_button_label}>Search</span>
          </button>

          <input
            onChange={this.handleOnChange}
            value={inputValue}
            className={styles.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
