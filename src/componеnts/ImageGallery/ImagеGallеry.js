import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImagеGallеryItеm';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ data, onClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {data.length > 0 &&
        data.map(element => {
          return (
            <ImageGalleryItem
              data={element}
              key={element.id}
              onClick={onClick}
            />
          );
        })}
    </ul>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ImageGallery;
