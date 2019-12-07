import React from 'react';
import './Manifest.css'

const Manifest = (props) => {
  return(
    <div className="container-manifest text-center">
      <ul className="manifest-list">
        <li className="manifest-card">
          <div className="list-tag">LANDING ON MARS </div>
          <div className="list-info">
            <p>Curiosity's ride to Mars was quite an adventure</p>
            <p>It took of on 23/09/98 and landed safely on Mars on 23/11/99</p>
          </div>
        </li>
        <li className="manifest-card">
          <div className="list-tag">THE PHOTOS </div>
            <div className="list-info">
            <p>
              Curiosity took a whopping 366,856 photos during its mission
              thanks to its 6 cameras that captured every moment of the trip
              </p>
            </div>
        </li>
        <li className="manifest-card">
          <div className="list-tag">MISSION STATUS </div>
            <div className="list-info">
              <p>Curiosity's mission was supposed to spend 193 Sol on Mars but it finally lasted <br></br>
                {props.manifest.max_sol} and is still active
              </p>
            </div>
        </li>
      </ul>
    </div>
  );
}


export default Manifest

