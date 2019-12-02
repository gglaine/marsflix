
import React from 'react';
import Select from 'react-select';
import axios from 'axios';

import './App.css';
import './MissionControlForm.css';

import Navbar from './Navbar';
import ImageCarousel from './ImageCarousel';
// import MissionControl from './MissionControl';
// import MissionControlForm from './MissionControlForm';


class App extends React.Component {


  state = {
    photos: [],
    selectedRoverOption: "curiosity",
    selectedCameraOption: "navcam"
  }




  componentDidMount() {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.selectedRoverOption.value}/photos?sol=1000&camera=${this.state.selectedCameraOption}&page=1&api_key=hsbsT45s7Y7OgeNjSXKKOwoOfRRBxN4ZmU9cHzSF`)
      .then(res => {
        const photos = res.data;
        const smallSlice = photos.photos.slice(0, 3);
        this.setState({ photos: smallSlice });
        console.log(photos);
        console.log(smallSlice);
      })
  }



  handleRoverChange = selectedRoverOption => {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.selectedRoverOption.value}/photos?sol=1000&camera=${this.state.selectedCameraOption.value}&page=1&api_key=hsbsT45s7Y7OgeNjSXKKOwoOfRRBxN4ZmU9cHzSF`)
      .then(res => {
        const photos = res.data;
        const smallSlice = photos.photos.slice(0, 3);
        this.setState({ photos: smallSlice });
        console.log(photos);
        console.log(smallSlice);
      })
    this.setState(
      { selectedRoverOption: selectedRoverOption },
      () => console.log(`Option selected:`, this.state.selectedRoverOption)
    );
  };

  handleCameraChange = selectedCameraOption => {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.selectedRoverOption.value}/photos?sol=1000&camera=${this.state.selectedCameraOption.value}&page=1&api_key=hsbsT45s7Y7OgeNjSXKKOwoOfRRBxN4ZmU9cHzSF`)
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

    const rover_options = [
      { value: 'SPIRIT', label: 'SPIRIT' },
      { value: 'OPPORTUNITY', label: 'OPPORTUNITY' },
      { value: 'CURIOSITY', label: 'CURIOSITY' }
    ];

    const camera_options = [
      { value: 'NAVCAM', label: 'NAVCAM' },
      { value: 'FHAZ', label: 'FHAZ' },
      { value: 'RHAZ', label: 'RHAZ' }
    ];


    return (
      <div className="super-wrapper">
        <Navbar />
        <div className="container">
          <div className="image-carousel">
            <ImageCarousel photos={this.state.photos} />
            <div className="control-panel">
              <div className="control-box">
                ROVER :
                <Select
                  options={rover_options}
                  onChange={this.handleRoverChange}
                />
                CAM:
                <Select
                  options={camera_options}
                  onChange={this.handleCameraChange}
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
