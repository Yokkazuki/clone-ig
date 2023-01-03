import { Route, Routes } from "react-router-dom"
import './App.css'
import Home from "./pages/home"

function App() {

  return (
    <Routes>
      <Route path="/clone-ig/" element={<Home />}/>
    </Routes>
  )
}

export default App
