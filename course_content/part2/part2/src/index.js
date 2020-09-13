import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

import axios from 'axios'

axios
.get('/api/notes')
.then(response => {
  ReactDOM.render(<App/>, document.getElementById('root'))
})






