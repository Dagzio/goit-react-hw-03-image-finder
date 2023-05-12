import { Component } from 'react';
import { Container } from './App.styled';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import axios from 'axios';
// import ImageGallery from "components/ImageGallery/ImageGallery";

export default class App extends Component {
  state = {
    searchQuery: '',
    lastSearchRequestQuery: '',
    images: [],
    page: 1,
  };

  options = {
    BASE_URL: 'https://pixabay.com/api/',
    API_KEY: '34850720-57991e278d678856824bddd81',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  };

  fetchImages(loadMore = false) {
    const query = loadMore
      ? this.state.lastSearchRequestQuery
      : this.state.searchQuery;

    axios
      .get(
        `${this.options.BASE_URL}?key=${this.options.API_KEY}&q=${query}&image_type=${this.options.image_type}&orientation=${this.options.orientation}&page=${this.state.page}&per_page=${this.options.per_page}`
      )
      .then(response => response.data)
      .then(data => {
        const images = data.hits;

        if (loadMore) {
          this.setState(prevState => ({
            images: prevState.images.concat(images),
          }));
        } else {
          this.setState(prevState => ({
            images: images,
            lastSearchRequestQuery: prevState.searchQuery,
          }));
        }
      });
  }

  handleFormSubmit = () => {
    this.fetchImages();
  };

  setSearchQuery = querry => {
    this.setState({ searchQuery: querry });
  };

  loadNextPage = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      () => {
        this.fetchImages(true);
      }
    );
  };

  render() {
    return (
      <Container>
        <Searchbar
          onSubmit={this.handleFormSubmit}
          searchQuery={this.state.searchQuery}
          setSearchQuery={this.setSearchQuery}
        />
        <ImageGallery
          images={this.state.images}
          onLoadMore={this.loadNextPage}
        />
      </Container>
    );
  }
}
