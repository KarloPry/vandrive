'use client'

import DCardPricing from '@/components/DCardPricing'
import { LPContactUS } from '@/components/LPContactUs'
import { LPFooter } from '@/components/LPFooter'
import { LPLogo } from '@/components/LPLogo'
import LPNavBar from '@/components/LPNavBar'
import { LPTestimonial } from '@/components/LPTestimonial'
import Vanlejandro from '@/components/DHeader'
import React from 'react'

const page = () => {
  return (
    <>
        <LPNavBar/>
        <Vanlejandro/>
        <LPLogo/>
        <h1 className='text-center font-bold text-6xl text-blue-950'>Planes de Precios</h1>
        <DCardPricing/>
        <LPTestimonial/>
        <LPContactUS/>
        <LPFooter/>
    </>
  )
}

export default page