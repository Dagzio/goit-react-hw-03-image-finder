import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onLoadMore }) => {
  const onLoadMoreBtn = () => {
    onLoadMore();
  };
  return (
    <div>
      <ul>
        {images.map(({ webformatURL, tags, id }) => {
          return (
            <ImageGalleryItem
              webformatURL={webformatURL}
              tags={tags}
              key={id}
            />
          );
        })}
      </ul>
      <button type="submit" onClick={onLoadMoreBtn}>
        Load more
      </button>
    </div>
  );
};

export default ImageGallery;
