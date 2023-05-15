import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem =({ largeImageURL, showModal, webformatURL, tags }) =>  {
 
    return (
      <GalleryItem>
        <GalleryItemImage
          src={webformatURL}
          alt={tags}
          loading="lazy"
          height="320"
          onClick={() => showModal(largeImageURL)}
        />
      </GalleryItem>
    );
  }


  ImageGalleryItem.propTypes = {
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      showModal: PropTypes.func,
  };
  


export default ImageGalleryItem;