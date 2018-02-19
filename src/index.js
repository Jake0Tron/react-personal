import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
registerServiceWorker();
