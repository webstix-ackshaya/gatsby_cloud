import React from "react"
import Header from "../components/Header/Header.js"
import Footer from "../components/Footer/Footer.js"
import OrganizationChart from "../components/OrgChart/OrganizationChart.js"
import { Helmet } from "react-helmet"

export default function Organization() {
  return (
    <>
    <div className="application">
<Helmet>
  <meta charSet="utf-8" />
  <title>Organization - wdpl.in</title>
  <link rel="canonical" href="https://wdpl.gatsbyjs.io/" />
</Helmet>
</div>
      <Header />
      <OrganizationChart />
      <Footer />
    </>
  )
}
