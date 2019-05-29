import React from 'react';
const Navigation=({onRouteChange,isSigned})=>{
    if(isSigned)
    {
        return(
            <nav style={{display:'flex',justifyContent:'flex-end'}}>
        
        <p onClick={()=>onRouteChange('signout')} className="pa3 f3 dim pointer link">Sing Out</p>
            </nav>
        );
    }else
    {
        return(
            <nav style={{display:'flex',justifyContent:'flex-end'}}>
        
        <p onClick={()=>onRouteChange('Signin')} className="pa3 f3 dim pointer link">Sign In</p>
        <p onClick={()=>onRouteChange('Signup')} className="pa3 f3 dim pointer link">Sign Up</p>
            </nav>
        );

    }
}
export default Navigation;