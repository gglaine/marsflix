
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { Carousel } from 'react-responsive-carousel';


import React from 'react';

const ImageCarousel = (props) => {

  if (props.photos && props.photos.length < 1 ) { // evaluates to true if there are photos
    return(

      <div>
        <div className="checkcam">CHECK OTHER CAM</div>
        <Loader
           type="Puff"
           color="#00BFFF"
           height={400}
           width={100}
           timeout={13000} //13 secs

        />
      </div>
    );
  };

  return (
      <Carousel autoPlay={true} interval={3500} transitionTime={0} useKeyboardArrows={true}  showIndicators={false} showThumbs={false}  showStatus={false} showArrows={true} infiniteLoop={true} >
      {
        props.photos.map(photo => {
          console.log(props.photos.length);
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
