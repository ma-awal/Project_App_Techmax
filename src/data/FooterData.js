import { v4 as uuidv4 } from 'uuid';
const FooterData = [
  {
    links: [
      { name: 'IT Solution', path: '/tab' },
      { name: 'Web Development', path: '/tab' },
      { name: 'Networking Service', path: '/tab' },
      { name: 'Seo Optimization', path: '/tab' },
      { name: 'App Optimization', path: '/tab' },
    ],
  },
  {
    links: [
      { id: uuidv4(), name: 'About Us', path: '/about' },
      { id: uuidv4(), name: 'Contact us', path: '/contact' },
      { id: uuidv4(), name: 'Our Blog', path: '/blog' },
      { id: uuidv4(), name: 'Term & Conditions', path: '/term' },
      { id: uuidv4(), name: 'Privecy & Policy', path: '/Privecy' },
    ],
  },
];

export default FooterData;
