import React from 'react'
import figmaLogo from '../assets/figma-3d-logo.png'

const Blogs = () => {
  return (
    <div className="w-full bg-[#f9f9f9] py-[50px]">
        <div className="max-w-[1240px] mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 px-4 text-black">
                <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                    <img
                        className="w-full h-[200px] object-cover"
                        src={figmaLogo}
                        alt="blog"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs
