import icon_nodejs from '../../images/icon_nodejs.png';
import icon_javascript from '../../images/icon_javascript.png';
import icon_css from '../../images/icon_css.png';
import icon_html from '../../images/icon_html.png';
import icon_github from '../../images/icon_github.png';
import icon_firebase from '../../images/icon_firebase.png';
import icon_express from '../../images/icon_express.png';
import icon_mongodb from '../../images/icon_mongodb.png';
import icon_reactjs from '../../images/icon_react.png';
import cert_mini_softuni_basics from '../../images/cert_mini_softuni_basics.png';
import cert_mini_softuni_fundamentals from '../../images/cert_mini_softuni_fundamentals.png';
import cert_mini_softuni_advanced from '../../images/cert_mini_softuni_advanced.png';

interface ISoftuniIcon {
  icon: any;
  title: string;
  alt: string;
}

interface ISoftuniCourse {
  name: string;
  date: string;
  grade: string;
  certificate?: {
    image: any;
    link: string;
    alt: string;
  };
  icons?: ISoftuniIcon[];
}

const iconKeys = [
  'nodejs',
  'javascript',
  'css',
  'html',
  'github',
  'firebase',
  'express',
  'mongodb',
  'reactjs',
] as const;

export const icons: { [key in typeof iconKeys[number]]: ISoftuniIcon } = {
  nodejs: {
    icon: icon_nodejs,
    title: 'NodeJS',
    alt: 'nodejs icon',
  },
  javascript: {
    icon: icon_javascript,
    title: 'JavaScript',
    alt: 'js icon',
  },
  css: {
    icon: icon_css,
    title: 'CSS',
    alt: 'css icon',
  },
  html: {
    icon: icon_html,
    title: 'HTML',
    alt: 'html icon',
  },
  github: {
    icon: icon_github,
    title: 'Git',
    alt: 'github icon',
  },
  firebase: {
    icon: icon_firebase,
    title: 'Firebase as BaaS & Auth Provider & Non-Relational Databases',
    alt: 'firebase icon',
  },
  express: {
    icon: icon_express,
    title: 'Express',
    alt: 'express icon',
  },
  mongodb: {
    icon: icon_mongodb,
    title: 'MongoDB & Mongoose',
    alt: 'firebase icon',
  },
  reactjs: {
    icon: icon_reactjs,
    title: 'ReactJS',
    alt: 'reactjs icon',
  },
};

export const softuni: ISoftuniCourse[] = [
  {
    name: 'ReactJS',
    date: 'March 2021',
    grade: '?.??',
    icons: [icons.reactjs],
  },
  {
    name: 'JS Back-End',
    date: 'January 2021',
    grade: '6.00',
    certificate: {
      image: cert_mini_softuni_advanced,
      link: 'https://softuni.bg/certificates/details/100840/94bd248c',
      alt: 'cert_mini_softuni_backend',
    },
    icons: [icons.nodejs, icons.express, icons.mongodb],
  },
  {
    name: 'JavaScript Applications',
    date: 'October 2020',
    grade: '6.00',
    certificate: {
      image: cert_mini_softuni_fundamentals,
      link: 'https://softuni.bg/certificates/details/95150/c625ecd8',
      alt: 'cert_mini_softuni_applications',
    },
    icons: [icons.nodejs, icons.html, icons.css, icons.firebase],
  },
  {
    name: 'JavaScript Advanced',
    date: 'September 2020',
    grade: '6.00',
    certificate: {
      image: cert_mini_softuni_advanced,
      link: 'https://softuni.bg/certificates/details/90498/96ede5a3',
      alt: 'cert_mini_softuni_advanced',
    },
    icons: [icons.html, icons.javascript],
  },
  {
    name: 'JavaScript Fundamentals',
    date: 'May 2020',
    grade: '6.00',
    certificate: {
      image: cert_mini_softuni_fundamentals,
      link: 'https://softuni.bg/certificates/details/85677/b698fe29',
      alt: 'cert_mini_softuni_fundamentals',
    },
    icons: [icons.javascript, icons.html, icons.css, icons.github],
  },
  {
    name: 'JavaScript Basics',
    date: 'January 2020',
    grade: '6.00',
    certificate: {
      image: cert_mini_softuni_basics,
      link: 'https://softuni.bg/certificates/details/76938/7aa169b7',
      alt: 'cert_mini_softuni_basics',
    },
    icons: [icons.javascript],
  },
];
