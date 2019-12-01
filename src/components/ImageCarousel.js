


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import React from 'react';

const ImageCarousel = (props) => {

  return (
      <Carousel autoPlay={true} interval={3500} transitionTime={0} useKeyboardArrows={true}  showIndicators={false} showThumbs={false}  showStatus={false} showArrows={false} infiniteLoop={true} >
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
