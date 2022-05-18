import React from 'react'
// import { images } from './images'
import {stats} from './stats'
import {Chart} from 'react-google-charts'
import Team from '../team'
import Clients from '../clients'

const Mainboard = () => {
    // const {account,pie,region} = images
    const {line, pie, bar} = stats
  return (
      <>
        <div className='container pl-3'>
            <h3>Sales overview</h3>
        </div>

        <div className='d-flex flex-wrap'>
            <div className="col-12 col-md-8">
                <div style={{ height: "100%" }}>
                    <Chart chartType={line.chartType} options={line.options} style={{ margin: "0 auto" }} width="100%" height="100%" data={line.data} />
                </div>
            </div>

            <div className="col-12 col-md-4">
                <div className="p-2">
                    <div className="pie-sect">
                        <Chart chartType={pie.chartType} options={pie.options} style={{ margin: "0 auto" }} width="100%" height="400px" data={pie.data} />
                    </div>

                    <div className="bar-sect">
                        <Chart chartType={bar.chartType} options={bar.options} style={{ margin: "0 auto", padding: "0 10px" }} width="100%" height="400px" data={bar.data} />
                    </div>
                </div>
            </div>
        </div>

        <div className='team-overview'>
            <Team inline={true} />
        </div>

        <div className="client-overview">
            <Clients inline={true} />
        </div>

        {/* <div className='d-flex'>
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
        </div> */}
      </>
  )
}

export default Mainboard