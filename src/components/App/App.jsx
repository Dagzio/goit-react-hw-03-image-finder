import { Component } from 'react';
import { Container } from './App.styled';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { fetchImages } from 'Api';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

export default class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    modalImg: '',
  };

  componentDidUpdate(none, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.setState({
        isLoading: true,
      });
      fetchImages(this.state.searchQuery, this.state.page)
        .then(response => {
          if (response.data.hits.length === 0) {
            alert('Invalid text of response щr you have reached the last page');
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...response.data.hits],
          }));
        })
        .finally(() => {
          this.setState({
            isLoading: false,
          });
        });
    }
  }

  handleFormSubmit = searchQuery => {
    this.setState({
      page: 1,
      images: [],
      searchQuery,
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  showModal = modalImg => {
    this.setState({
      modalImg,
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  toggleLoaderVisible = () => {
    this.setState(prevState => ({ isLoading: !prevState.isLoading }));
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.images.length > 0 && (
          <>
            <ImageGallery
              images={this.state.images}
              showModal={this.showModal}
            />
            {this.state.isLoading ? (
              <Loader visible={this.state.isLoading} />
            ) : (
              <Button onClick={this.onLoadMore} />
            )}
            {this.state.showModal && (
              <Modal
                modalImg={this.state.modalImg}
                closeModal={this.closeModal}
              />
            )}
          </>
        )}
      </Container>
    );
  }
}
