import '@styles/styles.css';

import btnOnlineRequestModule from '@js/navbarOnlineRequest';
btnOnlineRequestModule();

/*
import logoForDark from '@/assets/logoForDark.png';
console.log(logoForDark);
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from '@js/App';
ReactDOM.render(<App />, document.getElementById('root'));