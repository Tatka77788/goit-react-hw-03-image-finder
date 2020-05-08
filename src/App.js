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
    gallery: [],
    page: 0,
    query: '',
    isLoading: false,
    isModal: false,
    imgUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      this.getDataByParams({ query, page });
    }
  }

  getDataByParams = ({ query, page }) => {
    const { gallery } = this.state;
    this.setState({ isLoading: true });
    return getImages({ page, query })
      .then(({ data }) =>
        this.setState({ gallery: [...gallery, ...data.hits] }),
      )
      .catch(error => {
        // eslint-disable-next-line react/no-unused-state
        this.setState({ error });
        console.log(error);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleSearch = e => {
    this.setState({ gallery: [], query: e, page: 1 });
  };

  handleLoadMore = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  openLargeImage = largeImgUrl => {
    this.setState({ imgUrl: largeImgUrl });
    this.closeModal();
  };

  closeModal = () => {
    this.setState(state => ({ isModal: !state.isModal }));
  };

  render() {
    const { gallery, isModal, isLoading, imgUrl } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearch} />
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
