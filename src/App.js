import React from 'react'
import Trail from './Components/trail'
import Head from './Components/Head'
import {BrowserRouter} from 'react-router-dom'
import Context from './Components/Context'
 


function App() {
  return (
    <>
    <BrowserRouter>
    <Context>
      <Head/>
    </Context>
    </BrowserRouter>
    </>
  )
}

export default App
