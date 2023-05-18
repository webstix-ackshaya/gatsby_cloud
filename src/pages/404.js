import React from "react"
import { Link } from "gatsby"
import notfound from "../images/notfound.png"

export default function NotFound() {
  return (


    <div>
    <div className="px-[10px] w-[100%] h-[280px] pt-[350px] container mx-auto clsnotfound" >
      <img
        src={notfound}
        alt="org-chart"
        className=" pb-[1px]"
      />
    <div class="mt-1">
   <u><a href="/" >Back To Home</a></u> 
    </div>
    </div>

  </div>

  )
}
