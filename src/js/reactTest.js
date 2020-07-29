'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const elH = React.createElement;

class TestReact extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return elH (
            'h1',
            {className: "testClass"},
            'React work'
        );
    };
};

function tryReactTest() {
    ReactDOM.render(
        elH (TestReact),
        document.getElementById('reactContainer')
    );
};

export default tryReactTest;