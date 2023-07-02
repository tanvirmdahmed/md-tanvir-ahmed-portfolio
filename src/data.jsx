import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/learning-camp.png';
import Work2 from './assets/kids.png';
import Work3 from './assets/spicy.png';
// import Work4 from './assets/project-4.jpeg';
// import Work5 from './assets/project-5.jpg';
// import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Md. Tanvir',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Ahmed',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '27 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Bangladeshi',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Not Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Dhaka, Bangladesh',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+8801516124277',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'tanvirhemel09@gmail.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: 'tanvirhemel09',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'Bengali, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '8+',
    title: 'Months of <br /> Experience',
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '0+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '0+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  // {
  //   id: 1,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2018 - PRESENT',
  //   title: 'Web Developer <span> Envato </span>',
  //   desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  // },

  // {
  //   id: 2,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2013 - 2018',
  //   title: 'UI/UX Designer <span> Themeforest </span>',
  //   desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  // },

  // {
  //   id: 3,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2005 - 2013',
  //   title: 'Consultant <span> Videohive </span>',
  //   desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  // },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022',
    title: 'MBA <span> Bangladesh University of Professionals </span>',
    session: '2020-22',
    duration: '2 years',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018',
    title: 'BBA <span> National University of Bangladesh </span>',
    session: '2014-18',
    duration: '4 years',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2014',
    title: 'HSC <span> BN College, Dhaka </span>',
    session: '2012-14',
    duration: '2 years',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html5',
    percentage: '90',
  },

  {
    id: 2,
    title: 'CSS3',
    percentage: '85',
  },

  {
    id: 3,
    title: 'Tailwind',
    percentage: '85',
  },

  {
    id: 4,
    title: 'Bootstrap',
    percentage: '75',
  },

  {
    id: 5,
    title: 'JavaScript',
    percentage: '75',
  },

  {
    id: 6,
    title: 'React JS',
    percentage: '70',
  },

  {
    id: 7,
    title: 'Node JS',
    percentage: '50',
  },

  {
    id: 8,
    title: 'Express JS',
    percentage: '55',
  },
  {
    id: 9,
    title: 'MongoDb',
    percentage: '55',
  },
  {
    id: 10,
    title: 'Firebase',
    percentage: '65',
  },
  {
    id: 11,
    title: 'Github',
    percentage: '70',
  },
  {
    id: 10,
    title: 'Figma',
    percentage: '60',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Learning Camp - Gym platform',
    usedTech: ['Tailwind CSS', 'React JS', 'Express JS', 'MongoDb', 'Firebase'],
    live: 'https://learning-capm.web.app/',
    client: 'https://github.com/tanvirmdahmed/learning-camp-client',
    server: 'https://github.com/tanvirmdahmed/lerning-camp-server',
    details: 'Learning Camp is a physical exercise learning platform. Students can enrol a course by paying the money using Stripe payment method and many more...'
  },

  {
    id: 2,
    img: Work2,
    title: 'Kids - A toy selling website',
    usedTech: ['Tailwind CSS', 'React JS', 'Express JS', 'MongoDb', 'Firebase'],
    live: 'https://toy-biz.web.app/',
    client: 'https://github.com/tanvirmdahmed/kids-client',
    server: 'https://github.com/tanvirmdahmed/kids-server',
    details: 'Kids is a toy selling multi vendor website where customer can buy toys by sub-categories. Anyone can upload and manage his toy and monitor his selling.'
  },

  {
    id: 3,
    img: Work3,
    title: 'Spicy - Find top chef',
    usedTech: ['Tailwind CSS', 'React JS', 'Express JS', 'Firebase'],
    live: 'https://chef-recipe-hunter-clien-41d0d.web.app/',
    client: 'https://github.com/tanvirmdahmed/spicy-client',
    server: 'https://github.com/tanvirmdahmed/spicy-server',
    details: 'Spicy is a chef finding website where anyone can shortlist top chefs by the number of recipes, total number of like given by customers and many more.'
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
