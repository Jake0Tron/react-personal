import React from 'react';
import ReactDOM from 'react-dom';
import App from './header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<header />, div);
  ReactDOM.unmountComponentAtNode(div);
});
