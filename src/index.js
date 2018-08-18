import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Map from './components/Map'
import MapContainer from './components/MapContainer'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MapContainer/>, document.getElementById('root'));
registerServiceWorker();
