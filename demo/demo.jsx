import 'babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Loader from '../src/Loader'; //eslint-disable-line
import './public/loader.css';
const App = React.createClass({ //eslint-disable-line
  render() {
    return (
      <Loader nbrItems={5}/>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('root'));
