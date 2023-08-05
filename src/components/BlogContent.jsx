import React from 'react'
import figmaLogo from '../assets/figma-3d-logo.png'

function BlogContent() {

    const blog = {
        id: 1,
        title: "10 Days of Solidity",
        description: "Learn on how to learn Solidity in 10 Days!",
        coverImg: figmaLogo,
        content: "Intro to Web3 Day 1: Intro to Web 3 What is Web3 To put it simply, Web3 is Web2++. Intro to Web 3 What is Web3 To Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae voluptas temporibus voluptatibus neque quia nisi quae maiores minus quo corporis... put it simply, Web3 is Web2++. Intro to Web 3 What is Web3 To put it simply, Web3 is Web2++. Intro to Web 3 What is Web3 To put it simply, Web3 is Web2++. ",

        'authorName':'John Doe',
        'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'authorDesc':'Web Developer'
    }



  return (
    <div className="w-full pb-10 bg-[#f9f9f9]">
        <div className="max-w-[1240px] mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 gap-x-8 gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">
                <div className="col-span-2 gap-x-8 gap-y-8">
                    <img className="h-56 w-full object-cover" src={blog.coverImg} alt={blog.description} />
                    <h1 className="font-bold text-2xl my-1 pt-5">{blog.title}</h1>
                    <div className="pt-5">
                        <p>{blog.content}</p>
                    </div>
                </div>

                <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]">
                    <img className="p-2 w-32 h-32 rounded-full mx-auto object-cover" src={blog.authorImg} />
                    <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">
                        {blog.authorName}
                    </h1>
                    <p className="text-center text-gray-900 font-medium">{blog.authorDesc}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogContent