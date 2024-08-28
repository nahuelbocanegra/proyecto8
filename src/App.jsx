import {BrowserRouter as Router , Link , Route, Routes} from "react-router-dom"
import './App.css'
import axios from "axios"
import { useState, useEffect } from "react"

import Boats from "./pages/Boats"
import Characters from "./pages/Characters"
import Episodes from "./pages/Episodes"
import Fruits from "./pages/Fruits"
import Locations from "./pages/Locations"
import Layout from "./component/Layout"
import Home from "./pages/Home"



function App() {
  
  return (
    <>
        
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/home/Boats" element={<Boats></Boats>} />
            <Route path="/home/Characters" element={<Characters></Characters>} />
            <Route path="/home/Episodes" element={<Episodes></Episodes>} />
            <Route path="/home/Fruits" element={<Fruits></Fruits>} />
            <Route path="/home/Locations" element={<Locations></Locations>} />
          </Routes>
      </Layout>
      </Router>
    </>
  )
}

export default App
