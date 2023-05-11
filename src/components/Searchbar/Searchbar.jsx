import { Component } from "react";
import { Searchbar, SearchInput } from "components/Searchbar/Searchbar.styled";
import Button from "../Button/Button"
import axios from "axios";

export default class SearchForm extends Component {
    state = {
        searchQuery: '',
        page: 1
    };

    options = {
        BASE_URL: 'https://pixabay.com/api/',
        API_KEY: '34850720-57991e278d678856824bddd81',
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
    };

    handleChangeQuery = ({target: {value}}) => {
        this.setState({ searchQuery: value });
    };

    async fetchImages() {
        const { BASE_URL, API_KEY, image_type, orientation, per_page } = this.options;
        try {
            const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${this.state.searchQuery}&image_type=${image_type}&orientation=${orientation}&page=${this.state.page}&per_page=${per_page}`)
            console.log(response.data);
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
        
    }


    async onSubmit(e) {     
        e.preventDefault();
        this.setState({ searchQuery: '' });
    };
    
    render() {
        return <Searchbar>
        <form onSubmit={this.onSubmit}>
            <SearchInput
                type="text"
                name="searchQuery"
                autoFocus
                placeholder="Search images and photos"
                    onChange={this.handleChangeQuery}
                />
            <Button />
        </form>
    </Searchbar>
    }
    
};