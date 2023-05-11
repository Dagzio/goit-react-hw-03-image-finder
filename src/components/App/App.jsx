import { Component } from "react";
import { Container } from "./App.styled";
import SearchForm from "components/Searchbar/Searchbar";
// import ImageGallery from "components/ImageGallery/ImageGallery";

export default class App extends Component{
  state = {
  
  };


  render() {
    return (
    <Container>
        <SearchForm />
        {/* <ImageGallery/> */}
    </Container>
  );
  }
  
};
