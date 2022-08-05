import React from 'react'
import './App.css'
import Whome from './components/whome/Whome'
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Certificates from './components/certificates/Certificates'
import LineTop from './components/LineTop/LineTop'

const App = () => {
  return (
    <div className='App'>
    <LineTop/>
       <Router>
           <Routes>
             <Route path='/' element={<Whome/>}/>
             <Route path='/Projects' element={<Projects/>}/>
             <Route path='/Contact' element={<Contact/>}/>
             <Route path='/Certificates' element={<Certificates/>}/>
           </Routes>
       </Router>
    </div>
  )
}

export default App