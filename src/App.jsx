import './App.css'

import NavBar from './components/NavBar'
import Home from './components/Home'
import Sobre from './components/Sobre'
import ComoFunciona from './components/ComoFunciona'
import Depoimentos from './components/Depoimentos'
import Email from './components/Email'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='mb-40 bg-[url("./assets/home-banner-background.png")] bg-no-repeat bg-right-top bg-contain max-lg:bg-none'>
        <NavBar></NavBar>
        <Home></Home>
      </div>

      <div className='mb-40 bg-[url("./assets/about-background.png")] bg-no-repeat bg-contain bg-left max-lg:bg-none'>
        <Sobre></Sobre>
      </div>

      <ComoFunciona></ComoFunciona>

      <Depoimentos></Depoimentos>
    
      <Email></Email>

      <Footer></Footer>
    </>
  )
}

export default App
