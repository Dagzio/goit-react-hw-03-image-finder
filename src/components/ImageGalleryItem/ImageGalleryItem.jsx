import { Component } from 'react';
import { GalleryItem } from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <GalleryItem>
        <img
          src={this.props.webformatURL}
          alt={this.props.tags}
          loading="lazy"
          height="320"
        />
      </GalleryItem>
    );
  }
}
