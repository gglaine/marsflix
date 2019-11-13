import './MissionControl.css';

import React from 'react';

const MissionControl = () => {
  return(
    <div className="control-panel">

      <div className="control-box">
        ROVER :
        <ul>
          <li>SPIRIT<img src="https://m.eet.com/media/1188787/mars_spiritdiagram.jpg"></img></li>
          <li>OPPORTUNITY</li>
          <li>CURIOSITY</li>
        </ul>
      </div>
      <div className="control-box">
      CAM:
        <ul>
          <li>FHAZ: Front Hazard Avoidance Camera</li>
          <li>RHAZ: Rear Hazard Avoidance Camera</li>
          <li>PANCAM : Panoramic Camera</li>
        </ul>
      </div>
      <div className="control-box">SOL</div>
      <div className="control-box">EARTH-DATE</div>

    </div>
  );
}




export default MissionControl
