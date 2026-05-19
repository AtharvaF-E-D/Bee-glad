import React from 'react'
import PortfolioMain from './PortfolioMain'
import PortfolioWhat from './PortfolioWhat'
import PortfolioServices from './PortfolioServices'
import PortfolioFeatured from './PortfolioFeatured'

const page = () => {
  return (
    <div className='text-white'>
      <PortfolioMain/>
      <PortfolioWhat/>
      <PortfolioServices/>
      <PortfolioFeatured/>
    </div>
  )
}

export default page
