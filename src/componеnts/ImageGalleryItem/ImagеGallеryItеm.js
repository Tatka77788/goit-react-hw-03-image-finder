/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ gallery, onOpen }) => {
  return (
    <li className={styles.ImageGalleryItem} role="presentation">
      <img
        src={gallery.webformatURL}
        alt={gallery.tags}
        id={gallery.id}
        onClick={() => onOpen(gallery.largeImageURL)}
        className={styles.ImageGalleryItem_image}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  gallery: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onOpen: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
