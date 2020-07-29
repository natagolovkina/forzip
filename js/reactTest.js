import React from 'react';
import ReactDOM from 'react-dom';

function ComponentTest() {
    return React.createElement(
        'h1',
        { className: 'testClass' },
        'React work'
    );
};

function tryReactTest() {
    ReactDOM.render(ComponentTest(), document.getElementById('reactContainer'));
};

export default tryReactTest;