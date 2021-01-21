const icon_nodejs = require('../../images/icon_nodejs.png');
const icon_javascript = require('../../images/icon_javascript.png');
const icon_css = require('../../images/icon_css.png');
const icon_html = require('../../images/icon_html.png');
const icon_github = require('../../images/icon_github.png');
const icon_firebase = require('../../images/icon_firebase.png');
const icon_express = require('../../images/icon_express.png');
const icon_mongodb = require('../../images/icon_mongodb.png');
const icon_reactjs = require('../../images/icon_react.png');
const cert_mini_softuni_basics = require('../../images/cert_mini_softuni_basics.png');
const cert_mini_softuni_fundamentals = require('../../images/cert_mini_softuni_fundamentals.png');
const cert_mini_softuni_advanced = require('../../images/cert_mini_softuni_advanced.png');

export interface ISoftuniIcon {
  icon: any;
  title: string;
  alt: string;
}

export const icons: { [key: string]: ISoftuniIcon } = {
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

export interface ISoftuniCourse {
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
    grade: '?.??',
    icons: [icons.nodejs, icons.express, icons.mongodb],
  },
  {
    name: 'JavaScript Applications',
    date: 'October 2020',
    grade: '6.00',
    certificate: {
      image: cert_mini_softuni_advanced,
      link: 'https://softuni.bg/certificates/details/95150/c625ecd8',
      alt: 'cert_mini_softuni_advanced',
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
