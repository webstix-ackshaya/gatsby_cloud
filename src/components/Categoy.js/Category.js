import React from "react"
import { Link } from "gatsby"
import { FaArrowRight } from "react-icons/fa"

const Category = ({ catId, categories }) => {
  const sortedCategories = [...categories].sort((x, y) => {
    if (x.node.slug === "our-team") return -1
    if (y.node.slug === "our-team") return 1
    return 0
  })

  return (
    <>
      <div className="flex flex-wrap">
      <Link to="/our-team">
                    <button
                    type="button"
                    class="rounded-lg text-[12px]  text-center inline-flex items-center bg-[#fff]  hover:bg-[#333] text-[#333] font-semibold hover:text-[#fff] py-[7px] px-[14px] border border-black mr-3 mb-6"
                activeClassName="cat-active"
                  >
                    All 
                    <div className="flex items-center">
                  <span className="pl-2">
                    <FaArrowRight />
                  </span>
                </div>

                  </button>
                  </Link>

        {sortedCategories.map(cat => {
          if (cat.node.count !== 0) {
            return cat.node.slug !== "uncategorized" ? (
              <Link
                to={cat.node.uri}
                key={cat.node.id}
                class="rounded-lg text-[12px]  text-center inline-flex items-center bg-[#fff]  hover:bg-[#333] text-[#333] font-semibold hover:text-[#fff] py-[7px] px-[14px] border border-black mr-3 mb-6"
                activeClassName="cat-active"
              >
                <div className="flex items-center">
                  <span dangerouslySetInnerHTML={{ __html: cat.node.name }} />
                  <span className="pl-2">
                    <FaArrowRight />
                  </span>
                </div>
              </Link>
            ) : null
          }

          return null
        })}
      </div>
    </>
  )
}

export default Category
