import React from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Pagination, Navigation } from "swiper"
import { useHomeBannerQuery } from "../../hooks/useHomebanner"

function Carousel() {
  const data = useHomeBannerQuery()
  console.log(data)
  const Content = data.wpPage.content
  const BannerImg = data.wpPage.featuredImage.node.localFile.publicURL

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="max-w-[85rem] mx-auto mt-[7rem] mb-[1rem] md:mb-[3rem]   lg:px-7  h-[full] clsHomeBanner">
            <div className="">
            <div class="xl:flex items-center sm:block px-3">
              <div className="xl:w-[46%] sm:w-[100%]">
                <div id="clshomeheading"
                  className="text-left txl:text-left font-bold  text-gray-800 text-[27px] lg:text-[40px]  md:text-[35px] lg:leading-tight clsHomeBannertitle"
                  dangerouslySetInnerHTML={{ __html: Content }}
                />
                <div className=" max-w-[85rem] mx-auto flex justify-center pt-2 md:pt-4 clsteambtnwrapper ">
                                  <Link to="/careers"><button class="clsteambtn-2 justify-center items-center  bg-[#a31e22] mt-2 hover:bg-[#333] text-[#fff] font-semibold hover:text-[#fff] py-2 px-6 border hover:border-[#33] rounded-md "href="#">Join Our Team</button></Link>


                </div>


              
              </div>
              <div class=" ml-8  xl:w-[53%] md:-w-[100%] md:pt-[50px]">
                <img
                  class="w-full rounded-md"
                  src={BannerImg}
                  alt="Hero-img"
                />
              </div>
            </div>

            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
export default Carousel
