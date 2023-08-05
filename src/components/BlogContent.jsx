import React from 'react'
import figmaLogo from '../assets/figma-3d-logo.png'

function BlogContent() {
  return (
    <div className="w-full pb-10 bg-[#f9f9f9]">
        <div className="max-w-[1240px] mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 gap-x-8 gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">
                <div className="col-span-2 gap-x-8 gap-y-8">
                    <img className="h-56 w-full object-cover" src={figmaLogo} alt="blog image" />
                    <h1 className="font-bold text-2xl my-1 pt-5">Blog Title</h1>
                    <div className="pt-5">
                        <p>This is the blog content</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogContent