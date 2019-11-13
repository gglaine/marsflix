
import React from 'react';
import axios from 'axios';

import './App.css';

import Navbar from './Navbar';
import ImageList from './ImageList';

class App extends React.Component {
  state = {
    photos: []
  }

  componentDidMount() {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&api_key=hsbsT45s7Y7OgeNjSXKKOwoOfRRBxN4ZmU9cHzSF`)
      .then(res => {
        const photos = res.data;
        this.setState({ photos: photos.photos });
        console.log(photos);
      })
  }

  render() {
    return (
      <div>
        <Navbar />
        TODO SEARCHBAR / MISSION CONTROL
        SPIRIT / OPPORTUNITY / CURIOSITY
        Found {this.state.photos.length} images for this Rover
        <ImageList photos={this.state.photos} />
      </div>
    );
  }
}


export default App
