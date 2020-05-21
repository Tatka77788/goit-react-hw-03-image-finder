/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Button from './componеnts/Button/Button';
import ImageGallery from './componеnts/ImageGallery/ImagеGallеry';
import Loader from './componеnts/Loader/Loader';
import Modal from './componеnts/Modal/Modal';
import Searchbar from './componеnts/Searchbar/Searchbar';
import getImages from './componеnts/Utils/ImagеApi';
import styles from './styles.module.css';
import ErrorNotification from './componеnts/ErrorNotification/ErrorNotification';

export default class App extends Component {
  state = {
    gallery: [],
    page: 0,
    query: '',
    isLoading: false,
    isModal: false,
    imgUrl: '',
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      this.getDataByParams({ query, page });
    }
    /* if (!this.state.loading) {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });}
    */
  }

  getDataByParams = ({ query, page }) => {
    const { gallery } = this.state;
    const scrollHeight = page > 1 ? document.documentElement.scrollHeight : 0;
    this.setState({ isLoading: true });
    return getImages({ page, query })
      .then(({ data }) =>
        this.setState({ gallery: [...gallery, ...data.hits] }),
      )
      .catch(error => {
        // eslint-disable-next-line react/no-unused-state
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  handleSearch = e => {
    this.setState({ gallery: [], query: e, page: 1 });
  };

  handleLoadMore = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  };

  openLargeImage = largeImgUrl => {
    this.setState({ imgUrl: largeImgUrl });
    this.closeModal();
  };

  closeModal = () => {
    this.setState(state => ({ isModal: !state.isModal }));
  };

  render() {
    const { gallery, error, isModal, isLoading, imgUrl } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearch} />
        {error && <ErrorNotification text={error.message} />}
        {gallery.length > 0 && (
          <ImageGallery gallery={gallery} onOpen={this.openLargeImage} />
        )}
        {isLoading && <Loader />}
        {gallery.length > 0 && <Button onClick={this.handleLoadMore} />}
        {isModal && <Modal onClose={this.closeModal} imgUrl={imgUrl} />}
      </div>
    );
  }
}
