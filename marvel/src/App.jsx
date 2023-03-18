import React from 'react';
import '../src/Components/style.css';
import {Routes,Route} from 'react-router-dom'
import { Main } from './Components/Main'
import {Marvel} from './Components/Marvel'

function App() {
  return (
    <>
     <Routes>
       <Route path='/'element={<Main/>}/>
       <Route path='/:id' element={<Marvel/>}/>
     </Routes>
    </>
  )
}

export default App;