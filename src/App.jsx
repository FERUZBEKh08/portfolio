import '../src/App.css'

import Nav from "../nav/navbar"
import Home from "../pages/home"
import About from "../pages/about"


export default function App() {
  return (
    <div className='continier'>
      <Nav />
      <Home />
      <About/>
    </div>
  )
}
