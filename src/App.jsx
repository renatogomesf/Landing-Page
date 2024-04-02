import './App.css'

import NavBar from './components/NavBar'
import Home from './components/Home'

import IMGBACKGROUND from './assets/home-banner-background.png'

function App() {

  return (
    <>
      <div className='bg-no-repeat bg-right-top bg-contain' style={{backgroundImage: `url(${IMGBACKGROUND})`}}>
        <NavBar></NavBar>
        <Home></Home>
      </div>
    </>
  )
}

export default App
