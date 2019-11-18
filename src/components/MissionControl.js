import './MissionControl.css';



import React from 'react';

import Select from 'react-select'

const rover_options = [
  { value: 'SPIRIT', label: 'SPIRIT' },
  { value: 'OPPORTUNITY', label: 'OPPORTUNITY' },
  { value: 'CURIOSITY', label: 'CURIOSITY' }
]

const camera_options = [
  { value: 'NAVCAM', label: 'NAVCAM' },
  { value: 'FHAZ', label: 'FHAZ' },
  { value: 'RHAZ', label: 'RHAZ' }
]


const MissionControl = () => {
  return(
    <div className="control-panel">

      <div className="control-box">
        ROVER :
        <Select options={rover_options} />
      </div>
      <div className="control-box">
        CAM:
        <Select options={camera_options} />
      </div>
    </div>
  );
}




export default MissionControl
