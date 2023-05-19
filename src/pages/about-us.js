import React from "react"
import AboutOne from "../components/AboutUs/AboutOne"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import { Helmet } from "react-helmet"

export default function AboutUs() {
  return (
    <>

    
<div className="application">
<Helmet>
  <meta charSet="utf-8" />
  <title>About Us - wdpl.in</title>
  <link rel="canonical" href="https://wdpl.gatsbyjs.io/" />
</Helmet>
</div>


      <Header />
      <AboutOne />
      <Footer />
    </>
  )
}
