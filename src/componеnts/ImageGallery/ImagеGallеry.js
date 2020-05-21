/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImagеGallеryItеm';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ gallery, onOpen }) => {
  return (
    <ul className={styles.ImageGallery}>
      {gallery.map(el => (
        <ImageGalleryItem
          key={el.id}
          gallery={el}
          onOpen={onOpen}
          largeImageURL={el.largeImageURL}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onOpen: PropTypes.func.isRequired,
};
export default ImageGallery;
