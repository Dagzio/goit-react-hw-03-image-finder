import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';
import { Gallery, GalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, showModal }) => {
  return (
    <Gallery>
      <GalleryList>
        {images.map(({ webformatURL, tags, largeImageURL }) => {
          return (
            <ImageGalleryItem
              webformatURL={webformatURL}
              tags={tags}
              key={nanoid()}
              showModal={showModal}
              largeImageURL={largeImageURL}
            />
          );
        })}
      </GalleryList>
    </Gallery>
  );
};


ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  })),
  showModal: PropTypes.func,
};

export default ImageGallery;


