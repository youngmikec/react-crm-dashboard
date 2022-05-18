import React from 'react'
import { images } from './images'

const Mainboard = () => {
    const {account,pie,region} = images
  return (
      <>
    <h3>Sales overview</h3>
    <div className='d-flex'>
        <div className='p-5'>
            <p>Total sales</p>
            <img className ='w-100' src={account} alt="" />
            <div className='d-flex flex-row justify-content-between'>
                <div>
                <h4>Monthly sales</h4>
                <strong>129,543</strong>
                </div>
                <div>
                    <h4>Sales revenue</h4>
                    <strong>20%</strong>
                </div>
            </div>
        </div>
        <div>
        <p>pie distribution</p>
        <img className='w-50 h-25 mb-2'src={pie} alt="" />
        <div>
        <p>by region</p>
        <img className='w-100 h-50' src={region} alt="" />
        </div>
        </div>
    </div>
      </>
  )
}

export default Mainboard