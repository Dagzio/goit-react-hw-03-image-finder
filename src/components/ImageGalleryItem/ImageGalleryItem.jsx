const ImageGalleryItem = ({ images }) => {

    return images.hits.map(({ webformatURL, tags, id }) => {
        <li key={id}>
            <img src={webformatURL} alt={tags} loading="lazy" height="260" />
        </li>
    });

}

export default ImageGalleryItem;