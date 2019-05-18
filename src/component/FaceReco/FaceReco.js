import React from 'react';
import './FaceReco.css'
const FaceReco=({imageURL})=>
{
  
    return(
<div className="center">
    <img alt="" src={imageURL} id={"FaceReco"}/>
</div>)
};
export default FaceReco;