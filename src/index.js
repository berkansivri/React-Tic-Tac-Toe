import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import './index.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));


serviceWorker.unregister();
