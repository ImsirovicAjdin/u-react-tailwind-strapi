import React from 'react'
import figmaLogo from '../assets/figma-3d-logo.png'

const Blogs = () => {

    const blogs = [
        {
            id: 1,
            title: "Figma 3D part 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            coverImg: figmaLogo
        },
        {
            id: 2,
            title: "Figma 3D part 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            coverImg: figmaLogo
        },
        {
            id: 3,
            title: "Figma 3D part 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            coverImg: figmaLogo
        },
        {
            id: 4,
            title: "Figma 3D part 4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            coverImg: figmaLogo
        },
    ]


  return (
    <div className="w-full bg-[#f9f9f9] py-[50px]">
        <div className="max-w-[1240px] mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 px-4 text-black">

                {blogs.map((blog) => (
                    <div className="bg-white rounded-xl overflow-hidden drop-shadow-md" key={blog.id}>
                        <img
                            className="w-full h-[200px] object-cover"
                            src={blog.coverImg}
                            alt="blog"
                        />
                        <div className="p-8">
                            <h3 className="font-bold text-2xl my-1">{blog.title}</h3>
                            <p className="text-gray-600 text-xl">
                                {blog.description}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </div>
  )
}

export default Blogs
