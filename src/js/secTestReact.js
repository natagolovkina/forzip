import React from 'react';
import ReactDOM from 'react-dom';

function ComponentTest() {
    return (
        <h1 className="testClass">
            JSX work
        </h1>
    )
};

function tryJSXTest() {
    ReactDOM.render(
        ComponentTest(),
        document.getElementById('JSXContainer')
    );
};

export default tryJSXTest;