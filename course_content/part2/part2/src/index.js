import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

import axios from 'axios'

axios
.get('http://localhost:3001/notes')
.then(response => {
  ReactDOM.render(<App/>, document.getElementById('root'))
})






