import { v4 as uuidv4 } from 'uuid';
const PriceData = [
  {
    id: uuidv4(),
    heading: 'Start up',
    price: '25',
    list: [
      { li: 'Web development' },
      { li: 'Personal use' },
      { li: 'Unlimited Use,' },
      { li: 'Projects Manegement,' },
      { li: ' 24/7 support' },
      { li: 'Free cancelation,' },
      { li: 'Basic Support On Github' },
      { li: 'Help Center Access,' },
    ],
  },
  {
    id: uuidv4(),
    heading: 'Standerd',
    price: '25',
    list: [
      { li: 'Web development' },
      { li: 'Personal use' },
      { li: 'Unlimited Use,' },
      { li: 'Projects Manegement,' },
      { li: ' 24/7 support' },
      { li: 'Free cancelation,' },
      { li: 'Basic Support On Github' },
      { li: 'Help Center Access,' },
    ],
  },
  {
    id: uuidv4(),
    heading: 'Premium',
    price: '25',
    list: [
      { li: 'Web development' },
      { li: 'Personal use' },
      { li: 'Unlimited Use,' },
      { li: 'Projects Manegement,' },
      { li: ' 24/7 support' },
      { li: 'Free cancelation,' },
      { li: 'Basic Support On Github' },
      { li: 'Help Center Access,' },
    ],
  },
];

export default PriceData;
