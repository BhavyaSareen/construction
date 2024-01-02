import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import GettingStarted from '../Components/GettingStarted'
import ConstSection from '../Components/ConstSection'
import ServicesSection from '../Components/ServicesSection'
import AltServiceSection from '../Components/AltServiceSection'
import FeatureSection from '../Components/FeatureSection'
import ProjectSection from '../Components/ProjectSection'
import Testimonial from '../Components/Testimonial'
import Blog from '../Components/Blog'
import Footer from '../Components/Footer'

export default function HomePage() {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <div id='main'>
        <GettingStarted/>
        <ConstSection/>
        <ServicesSection/>
        <AltServiceSection/>
        <FeatureSection/>
        <ProjectSection/>
        <Testimonial/>
        <Blog/>
        <Footer/>

        </div>
    </div>
  )
}
