import React from 'react';


const Image = (props) => {
  return(
    <div>
      <h3>{props.photo.name}</h3>
      <p>{props.photo.username}</p>
      <p>{props.photo.email}</p>
    </div>

  );
}

export default Image
