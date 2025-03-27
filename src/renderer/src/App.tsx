// import { HashRouter, Routes, Route } from 'react-router'
// import MapComponent from './components/MapEditor'
// import { useState } from 'react'
// import { AppSidebar } from './components/app-sidebar'
// import Layout from './app/layout'
import Page from './app/page'

function App(): JSX.Element {
  return (
    <>
      <Page />
      {/* <HashRouter>
        <Routes>
          <Route path="/" element={<MapComponent/>}></Route>
        </Routes>
      </HashRouter> */}
    </>
  )
}

export default App
