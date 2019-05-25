import React from 'react'
const Rank=({name, entries})=>{
    console.log(name);
return(
<div>
    <div className="white f3">
    {`${name} , your current rank is...`}
    </div>
    <div className='f3 white'>
    {entries}
    </div>
</div>)
}
export default Rank;