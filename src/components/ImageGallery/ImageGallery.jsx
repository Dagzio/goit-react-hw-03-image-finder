import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"

const ImageGallery = () => {
    return <ul>
        <ImageGalleryItem fetchImages={images} />
    </ul>
}

export default ImageGallery;