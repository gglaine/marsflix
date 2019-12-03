
import React from 'react';
import Select from 'react-select';
import axios from 'axios';

import ControlRange from '@mapbox/mr-ui/control-range';


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
    manifest: []
  }

  componentDidMount() {

    axios.get(`${SHORT_URL}manifests/Curiosity?api_key=${API_KEY}`)
      .then(res => {
        const manifest = res.data.photo_manifest;
        this.setState({ manifest: manifest });
      })

    axios.get(`${BASE_URL}/CURIOSITY/photos?sol=999&camera=${this.state.selectedCameraOption.value}&page=1&api_key=${API_KEY}`)
      .then(res => {
        const photos = res.data;
        const smallSlice = photos.photos.slice(0, 3);
        this.setState({ photos: smallSlice });
        console.log(photos);
        console.log(smallSlice);
      })
  }




  handleCameraChange = selectedCameraOption => {
    axios.get(`${BASE_URL}/CURIOSITY/photos?sol=999&camera=${this.state.selectedCameraOption.value}&page=1&api_key=${API_KEY}`)
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
        <div className="container">
          <div className="rover-manifest">
          MISSION MANIFEST
              <ul className="manifest-list">
                <li><div className="list-tag">LANDING DATE </div><div className="list-info">{this.state.manifest.landing_date}</div></li>
                <li><div className="list-tag">TOTAL PHOTOS </div><div className="list-info">{this.state.manifest.total_photos}</div></li>
                <li><div className="list-tag">MAX SOL: </div><div className="list-info">{this.state.manifest.max_sol}</div></li>
              </ul>
          </div>
        </div>
        <div className="container">
          <div className="image-carousel">
            <ImageCarousel photos={this.state.photos} />
            <div className="control-panel">
              <div className="control-box">
                CAM:
                <Select
                  options={camera_options}
                  onChange={this.handleCameraChange}
                />
              </div>
              <div className="control-box">
              SELECT SOL
                <ControlRange
                  id="name"
                  min={0}
                  max={1000}
                  step={1}
                  onChange={
                    (value, id ) => {
                      console.log(value, id);
                    }
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App
