import React from 'react';
import logo1 from '../images/logo.png';
import corona from '../images/corona.png';
import globe from '../images/globe.png';

function CoronaAnimation() {
  return (
    <div className="animate-img">
      <div id="div1"><img src={corona} className="App-logo" alt="logo" /></div>
      {/*<div id="div2"><img src={globe} className="App-logo" alt="logo" /></div>*/}
      <div id="div3"><img src={corona} className="App-logo" alt="logo" /></div>
      {/*<div id="div4"><img src={logo1} className="App-logo" alt="logo" /></div>*/}
      <div id="div5"><img src={corona} className="App-logo" alt="logo" /></div>
    </div>
  );
}

export default CoronaAnimation;
