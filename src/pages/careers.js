import React from "react"
import Header from "../components/Header/Header"
import Openings from "../components/Openings/Openings"
import Footer from "../components/Footer/Footer"
import { Helmet } from "react-helmet"

export default function careers() {
  return (
    <>

    
<div className="application">
<Helmet>
  <meta charSet="utf-8" />
  <title>Careers - wdpl.in</title>
  <link rel="canonical" href="https://wdpl.gatsbyjs.io/" />
</Helmet>
</div> 

      <Header />
      <Openings />
      <Footer />
    </>
  )
}
