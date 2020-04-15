import React from 'react'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/main.scss'
import Section from './components/Section/Section.js'
import TestComponent from './components/testComponent/testComponent'
import TestComponent2 from './components/testComponent/testComponent2'

function App() {
  return ( <>
      <NavBar />
      <div className="container">
      <TestComponent2 />
        <Section />
        
      </div>
    </>
  )
}

export default App
