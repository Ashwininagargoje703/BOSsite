import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Nav} from "./components/Navbar/Navbar";
import {Routes,Route} from "react-router-dom";
import {Forms} from "./components/CreatePage";
import {List} from "./components/ListPage";
import {SortButtons} from "./components/SortingButtons"
function App() {
 

  return (
    <div className="App">
     <h1 className='init'>PETBOARDING SITE</h1>
     
     <Nav/>
     {/* <List/> */}
     <Routes>
       <Route path="/" element={<List/>}/>
       {/* <Route path="/listing/id" /> */}
       <Route path="/listing/create" element={<Forms/>}/>
     </Routes>
    </div>
  )
}

export default App
