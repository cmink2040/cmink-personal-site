import React from 'react'
import ReactDOM from 'react-dom/client'
import Main_App from './app/[[...slug]]/Main_App.jsx'
import './CSS/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main_App />
  </React.StrictMode>,
)
