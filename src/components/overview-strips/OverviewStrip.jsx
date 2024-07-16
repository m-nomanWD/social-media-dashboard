import React from 'react'
import iconUp from '/images/icon-up.svg'
import iconDown from '/images/icon-down.svg'

export default function OverviewStrip({ singleData }) {


 const { metric, value, percentage, svgIcon, status } = singleData
 return (
  <div className='flex flex-col justify-center p-4 lg:max-w-[23%] w-full md:w-[31%] sm:w-[46%] box-border bg-neutral_light_light_grayish_blue_card_bg dark:bg-neutral_dark_desaturated_blue_card_bg rounded-md' >
   <div className='flex justify-between mb-4 text-neutral_light_dark_grayish_blue_text font-semibold dark:text-light_theme_toggle'>
    <p>{metric}</p>
    <img src={svgIcon} alt="" />
   </div>
   <div className='flex justify-between'>
    <h1 className='font-bold text-3xl'>{value}</h1>
    <div className='flex items-center' >
     <img src={status ? iconUp : iconDown} alt="" className='mr-1' />
     <b className={status ? "text-general_lime_green" : 'text-general_bright_red'}>{percentage} </b></div>
   </div>
  </div>
 )
}
