import React from 'react'
import CareersMain from './CareersMain'
import WhyBeeGlad from './WhyBeeGlad'
import CareerCulture from './CareerCulture'
import OpenPositions from './OpenPositions'
import Life from './Life'
import BenefitsPerks from './BenefitsPerks'
import ClientsReview from './ClientsReview'

const page = () => {
  return (
    <div className='text-white'>
      <CareersMain />
      <WhyBeeGlad />
      <CareerCulture />
      <OpenPositions/>
      <Life/>
      <BenefitsPerks/>
      <ClientsReview />
    </div>
  )
}

export default page
