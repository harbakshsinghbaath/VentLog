import Home from "./pages/Home.jsx"
import './App.css'
import Login from "@/pages/Login.jsx"
import Vent from "./pages/Vent.jsx";
import Signup from "@/pages/Signup.jsx";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/vent" element={<Vent/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
