import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');

// Loads the App element (from App.js) into the root div in index.html
let render = () => {
    ReactDOM.render(<App />, rootElement);
}

// re-render when hot
if (module.hot) { 
    module.hot.accept('./app/layout/App', ()=> {
        setTimeout(render)
    })
}

render();

registerServiceWorker();
