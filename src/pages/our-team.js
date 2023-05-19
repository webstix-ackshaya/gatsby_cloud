import React from "react"
import Header from "../components/Header/Header.js"
import Footer from "../components/Footer/Footer.js"
import { Team } from "../components/Team/Team.js"
import { Helmet } from "react-helmet"

export default function TeamDetails() {
  return (
    <>


    
<div className="application">
<Helmet>
  <meta charSet="utf-8" />
  <title>Our Team - wdpl.in</title>
  <link rel="canonical" href="https://wdpl.gatsbyjs.io/" />
</Helmet>
</div>
      <Header />
      <Team />
      <Footer />
    </>
  )
}
