import { Component } from 'react';
import { Container } from './App.styled';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import axios from 'axios';
import Loader from 'components/Loader/Loader';

export default class App extends Component {
  state = {
    searchQuery: '',
    lastSearchRequestQuery: '',
    images: [],
    page: 1,
    isLoading: false,
  };

  options = {
    BASE_URL: 'https://pixabay.com/api/',
    API_KEY: '34850720-57991e278d678856824bddd81',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  };

  fetchImages(loadMore = false) {
    const { BASE_URL, API_KEY, image_type, orientation, per_page } =
      this.options;
    const query = loadMore
      ? this.state.lastSearchRequestQuery
      : this.state.searchQuery;

    axios
      .get(
        `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=${image_type}&orientation=${orientation}&page=${this.state.page}&per_page=${per_page}`
      )
      .then(response => response.data)
      .then(data => {
        const takenImages = data.hits;

        if (loadMore) {
          this.setState(prevState => ({
            images: prevState.images.concat(takenImages),
          }));
        } else {
          this.setState(prevState => ({
            images: takenImages,
            lastSearchRequestQuery: prevState.searchQuery,
          }));
        }
      });
  }

  handleFormSubmit = () => {
    this.fetchImages();
  };

  setSearchQuery = query => {
    this.setState({ searchQuery: query });
  };

  onLoadMore = () => {
    this.toggleLoaderVisible();
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      () => {
        this.fetchImages(true);
      }
    );

    this.toggleLoaderVisible();

    const { height: cardHeight } = document
      .getElementById('#gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2.75,
      behavior: 'smooth',
    });
  };

  toggleLoaderVisible = () => {
    this.setState(prevState => ({ isLoading: !prevState.isLoading }));
  };

  render() {
    return (
      <Container>
        <Searchbar
          onSubmit={this.handleFormSubmit}
          searchQuery={this.state.searchQuery}
          setSearchQuery={this.setSearchQuery}
        />
        {this.state.images.length > 0 && (
          <>
            <ImageGallery images={this.state.images} />
            {!this.state.isLoading ? (
              <button type="submit" onClick={this.onLoadMore}>
                Load more
              </button>
            ) : (
              <Loader />
            )}
          </>
        )}
      </Container>
    );
  }
}
