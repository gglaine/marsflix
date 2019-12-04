
import React from 'react';
import Select from 'react-select';
import axios from 'axios';

import './App.css';

import Navbar from './Navbar';
import ImageCarousel from './ImageCarousel';

const API_KEY = "hsbsT45s7Y7OgeNjSXKKOwoOfRRBxN4ZmU9cHzSF";
const BASE_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers"
const SHORT_URL = "https://api.nasa.gov/mars-photos/api/v1/"





class App extends React.Component {


  state = {
    photos: [],
    selectedRoverOption: {value: "CURIOSITY"},
    selectedCameraOption: {value: "NAVCAM"},
    solCounter: 133,
    manifest: []
  }

  componentDidMount() {

    axios.get(`${SHORT_URL}manifests/Curiosity?api_key=${API_KEY}`)
      .then(res => {
        const manifest = res.data.photo_manifest;
        this.setState({ manifest: manifest });
      })

    axios.get(`${BASE_URL}/CURIOSITY/photos?sol=${this.state.solCounter}&camera=${this.state.selectedCameraOption.value}&page=1&api_key=${API_KEY}`)
      .then(res => {
        const photos = res.data;
        const smallSlice = photos.photos.slice(0, 3);
        this.setState({ photos: smallSlice });
        console.log(photos);
        console.log(smallSlice);
      })
  }




  handleCameraChange = selectedCameraOption => {
    axios.get(`${BASE_URL}/CURIOSITY/photos?sol=${this.state.solCounter}&camera=${this.state.selectedCameraOption.value}&page=1&api_key=${API_KEY}`)
    .then(res => {
      const photos = res.data;
      const smallSlice = photos.photos.slice(0, 3);
      this.setState({ photos: smallSlice });
      console.log(photos);
      console.log(smallSlice);
    })
    this.setState(
      { selectedCameraOption: selectedCameraOption },
      () => console.log(`Option selected:`, this.state.selectedCameraOption.value)
    );
  };

  fastForward = () => {
    this.setState({ solCounter: this.state.solCounter + 1 });
    axios.get(`${BASE_URL}/CURIOSITY/photos?sol=${this.state.solCounter}&camera=${this.state.selectedCameraOption.value}&page=1&api_key=${API_KEY}`)
    .then(res => {
      const photos = res.data;
      const smallSlice = photos.photos.slice(0, 3);
      this.setState({ photos: smallSlice });
      console.log(photos);
      console.log(smallSlice);
    })
    console.log(this.state.solCounter);
  }




  render() {

    const camera_options = [
      { value: 'FHAZ', label: 'FHAZ: Front Hazard Avoidance Camera' },
      { value: 'RHAZ', label: 'RHAZ: Rear Hazard Avoidance Camera' },
      { value: 'NAVCAM', label: 'NAVCAM' },
      { value: 'MAST', label: 'MAST: Mast Camera' },
      { value: 'MARDI', label: 'MARDI: Mars Descent Imager' }
    ];


    return (
      <div className="super-wrapper">
        <Navbar />
        <div className="container container-player">
          <div className="image-carousel">
            <ImageCarousel photos={this.state.photos} />
            <div className="btn-rec"><img src="../../rec.png" alt="logo" /></div>
            <div className="btn-ffw" ><img src="../../ffwd.png" alt="logo" onClick={this.fastForward} /></div>
            <div className="sol-counter">SOL: {this.state.solCounter}</div>
          </div>
          <div className="control-panel">
            <div className="control-box">
              <Select
                className="react-select-container"
                classNamePrefix="react-select"
                label={"Choose camera"}
                options={camera_options}
                onChange={this.handleCameraChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App
