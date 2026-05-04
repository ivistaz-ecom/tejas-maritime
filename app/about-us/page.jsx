import React from 'react'
import HeroBanner from '@/components/about-us/HeroBanner'
import StickyNav from '@/components/about-us/StickyNav'
import AboutSection from '@/components/about-us/AboutSection'
import Leader from '@/components/about-us/Leader'
import StrengthSection from '@/components/about-us/StrengthSection'
import Philosophy from '@/components/about-us/Philosophy'
const AboutUsPage = () => {
  return (
    <div>
        <HeroBanner />
        <StickyNav />
        <AboutSection />
        <Leader />
        <StrengthSection />
        <Philosophy />
    </div>
  )
}

export default AboutUsPage