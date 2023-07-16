import React from 'react';
import './blog.css';
import PropCard from '../../components/PropCard/PropCard';
import img from '../../assets/page-title-bg-3.jpg';
import BlogCard from '../../components/BlogCard/BlogCard';
import BlogData from '../../data/BlogData';
const Blog = () => {
  return (
    <main>
      <PropCard name={'Blog'} link={'Home'} img={img} />
      <BlogCard BlogData={BlogData} />
    </main>
  );
};

export default Blog;
