import React from 'react'
import { profieData } from '../../data'
import ProfileCard from './ProfileCard'

export default function CardContainer() {

 return (
  <div className=' flex lg:flex-nowrap gap-6 flex-wrap  justify-start sm:-mt-24 -mt-20 '>
   {
    profieData.map((profile, index) => {
     return <ProfileCard key={index} profile={profile} />
    })
   }

  </div>
 )
}
