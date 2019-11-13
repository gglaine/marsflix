import './ImageList.css';

import React from 'react';



const ImageList = (props) => {
  return(
        <ul className="image-list">
          {
            props.photos.map(photo => {
              return(
                <li key={photo.id} className="image-list-item" >
                  <img src={photo.img_src}  alt="yo"></img>
                  <p>CAMERA: {photo.camera.name}</p>
                  <p>ROVER: {photo.rover.name}</p>
                  <p>MANIFEST: {photo.rover.manifest}</p>

                </li>
              );
              }
            )
          }
        </ul>
        );
}

export default ImageList
