import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Navbar from './component/Navbar'
// import DarkMode from './component/DarkMode'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <DarkMode/> */}
    <Navbar/>
  </React.StrictMode>,
)
