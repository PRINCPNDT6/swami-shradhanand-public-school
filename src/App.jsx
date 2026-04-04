//  import {BrowserRouter, Routes, Route} from 'react-router-dom'
 import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Affiliation from './components/Affiliation'
import Booklist from './components/Booklist'
import StudentsTC from './components/StudentsTC'
import Teacherlist from './components/Teacherlist'
import Moredetail from './components/Moredetail'

function App() {
  

  return (
    <>
       <>
       <BrowserRouter>
          <Header />
            <Routes>
              <Route path='/about' element ={<About />}/> 
              <Route path='/affiliation' element ={<Affiliation />}/> 
              <Route path='/booklist' element ={<Booklist />}/> 
              <Route path='/contact' element ={<Contact />}/> 
              <Route path='/'  element = {<Home />}/>
              <Route path='/services' element ={<Services />}/> 
              <Route path='/studentsTC' element ={<StudentsTC />}/> 
              <Route path='/teacherlist' element ={<Teacherlist />}/> 
              <Route path='/moredetail' element ={<Moredetail />}/> 
            </Routes>
          <Footer />
       </BrowserRouter>
       </>
    </>
  )
}

export default App
