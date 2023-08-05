import React from 'react'
import figmaLogo from '../assets/figma-3d-logo.png'
import { useParams } from 'react-router-dom'

function BlogContent() {

    const { id } = useParams() // comes automatically from the url

    const blogs = [
        {
            id: 1,
            title: "Why young workers are live-quitting on TikTok",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            coverImg: figmaLogo,
            content: `Even years into the Great Resignation, workers continue to leave their jobs in droves. While plenty of employees are still sending off official resignation emails to bosses, younger workers are increasingly taking a different tack: live quitting.

            In July 2021, a clip of UK McDonald's workers quitting mid-shift went viral - and now TikTok is awash with users sharing real-time footage of the moment they told their bosses 'I quit'. Sometimes tense, often funny and nearly always compelling, these short video clips are attracting thousands - sometimes millions - of views on the social media platform.
            `,
            'authorName':'John Doe',
            'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
            'authorDesc':'Web Developer'
        },
        {
            id: 2,
            title: "Man is charged with cheating Home Depot stores out of $300,000 with door-return scam",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            coverImg: figmaLogo,
            content: `
            PROVIDENCE, R.I. (AP) — A Connecticut man was given nearly $300,000 in fraudulent Home Depot credit by walking into stores in several states, taking expensive doors and then returning them without a receipt, federal prosecutors allege.

            Alexandre Henrique Costa-Mota, 26, of West Hartford, Connecticut, was detained without bail after a judge entered not-guilty pleas on his behalf this week in federal court in Rhode Island to wire fraud and conspiracy to commit wire fraud, the U.S. attorney's office in Providence said in a statement Wednesday.`,
            'authorName':'John Doe',
            'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
            'authorDesc':'Web Developer'
        },
        {
            id: 3,
            title: "Shaquille O’Neal Rips Off His Shirt During Workout to Reveal His Insanely Toned Abs: Watch",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            coverImg: figmaLogo,
            content: `
            Shaquille O’Neal may have retired from the NBA in 2011, but he’s not slowing down yet as evidenced by his latest gym workout.

            “In my former life I was @philheath we almost there @rocshabazz that @novexbiotech #gf9 baby,” O'Neal, 51, captioned a Thursday, August 3, Instagram video as he prepared to lift weights.
            `,
            'authorName':'John Doe',
            'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
            'authorDesc':'Web Developer'
        },
    ]

    let blog = blogs.filter((blog) => blog.id == id)
    blog = blog[0]
    console.log(blog) // returns an array of one object

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