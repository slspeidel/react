import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';
import BabelTransformer from './components/babel-transformer';

console.log(BabelTransformer);

ReactDOM.render(
    <BabelTransformer />,
    document.getElementById('app')
);