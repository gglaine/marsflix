
import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './Navbar';
import ImageCarousel from './ImageCarousel';
import Manifest from './Manifest'

import Sound from 'react-sound'

const BASE_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers"
const SHORT_URL = "https://api.nasa.gov/mars-photos/api/v1/"

const API_KEY = `${REACT_APP_API_KEY}`


class App extends React.Component {

  state = {
    photos: [],
    selectedCameraOption: {value: "FHAZ"},
    solCounter: 53,
    manifest: []
  }

  componentDidMount() {
    axios.get(`${SHORT_URL}manifests/Curiosity?api_key=${API_KEY}`)
      .then(res => {
        const manifest = res.data.photo_manifest;
        this.setState({ manifest: manifest });
        console.log(manifest)
        console.log(API_KEY)
      })
    axios.get(`${BASE_URL}/CURIOSITY/photos?sol=${this.state.solCounter}&camera=${this.state.selectedCameraOption.value}&page=1&api_key=${API_KEY}`)
      .then(res => {
        const photos = res.data;
        const smallSlice = photos.photos.slice(0, 33);
        this.setState({ photos: smallSlice });
        console.log(smallSlice);
      })
  }

  handleCameraChange = async selectedCameraOption => {
    await axios.get(`${BASE_URL}/CURIOSITY/photos?sol=${this.state.solCounter}&camera=${this.state.selectedCameraOption.value}&page=1&api_key=${API_KEY}`)
    .then(res => {
      const photos = res.data;
      const smallSlice = photos.photos.slice(0, 33);
      this.setState({ photos: smallSlice });
      console.log(smallSlice);
    })
    this.setState(
      { selectedCameraOption: selectedCameraOption },
      () => console.log(`Option selected:`, this.state.selectedCameraOption.value)
    );
  };

  missionStart = () => {

  }

  fastForward = () => {
    this.setState({ solCounter: this.state.solCounter + 1 });
    axios.get(`${BASE_URL}/CURIOSITY/photos?sol=${this.state.solCounter}&camera=${this.state.selectedCameraOption.value}&page=1&api_key=${API_KEY}`)
    .then(res => {
      const photos = res.data;
      const smallSlice = photos.photos.slice(0, 33);
      this.setState({ photos: smallSlice });
      console.log(smallSlice);
    })
    console.log(this.state.solCounter);
  }


  superfastForward = async () => {
    await this.setState({ solCounter: this.state.solCounter + 10 });
    axios.get(`${BASE_URL}/CURIOSITY/photos?sol=${this.state.solCounter}&camera=${this.state.selectedCameraOption.value}&page=1&api_key=${API_KEY}`)
    .then(res => {
      const photos = res.data;
      const smallSlice = photos.photos.slice(0, 33);
      this.setState({ photos: smallSlice });
      console.log(smallSlice);
    })
    console.log(this.state.solCounter);
  }

  render() {

    const camera_options = [
      { value: 'FHAZ', label: 'FHAZ: Front Hazard Avoidance Camera' },
      { value: 'RHAZ', label: 'RHAZ: Rear Hazard Avoidance Camera' },
    ];


    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <div className="super-wrapper"  >
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
                    <div className="btn-fff">SOL O</div>
                    <div className="btn-fff" ><img src="../../ffwd.png" alt="logo" onClick={this.fastForward} /></div>
                    <div className="btn-ffw" ><img src="../../fffred.png" alt="logo" onClick={this.superfastForward} /></div>
                    <div className="sol-counter">SOL: {this.state.solCounter}</div>
                  </div>
                  <div className="control-panel">
                    <div className="control-box">
                      <Select
                        className="react-select-container"
                        classNamePrefix="react-select"
                        options={camera_options}
                        onChange={this.handleCameraChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Route>
            <Route path="/manifest">
              <Manifest manifest={this.state.manifest}/>
            </Route>

            <Route path="/myflix">
              <h3>MYFLIX</h3>
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
