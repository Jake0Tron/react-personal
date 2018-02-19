import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/header.js';
import MenuButton from './components/menuButton/menuButton.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));

registerServiceWorker();
