import React from 'react'
import Loader from 'react-loader'

const MyLoader = ({height}) => {
    const options = {
        lines: 10,
        length: 20,
        width: 10,
        radius: 30,
        scale: 1.50,
        corners: 1,
        color: '#000',
        opacity: 0.25,
        rotate: 0,
        direction: 1,
        speed: 1,
        trail: 60,
        fps: 20,
        zIndex: 2e9,
        top: '50%',
        left: '50%',
        shadow: false,
        hwaccel: false,
        position: 'absolute'
    };

  return (
    <div className='my-loader' style={{ height: height, position: "relative" }}>
        <Loader loaded={false} options={options} className="spinner" />
    </div>
  )
}

export default MyLoader