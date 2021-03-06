import React from 'react'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/main.scss'
import Section from './components/Section/Section.js'

function App() {
  return ( <>
      <NavBar />
      <div className="container">
        <Section />
      </div>
    </>
  )
}

export default App
