import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { App2 } from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // "Hello World"
  // <h1>Hello World</h1>
  <React.StrictMode>
  {/* this is jsx not html */}
  {/* <h1>Hello World</h1> */}
    <App />
    <App2 />
  </React.StrictMode>,
)
