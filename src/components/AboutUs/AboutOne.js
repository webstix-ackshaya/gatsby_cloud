import { Link } from "gatsby"
import React from "react"
import { useAboutQuery } from "../../hooks/useAboutQuery"
// import ReactReadMoreReadLess from "react-read-more-read-less"

export default function AboutOne() {
  const data = useAboutQuery()
  // const title = data.wpPage.blocks[0].originalContent
  const title = data.wpPage.title
  // const Content = data.wpPage.blocks[2].originalContent
  const Content = data.wpPage.content

  return (

    <section class="  max-w-[85rem] mx-auto pt-[7rem] lg:px-8 pb-[100px]">

      <div class="flex flex-wrap clsAboutOne">
        <h2
          class="text-3xl font-bold mb-6 text-[#333] text-[40px] capitalize pt-4"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>

        <div class="clsAboutContent ">

          <p
            className="leading-7 mt-[1rem] text-[17px] "
            dangerouslySetInnerHTML={{ __html: Content }}
          >
          </p>
        </div>
        <Link to="/our-team">
          <button className="bg-[#fff] mr-5 hover:bg-[#333] text-[#333] rounded-md font-semibold hover:text-[#fff] py-[0.5rem] px-[1.2rem] text-[14px]  border border-black">
            Our Team
          </button>
        </Link>
        <Link to="/careers">
          <button className="bg-[#fff] rounded-md  hover:bg-[#333] text-[#333] font-semibold hover:text-[#fff] py-[0.5rem] px-[1.2rem] text-[14px]  border border-black">
            Join Us
          </button>
        </Link>
        </div>
    </section>      

  )
}
