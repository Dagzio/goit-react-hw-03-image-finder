import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';
import { Gallery, GalleryList } from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
  return (
    <Gallery id="gallery">
      <GalleryList>
        {images.map(({ webformatURL, tags }) => {
          return (
            <ImageGalleryItem
              webformatURL={webformatURL}
              tags={tags}
              key={nanoid()}
            />
          );
        })}
      </GalleryList>
    </Gallery>
  );
};

export default ImageGallery;
