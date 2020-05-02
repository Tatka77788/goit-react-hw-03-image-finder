/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ data, onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li className={styles.ImageGalleryItem} onClick={onClick}>
      <img
        src={data.webformatURL}
        alt={data.tags}
        id={data.id}
        className={styles.ImageGalleryItem_image}
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  data: PropTypes.shape({
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
