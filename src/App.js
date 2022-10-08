import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './views/Home';
import Contacto from './views/Contacto';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
const App = () => {
  return (
    <Fragment>
     <CustomNavbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    <Footer/>
    </Fragment>
  )
  
}

export default App;
