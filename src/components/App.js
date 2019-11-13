
import React from 'react';
import axios from 'axios';

import './App.css';

import Navbar from './Navbar';
import MissionControl from './MissionControl';
import ImageList from './ImageList';

import ImageCarousel from './ImageCarousel';

class App extends React.Component {
  state = {
    photos: []
  }

  componentDidMount() {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&page=1&api_key=hsbsT45s7Y7OgeNjSXKKOwoOfRRBxN4ZmU9cHzSF`)
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
        <MissionControl />
        Found:  {this.state.photos.length} images for this Rover
        <ImageCarousel autoPlay photos={this.state.photos} />
      </div>
    );
  }
}


export default App
