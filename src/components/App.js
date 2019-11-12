
import React from 'react';
import axios from 'axios';

import Image from './Image'

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
      <ul>
      We found {this.state.photos.length} images for this Rover
        {
          this.state.photos.map(photo => {
            return(
              <li key={photo.id}>
                <p>{photo.id}</p>
                <img src={photo.img_src} alt="yo"></img>
              </li>
            );
            }
          )
        }
      </ul>
    )
  }
}


export default App
