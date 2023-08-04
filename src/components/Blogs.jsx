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
                <div className="p-8">
                    <h3 className="font-bold text-2xl my-1">Figma 3D</h3>
                    <p className="text-gray-600 text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                <img
                    className="w-full h-[200px] object-cover"
                    src={figmaLogo}
                    alt="blog"
                />
                <div className="p-8">
                    <h3 className="font-bold text-2xl my-1">Figma 3D</h3>
                    <p className="text-gray-600 text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                <img
                    className="w-full h-[200px] object-cover"
                    src={figmaLogo}
                    alt="blog"
                />
                <div className="p-8">
                    <h3 className="font-bold text-2xl my-1">Figma 3D</h3>
                    <p className="text-gray-600 text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                <img
                    className="w-full h-[200px] object-cover"
                    src={figmaLogo}
                    alt="blog"
                />
                <div className="p-8">
                    <h3 className="font-bold text-2xl my-1">Figma 3D</h3>
                    <p className="text-gray-600 text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    </p>
                </div>
            </div>



            </div>
        </div>
    </div>
  )
}

export default Blogs
