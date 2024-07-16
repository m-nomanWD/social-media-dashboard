import React from 'react'
import { overViewdata } from '../../data'
import OverviewStrip from './OverviewStrip'


export default function OverviewContainer() {

  return (
    <>
      <h1 className='text-2xl font-bold my-10 text-neutral_light_dark_grayish_blue_text'>Overview - Today</h1>
      <div className='flex flex-wrap  justify-start gap-6 '>

        {
          overViewdata.map((singleData, index) => {
            return <OverviewStrip key={index} singleData={singleData} />
          })
        }


      </div></>

  )
}
