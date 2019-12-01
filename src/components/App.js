
import React from 'react';
import axios from 'axios';

import './App.css';

import Navbar from './Navbar';
import ImageCarousel from './ImageCarousel';
import MissionControl from './MissionControl';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  state = {
    photos: [],
    selectedRover: "curiosity",
    selectedCamera: "navcam"
  }

  componentDidMount() {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.selectedRover}/photos?sol=1000&camera=${this.state.selectedCamera}&page=1&api_key=hsbsT45s7Y7OgeNjSXKKOwoOfRRBxN4ZmU9cHzSF`)
      .then(res => {
        const photos = res.data;
        const smallSlice = photos.photos.slice(0, 3);
        this.setState({ photos: smallSlice });
        console.log(photos);
        console.log(smallSlice);
      })
  }

  render() {
    return (
      <div className="super-wrapper">
        <Navbar />
        <div className="container">
          <div className="image-carousel">
            <ImageCarousel photos={this.state.photos} />
                      <div className="mission-control">
            <MissionControl />
          </div>
          </div>

        </div>
      </div>
    );
  }
}


export default App
