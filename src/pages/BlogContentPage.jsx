import React from 'react'
import { Navbar, BlogContent, Footer } from '../components';

const BlogContentPage = ({ blogs }) => {
  console.log("BlogContentPAge", blogs);

  return (
    <div>
      <Navbar />
      <BlogContent blogs={blogs} />
      <Footer />
    </div>
  )
}

export default BlogContentPage