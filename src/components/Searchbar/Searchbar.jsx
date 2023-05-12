import { Component } from 'react';
import { Header, SearchInput } from 'components/Searchbar/Searchbar.styled';
import Button from '../Button/Button';

export default class Searchbar extends Component {
  handleChangeQuery = ({ target: { value } }) => {
    this.props.setSearchQuery(value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();
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
            onChange={this.handleChangeQuery}
            value={this.props.searchQuery}
          />
          <Button />
        </form>
      </Header>
    );
  }
}
