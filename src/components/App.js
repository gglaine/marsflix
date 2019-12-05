
import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from './Navbar';
import ImageCarousel from './ImageCarousel';


import Sound from 'react-sound'

const API_KEY = "hsbsT45s7Y7OgeNjSXKKOwoOfRRBxN4ZmU9cHzSF";
const BASE_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers"
const SHORT_URL = "https://api.nasa.gov/mars-photos/api/v1/"


class App extends React.Component {

  state = {
    photos: [],
    selectedRoverOption: {value: "CURIOSITY"},
    selectedCameraOption: {value: "FHAZ"},
    solCounter: 133,
    manifest: []
  }

  componentDidMount() {
    axios.get(`${SHORT_URL}manifests/Curiosity?api_key=${API_KEY}`)
      .then(res => {
        const manifest = res.data.photo_manifest;
        this.setState({ manifest: manifest });
        console.log(manifest)
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
      const smallSlice = photos.photos.slice(0, 6);
      this.setState({ photos: smallSlice });
      console.log(photos);
      console.log(smallSlice);
    })
    console.log(this.state.solCounter);
  }


  superfastForward = () => {
    this.setState({ solCounter: this.state.solCounter + 10 });
    axios.get(`${BASE_URL}/CURIOSITY/photos?sol=${this.state.solCounter}&camera=${this.state.selectedCameraOption.value}&page=1&api_key=${API_KEY}`)
    .then(res => {
      const photos = res.data;
      const smallSlice = photos.photos.slice(0, 6);
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
    ];

    const sectionStyle = {
      backgroundImage: "url(../../marso.jpg)"
    };

    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <div className="super-wrapper" style={ sectionStyle} >
                      <Sound
         url="../../vector.mp3"
         playStatus={Sound.status.PLAYING}
         onLoading={this.handleSongLoading}
         onPlaying={this.handleSongPlaying}
         onFinishedPlaying={this.handleSongFinishedPlaying}
       />
                <div className="container container-player">
                  <div className="image-carousel">
                    <ImageCarousel photos={this.state.photos} />
                    <div className="btn-ffw" ><img src="../../fffred.png" alt="logo" onClick={this.fastForward} /></div>
                    <div className="btn-fff" ><img src="../../ffwd.png" alt="logo" onClick={this.superfastForward} /></div>
                    <div className="sol-counter">SOL: {this.state.solCounter}</div>
                  </div>
                  <div className="control-panel">
                    <div className="control-box">
                      <Select
                        className="react-select-container"
                        classNamePrefix="react-select"
                        placeholder={"Choose camera"}
                        options={camera_options}
                        onChange={this.handleCameraChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Route>
            <Route path="/manifest">
              <div className="manifest-wrapper">
                <ul className="manifest-infos">
                  <li>LAUNCH <span className="info">{this.state.manifest.launch_date}</span></li>
                  <li>LANDING <span className="info"> {this.state.manifest.landing_date}</span></li>
                  <li>PHOTOS <span className="info"> {this.state.manifest.total_photos}</span></li>

                </ul>
              </div>
            </Route>
            <Route path="/about">
              <div className="about-wrapper">
                <div className="about">
                  <div>Powered by NASA OPEN API</div>
                  <div>guilllaumelaine - 2019 </div>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
