import React from "react"
import { useOrganizationQuery } from "../../hooks/useOrganizationQuery"
import { Link } from "gatsby"

export default function OrganizationChart() {
  const data = useOrganizationQuery()
  const Image = data.wpPage.featuredImage.node.localFile.publicURL

  return (
    <div>
      <div className="px-[1%]  container mx-auto" id="organization-chart">
        <img
          src={Image}
          alt="org-chart"
          className=" w-full object-fill pt-[100px] pb-[10px]"
        />
      </div>
      <div className="flex items-center justify-center pb-[70px]">
        <div>
          <Link to="/about-us">
            <button class="bg-[#fff] mt-4 rounded-md mr-6 hover:bg-[#333] text-[#333] font-semibold hover:text-[#fff] py-[0.5rem] px-[1.2rem] text-[14px]  border border-black">
              About Us
            </button>
          </Link>
        </div>
        <div>
          <Link to="/careers">
            <button class="bg-[#fff] mt-4 rounded-md hover:bg-[#333] text-[#333] font-semibold hover:text-[#fff] py-[0.5rem] px-[1.2rem] text-[14px]  border border-black">
              Join Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
