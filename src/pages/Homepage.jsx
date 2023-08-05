import React from 'react'
import { Navbar, Blogs, Footer } from '../components';

const Homepage = ({ blogs }) => {
  console.log("Homepage", blogs);

  return (
    <div>
      <Navbar />
      <Blogs />
      <Footer />
    </div>
  )
}

export default Homepage