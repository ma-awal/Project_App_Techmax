import React from 'react';
import './service.css';
import img from '../../assets/page-title-bg-3.jpg';
import PropCard from '../../components/PropCard/PropCard';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import PropsChoose from '../../components/PropsChoose/PropsChoose';
import ChooseData from '../../data/ChooseData';
import ServiceData from '../../data/ServiceData';
const Service = () => {
  const choos1 = ChooseData[0];
  const choos2 = ChooseData[1];
  console.log(choos1);
  return (
    <main>
      <PropCard name={'Service'} link={'Home'} img={img} />
      <ServiceCard data={ServiceData} />
      <PropsChoose data={choos1} key={choos1.id} />
      <PropsChoose data={choos2} key={choos2.id} imageFirst={'true'} />
    </main>
  );
};

export default Service;
