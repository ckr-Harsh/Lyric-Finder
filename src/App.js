import React from 'react'
import Head from './Components/Head'
import Try from './Components/try'
import {BrowserRouter} from 'react-router-dom'
 


function App() {
  return (
    <>
    <BrowserRouter>
    <Try>
      <Head/>
      </Try>
    </BrowserRouter>
    </>
  )
}

export default App
