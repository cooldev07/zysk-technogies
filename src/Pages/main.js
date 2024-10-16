import React from 'react'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import Testimonial from '../Components/Testimonial'
import FeaturesOne from '../Components/FeaturesOne'
import FeaturesTwo from '../Components/FeaturesTwo'
import Faq from '../Components/Faq'
import Blog from '../Components/Blog'
import Cta from '../Components/Cta'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <FeaturesOne />
            <Testimonial />
            <FeaturesTwo />
            <Faq />
            <Blog />
            <Cta />
            <Footer />
        </>
    )
}

export default Home