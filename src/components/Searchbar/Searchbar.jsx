import { Component } from 'react';
import { Header, SearchInput } from 'components/Searchbar/Searchbar.styled';
import { SearchButton } from 'components/Searchbar/Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  setSearchQuery = ({ target: { value } }) => {
    this.setState({ query: value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <Header>
        <form onSubmit={this.onSubmit}>
          <SearchInput
            type="text"
            name="searchQuery"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.setSearchQuery}
            value={this.state.query}
          />
          <SearchButton type="submit">Search</SearchButton>
        </form>
      </Header>
    );
  }
}
