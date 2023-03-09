// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './app.css'

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
// import ReactDOM from 'react-dom'
import App from './App.js'
import './app.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)
