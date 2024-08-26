import {BrowserRouter as Router , Link , Route, Routes} from "react-router-dom"
import './App.css'
import axios from "axios"
import { useState, useEffect } from "react"
    
import Nav from "./component/Nav"
import Boars from "./pages/Boats"
import Characters from "./pages/Characters"
import Episodes from "./pages/Episodes"
import Fruits from "./pages/Fruits"
import Locations from "./pages/Locations"
    



function App() {
  const [one, setOne]=useState([]);
  useEffect(()=>{
    axios.get('https://api.api-onepiece.com/v2/crews/en')
    .then((res)=>{setOne(res.data)})
    .catch(((error)=>{console.log(error)}))
  },[])
  console.log(one)

  return (
      <>
      <Nav></Nav>
      <Router>
        <Routes>
          <Route path="/"/>
          <Route path="/home/Boars" element={<Boars></Boars>} />
          <Route path="/home/Characters" element={<Characters></Characters>} />
          <Route path="/home/Episodes" element={<Episodes></Episodes>} />
          <Route path="/home/Fruits" element={<Fruits></Fruits>} />
          <Route path="/home/Locations" element={<Locations></Locations>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
