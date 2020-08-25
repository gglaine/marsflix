
import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import './App.css';
import { Icon } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './Navbar';
import ImageCarousel from './ImageCarousel';
import Manifest from './Manifest'

import Sound from 'react-sound'

const BASE_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers"
const SHORT_URL = "https://api.nasa.gov/mars-photos/api/v1/"

const API_KEY = `${process.env.REACT_APP_API_KEY}`


class App extends React.Component {

  state = {
    photos: [],
    selectedCameraOption: {value: "FHAZ"},
    solCounter:720,
    manifest: []
  }

  componentDidMount() {
    axios.get(`${SHORT_URL}manifests/Curiosity?api_key=${API_KEY}`)
      .then(res => {
        const manifest = res.data.photo_manifest;
        this.setState({ manifest: manifest });
        console.log(this.state.manifest)
      })
    axios.get(`${BASE_URL}/CURIOSITY/photos?sol=${this.state.solCounter}&camera=${this.state.selectedCameraOption.value}&page=1&api_key=${API_KEY}`)
      .then(res => {
        const photos = res.data;
        const smallSlice = photos.photos.slice(0, 53);
        this.setState({ photos: smallSlice });
        console.log(smallSlice);
      })
  }

  handleCameraChange = async selectedCameraOption => {
    await axios.get(`${BASE_URL}/CURIOSITY/photos?sol=${this.state.solCounter}&camera=${this.state.selectedCameraOption.value}&page=1&api_key=${API_KEY}`)
    .then(res => {
      const photos = res.data;
      const smallSlice = photos.photos.slice(0, 53);
      this.setState({ photos: smallSlice });
      console.log(smallSlice);
    })
    this.setState(
      { selectedCameraOption: selectedCameraOption },
      () => console.log(`Option selected:`, this.state.selectedCameraOption.value)
    );
  };

  missionStart = () => {
    this.setState({ solCounter: 0 });
    axios.get(`${BASE_URL}/CURIOSITY/photos?sol=${this.state.solCounter}&camera=${this.state.selectedCameraOption.value}&page=1&api_key=${API_KEY}`)
    .then(res => {
      const photos = res.data;
      const smallSlice = photos.photos.slice(0, 153);
      this.setState({ photos: smallSlice });
      console.log(smallSlice);
    })
    console.log(this.state.solCounter);
  }

    fastRewind = () => {
    this.setState({ solCounter: this.state.solCounter - 10 });
    axios.get(`${BASE_URL}/CURIOSITY/photos?sol=${this.state.solCounter}&camera=${this.state.selectedCameraOption.value}&page=1&api_key=${API_KEY}`)
    .then(res => {
      const photos = res.data;
      const smallSlice = photos.photos.slice(0, 53);
      this.setState({ photos: smallSlice });
      console.log(smallSlice);
    })
    console.log(this.state.solCounter);
  }

  Rewind = () => {
    this.setState({ solCounter: this.state.solCounter - 1 });
    axios.get(`${BASE_URL}/CURIOSITY/photos?sol=${this.state.solCounter}&camera=${this.state.selectedCameraOption.value}&page=1&api_key=${API_KEY}`)
    .then(res => {
      const photos = res.data;
      const smallSlice = photos.photos.slice(0, 53);
      this.setState({ photos: smallSlice });
      console.log(smallSlice);
    })
    console.log(this.state.solCounter);
  }

  fastForward = () => {
    this.setState({ solCounter: this.state.solCounter + 1 });
    axios.get(`${BASE_URL}/CURIOSITY/photos?sol=${this.state.solCounter}&camera=${this.state.selectedCameraOption.value}&page=1&api_key=${API_KEY}`)
    .then(res => {
      const photos = res.data;
      const smallSlice = photos.photos.slice(0, 53);
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
      const smallSlice = photos.photos.slice(0, 53);
      this.setState({ photos: smallSlice });
      console.log(smallSlice);
    })
    console.log(this.state.solCounter);
  }

  render() {

    const camera_options = [
      { value: 'FHAZ', label: 'FHAZ: Front Camera' },
      { value: 'RHAZ', label: 'RHAZ: Rear Camera' },
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
                    <div className="sol-counter">Current Sol: {this.state.solCounter}</div>

                    <div className="full-controls">
                      <div className="controls">
                        <Icon color='red' name='fast backward' onClick={this.fastRewind}  />
                        <Icon color='red' name='backward' onClick={this.Rewind}  />
                        <Icon color='red' name='play' onClick={this.missionStart}  />
                        <Icon color='red' name='forward' onClick={this.fastForward}  />
                        <Icon color='red' name='fast forward' onClick={this.superfastForward}  />
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
                </div>
              </div>
            </Route>
            <Route path="/manifest">
              <Manifest manifest={this.state.manifest}/>
            </Route>

            <Route path="/about">
              <div className="about-wrapper">
                <div className="about">
                  <div>Powered by NASA OPEN API</div>
                  <div>guilllaumelaine.com - 2019 </div>
                  <div><p>github.com/gglaine/marsflix</p></div>
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
