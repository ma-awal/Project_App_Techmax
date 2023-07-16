import { v4 as uuidv4 } from 'uuid';
import choos1 from '../assets/choose-1.png';
import choos2 from '../assets/choose-2.png';

const ChooseData = [
  {
    id: uuidv4(),
    img: choos1,
    heading: 'Creating Website Solutions',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    list: [
      { info: 'How are you' },
      { info: 'How are you' },
      { info: 'How are you' },
      { info: 'How are you' },
      { info: 'How are you' },
      { info: 'How are you' },
    ],
  },
  {
    id: uuidv4(),
    img: choos2,
    heading: 'Creating Website Solutions',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    list: [
      { info: 'How are you' },
      { info: 'How are you' },
      { info: 'How are you' },
      { info: 'How are you' },
      { info: 'How are you' },
      { info: 'How are you' },
    ],
    order1: 'order-1',
    order2: 'order-2',
  },
];

export default ChooseData;
