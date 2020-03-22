import React from 'react';
import logo1 from '../images/logo.png';
import corona from '../images/corona.png';
import globe from '../images/globe.png';
import '../css/globe.css';

function Globe() {
  return (
        <div className="outCircle">
          <div className="rotate anim1">
            <div className="counterrotate">
              <img src={corona} className="inner" alt="logo" />
            </div>
          </div>
          <div className="rotate anim2">
            <div className="counterrotate">
              <img src={corona} className="inner" alt="logo" />
            </div>
          </div>
          <div className="rotate anim3">
            <div className="counterrotate">
              <img src={corona} className="inner" alt="logo" />
            </div>
          </div>
          <div className="rotate anim4">
            <div className="counterrotate">
              <img src={corona} className="inner" alt="logo" />
            </div>
          </div>
          <div className="rotate anim5">
            <div className="counterrotate">
              <img src={corona} className="inner" alt="logo" />
            </div>
          </div>
          <div className="rotate anim6">
            <div className="counterrotate">
              <img src={corona} className="inner" alt="logo" />
            </div>
          </div>
        </div>
  );
}

export default Globe;
