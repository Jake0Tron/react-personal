import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Resume from './components/content/resume/resume.js';
import AboutMe from './components/content/aboutMe/aboutMe.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Resume />, document.getElementById('resume'));
ReactDOM.render(<AboutMe />, document.getElementById('aboutMe'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

// TODO render only specifically selected view... or some fun scroll junk

registerServiceWorker();
