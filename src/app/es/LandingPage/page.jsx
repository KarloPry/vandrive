'use client'

import DCardPricing from '@/components/DCardPricing'
import { LPContactUS } from '@/components/LPContactUs'
import { LPFooter } from '@/components/LPFooter'
import { LPHeader } from '@/components/LPHeader'
import { LPLogo } from '@/components/LPLogo'
import LPNavBar from '@/components/LPNavBar'
import { LPPrincing } from '@/components/LPPricing'
import { LPTestimonial } from '@/components/LPTestimonial'
import Vanlejandro from '@/components/DHeader'
import React from 'react'

const page = () => {
  return (
    <>
        <LPNavBar/>
        <Vanlejandro/>
        <LPLogo/>
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-blue-950">Planes de Precios</h1>
        </div>
        <DCardPricing/>
        <LPTestimonial/>
        <LPContactUS/>
        <LPFooter/>
    </>
  )
}

export default page