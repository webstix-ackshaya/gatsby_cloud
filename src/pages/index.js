import React from "react"
import Header from "../components/Header/Header.js"
import { Helmet } from "react-helmet"

import Carousel from "../components/Carousel/Carousel.js"
// // // import AboutUsOne from "../components/AboutUs/AboutOne"
import AboutUsTwo from "../components/AboutUs/AboutTwo"

import ContactUs from "../components/ContactUs/ContactUs"
import Footer from "../components/Footer/Footer.js"
import Homegallery from "../components/HomeGallery/Homegallery.js"

export default function index() {
  return (
    <>
     <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Webstix Design Private Limited - wdpl.in</title>
          <link rel="canonical" href="https://wdpl.gatsbyjs.io/" />
        </Helmet>
      </div>
      <Header />
      <div clasName="clsHomeContainer">
        <Carousel />
        <AboutUsTwo />
        <Homegallery />
        <div class="bg-[url('/images/polygon.png')]">
          <ContactUs />
          </div>
        
      </div>
      <Footer />
    </>
  )
}
