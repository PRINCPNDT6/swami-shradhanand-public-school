//  import {BrowserRouter, Routes, Route} from 'react-router-dom'
 import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'
import Footer from './components/Footer/Footer'
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
import WhysspSchool from './components/Footer/WhysspSchool'
import Directormsg from './components/Footer/Directormsg'
import Ourstaff from './components/Footer/Ourstaff'
import Ourstudent from './components/Footer/Ourstudent'
import Principalmsg from './components/Footer/Principalmsg'

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
               
              <Route path='/directormsg' element = {<Directormsg />}/>
              <Route path='/ourstaff' element = {<Ourstaff />}/>
              <Route path='/ourstudent' element = {<Ourstudent />}/>
              <Route path='/principalmsg' element = {<Principalmsg />}/>
              <Route path='/whysspschool' element = {<WhysspSchool />}/>
            </Routes>
          <Footer />
       </BrowserRouter>
       </>
    </>
  )
}

export default App
