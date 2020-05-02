/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import Button from './componеnts/Button/Button';
import ImageGallery from './componеnts/ImageGallery/ImagеGallеry';
import Loader from './componеnts/Loader/Loader';
import Modal from './componеnts/Modal/Modal';
import Searchbar from './componеnts/Searchbar/Searchbar';
import getImages from './componеnts/Utils/ImagеApi';
import styles from './styles.module.css';

export default class App extends Component {
  state = {
    allData: [],
    page: 0,
    query: '',
    isLoading: false,
    isModal: false,
    idLargeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      if (query !== '') {
        this.getDataByParams({ query, page });
      }
    }
  }

  getDataByParams = ({ query, page }) => {
    const { allData } = this.state;
    const scrollHeight = page > 1 ? document.documentElement.scrollHeight : 0;
    this.setState({ isLoading: true });
    return (
      getImages({ page, query })
        .then(({ data }) =>
          this.setState({ allData: [...allData, ...data.hits] }),
        )
        // .catch(error => alert(error));
        .finally(() => {
          this.setState({ isLoading: false });
          window.scrollTo({
            top: scrollHeight,
            behavior: 'smooth',
          });
        })
    );
  };

  handleOnSubmit = e => {
    this.setState({ allData: [], query: e, page: 1 });
  };

  handleLoadMore = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  };

  openModal = e => {
    this.setState({ isModal: true, idLargeImageURL: e.target.id });
  };

  closeModal = () => {
    this.setState({ isModal: false });
  };

  getLargeImageURL = () => {
    const { allData, isModal, idLargeImageURL } = this.state;
    const element = allData.find(i => i.id === Number(idLargeImageURL));
    return isModal ? element.largeImageURL : '';
  };

  render() {
    const { allData, isModal, isLoading } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleOnSubmit} />
        <ImageGallery data={allData} onClick={this.openModal} />
        {isLoading && <Loader />}
        {allData.length > 0 && <Button onClick={this.handleLoadMore} />}
        {isModal && (
          <Modal onClick={this.closeModal}>
            <img src={this.getLargeImageURL()} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}
