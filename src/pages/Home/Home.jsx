import React from 'react';
import './home.css';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import ServiceData from '../../data/ServiceData';
import ChooseData from '../../data/ChooseData';
import PropsChoose from '../../components/PropsChoose/PropsChoose';
import AboutCount from '../../components/AboutCount/AboutCount';
import AboutTeam from '../../components/AboutTeam/AboutTeam';
import AboutClient from '../../components/AboutClient/AboutClient';
import TeamData from '../../data/TeamData';
import ClientData from '../../data/ClientData';
import HomeCard from '../../components/HomeCard/HomeCard';
import BlogCard from '../../components/BlogCard/BlogCard';
import BlogData from '../../data/BlogData';
import HomeSlide from '../../components/HomeSlide/HomeSlide';
import TrustData from '../../data/TrustData';
const Home = () => {
  const newServiceData = ServiceData.slice(0, 3);
  const newBlogData = BlogData.slice(0, 3);
  const choos1 = ChooseData[0];
  const choos2 = ChooseData[1];
  console.log(choos1);
  return (
    <>
      <HomeBanner />
      <ServiceCard data={newServiceData} />
      <PropsChoose data={choos1} key={choos1.id} />
      <PropsChoose data={choos2} key={choos2.id} imageFirst={'true'} />
      <AboutCount />
      <AboutTeam data={TeamData} />
      <AboutClient data={ClientData} />
      <HomeCard />
      <BlogCard BlogData={newBlogData} logic={'true'} />
      <HomeSlide data={TrustData} />
    </>
  );
};

export default Home;
