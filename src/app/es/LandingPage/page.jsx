'use client'

import { LPContactUS } from '@/components/LPContactUs'
import { LPFooter } from '@/components/LPFooter'
import { LPHeader } from '@/components/LPHeader'
import { LPLogo } from '@/components/LPLogo'
import LPNavBar from '@/components/LPNavBar'
import { LPPrincing } from '@/components/LPPricing'
import { LPTestimonial } from '@/components/LPTestimonial'
import Vanlejandro from '@/components/Vanlejandro'
import React from 'react'

const page = () => {
  return (
    <>
        <LPNavBar/>
        <Vanlejandro/>
        <LPLogo/>
        <LPPrincing/>
        <LPTestimonial/>
        <LPContactUS/>
        <LPFooter/>
    </>
  )
}

export default page