import './MissionControl.css';

import React, {Component} from 'react';


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

class MissionControlForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userSelectedRover: '',
      userSelectedCamera: ''
    };
  }


  function handleRoverChange = () => {
    this.setState({userSelectedRover: event.target.value});
  }

  function handleCameraChange () => {
    this.setState({userSelectedCamera: event.target.value});
  }


  render() {
    return(
    <div className="control-panel">
      <div className="control-box">
        ROVER :
        <Select options={rover_options} onChange={handleRoverChange} />
        CAM:
        <Select options={camera_options} onChange={handleCameraChange}  />
      </div>
    </div>

    );
  }
}

export default MissionControlForm
