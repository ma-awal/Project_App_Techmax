import { v4 as uuiv4 } from 'uuid';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import t1 from '../assets/team-1.jpg';
import t2 from '../assets/team-2.jpg';
import t3 from '../assets/team-3.jpg';
import t4 from '../assets/team-4.jpg';
const TeamData = [
  {
    id: uuiv4(),
    name: 'Lueis Lucaus',
    title: 'Web Developer',
    img: t1,
    links: [
      { icon: <FaFacebook />, url: 'http//:www.facebook.com' },
      { icon: <FaTwitter />, url: 'http//:www.twitter.com' },
      { icon: <FaInstagram />, url: 'http//:www.instagram.com' },
    ],
  },
  {
    id: uuiv4(),
    name: 'Lueis Lucaus',
    title: 'Web Developer',
    img: t2,
    links: [
      { icon: <FaFacebook />, url: 'http//:www.facebook.com' },
      { icon: <FaTwitter />, url: 'http//:www.twitter.com' },
      { icon: <FaInstagram />, url: 'http//:www.instagram.com' },
    ],
  },
  {
    id: uuiv4(),
    name: 'Lueis Lucaus',
    title: 'Web Developer',
    img: t3,
    links: [
      { icon: <FaFacebook />, url: 'http//:www.facebook.com' },
      { icon: <FaTwitter />, url: 'http//:www.twitter.com' },
      { icon: <FaInstagram />, url: 'http//:www.instagram.com' },
    ],
  },
  {
    id: uuiv4(),
    name: 'Lueis Lucaus',
    title: 'Web Developer',
    img: t4,
    links: [
      { icon: <FaFacebook />, url: 'http//:www.facebook.com' },
      { icon: <FaTwitter />, url: 'http//:www.twitter.com' },
      { icon: <FaInstagram />, url: 'http//:www.instagram.com' },
    ],
  },
];

export default TeamData;
