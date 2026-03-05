import React from 'react'
import CaseStudiesMain from './CaseStudiesMain'
import CaseStudiesMarquee from './CaseStudiesMarquee'
import CaseWork from './CaseWork'
import ClientsReview from '../../careers/ClientsReview'
import MarqueeComp from './MarqueeComp'

const page = () => {
  return (
    <div className="text-white bg-black">
      <CaseStudiesMain />
      <CaseStudiesMarquee/>
      <CaseWork/>
      <ClientsReview />
      <MarqueeComp />
    </div>
  )
}

export default page
