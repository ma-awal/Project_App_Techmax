import React from 'react';
import './about.css';
import PropCard from '../../components/PropCard/PropCard';
import AboutMission from '../../components/AboutMission/AboutMission';
import AboutTeam from '../../components/AboutTeam/AboutTeam';
import TeamData from '../../data/TeamData';
import AboutCount from '../../components/AboutCount/AboutCount';
import AboutClient from '../../components/AboutClient/AboutClient';
import ClientData from '../../data/ClientData';
import TrustData from '../../data/TrustData';
import AboutTrust from '../../components/AboutTrust/AboutTrust';
import img from '../../assets/page-title-bg.jpg';
const About = () => {
  return (
    <main>
      <PropCard name={'About'} link={'Home'} img={img} />
      <AboutMission />
      <AboutCount />
      <AboutTeam data={TeamData} />
      <AboutClient data={ClientData} />
      <AboutTrust data={TrustData} />
    </main>
  );
};

export default About;
