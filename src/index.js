import React from 'react';
import ReactDom from 'react-dom';
import Stream from '../components/Stream';

const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];

ReactDom.render(
  <Stream tracks={tracks}></Stream>,
  document.getElementById('app')
);
