

import { LPHeader } from '@/components/LPHeader'
import { LPLogo } from '@/components/LPLogo'
import LPNavBar from '@/components/LPNavBar'
import { LPPrincing } from '@/components/LPPricing'
import React from 'react'

const page = () => {
  return (
    <>
        <LPNavBar/>
        <LPHeader/>
        <LPLogo/>
        <LPPrincing/>
    </>
  )
}

export default page