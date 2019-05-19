import React from 'react';
import './FaceReco.css'
const FaceReco=({imageURL,box})=>
{
  
    return(
<div className="center ma">
<div className="absolute mt2">
<img alt="" src={imageURL} id='FaceReco'/>
<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
 

</div>
   
</div>)
};
export default FaceReco;
//style={{top:box.topRow, right:box.rightCol,left:box.leftCol,bottom:box.bottomRow}}