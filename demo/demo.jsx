import React from 'react';
import ReactDOM from 'react-dom';
import Loader from '../src/Loader';

const App = () => (
  <Loader
    nbrItems={5}
  />
);


ReactDOM.render(<App />, document.getElementById('root'));
