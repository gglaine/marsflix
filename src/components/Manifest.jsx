import React from 'react';
import './Manifest.css'

const Manifest = (props) => {
  return(
    <div className="container-manifest text-center">
      <ul className="manifest-list">
        <li className="manifest-card" >
          <div className="list-tag">MISSION OVERVIEW </div>
          <div className="list-info">
            <p>The Mars Science Laboratory Spacecraft launched from Cape Canaveral Air Force Space Station, Florida, on November 26 2011</p>
            <p>Mars Rover Curiosity landed succesfully on the floor of Gale Crater on August 6 2012, at 4.6 degrees south latitude, 137.4 degrees east longitude and minus 4,501 meters (2.8 miles) elevation</p>
            <p>The touchdown site, Bradbury Landing, is near the foot of a layered mountain, Aeolis Mons ("Mount Sharp")</p>
            <p>Check out this animation of Curiosity's perilous descent upon Mars </p>
            <video className="video-move">
              <source url='../videos/Cameramove.mp4'/>
            </video>
          </div>
        </li>
        <li className="manifest-card" >
          <div className="list-tag">LIGHTS, CAMERA : ACTION !</div>
            <div className="list-info">
              <p>Curiosity snapped a whopping 366,856 high-res photos during its mission thanks to its 6 cameras that captured every moment of the trip</p>
              <p>The Mast Camera, mounted at about human eye height, images the rovers surrounding in high-resolution stereo and color, with the capability to take and store high-definition video sequences</p>
              <p>Mars Hard Lens Imager can take extreme closeup pictures of rocks and soil, revealing details smaller than a human's hair</p>
            </div>
        </li>
        <li className="manifest-card">
          <div className="list-tag">POWER UP </div>
            <div className="list-info">
              <p>Curiosity comes equipped with a 6 WheelDrive, rocker-bogie suspension. It can cover roughly 200m of Martian Terrain per day</p>
              <p>It has 6 cameras to help the mission's team on Earth select exploration targets and routes</p>
              <p>The rover is powered by a unique radioisotope thermoelectric generator, which produces electricity from the heat of Plutonium's 238's radioactive decay</p>
              <p>It was designed to provide uf to 110 watts of power to operate the rover's instruments, electrical arm, wheels, computers and radio
              The generator's power will decline over time but 2 years after landing it was still providing 100 watts</p>
              <p>The Alpha Particle X-RAY Spectrometers can determine the different elements present in rocks and soils </p>
              <video className="video-move">
                <source url='../videos/Cameramove.mp4'/>
              </video>
              <p>The ChemCam uses laser pulses to vaporize thin layers of material from Martian rocks targets up to 7 meters (23 feet) away
             It includes both a spectrometer to identify th types of atoms excited by the beam, and a telescope to capture detailed images of the area illuminated by the beam</p>
              <p>The laser and telescope sit on the rover's mast. The Chemcam also serves as a passive spectrometer to measure composition of the surface and atmosphere</p>
              <p>The rover's Radiation Assessment Detector characterizes the radiation environment at the surface of Mars and is necessary for planning future human exploration of Mars</p>

            </div>
        </li>
      </ul>
    </div>
  );
}


export default Manifest

