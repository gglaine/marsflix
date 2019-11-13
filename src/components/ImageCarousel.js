


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import React from 'react';

const ImageCarousel = (props) => {

    return (
        <Carousel >
      {
        props.photos.map(photo => {
          return(
            <div key={photo.id} className="image-list-item" >
              <img src={photo.img_src}  alt="yo"></img>
            </div>
          );
          }
        )
      }
      </Carousel>
    );
}


export default ImageCarousel
