import { Component } from 'react';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li>
        <img
          src={this.props.webformatURL}
          alt={this.props.tags}
          loading="lazy"
          height="260"
        />
      </li>
    );
  }
}
