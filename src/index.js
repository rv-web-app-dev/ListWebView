import React from 'react';
import ReactDom from 'react-dom';
import ListView from './components/ListView';
require('./styles/main.css');

ReactDom.render(<ListView/>, document.querySelector('#container'));
