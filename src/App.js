import React from 'react'
import Head from './Components/Head'
import Try from './Components/Context'
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
