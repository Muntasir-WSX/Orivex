import React from 'react'
import Hero from './Banner/Hero'
import Skills from './Skills/Skills'
import Courses from './Courses/Courses'
import OrivesKits from './OrivexKits/OrivesKits'
import Testimonial from './Testimonials/Testimonial'
import About from './About/About'


export default function Home() {
  return (
    <div>
        <Hero></Hero>
        <Skills></Skills>
        <Courses></Courses>
        <About></About>
        <OrivesKits></OrivesKits>
        <Testimonial></Testimonial>
        

    </div>
  )
}
