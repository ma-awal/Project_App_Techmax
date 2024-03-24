import React from 'react';
import PropCard from '../../../components/PropCard/PropCard';
import img from '../../../assets/banner.png';
import FaqQuestion from '../../../components/FaqQuestion/FaqQuestion';
import FaqData from '../../../data/FaqData';
const PageFaq = () => {
  return (
    <section className="p-faq ">
      <PropCard name={"FAQ'S"} link={'Home'} img={img} />
      <div className="container py-3 py-md-4 py-lg-5">
        <FaqQuestion FaqData={FaqData} />
      </div>
    </section>
  );
};

export default PageFaq;
