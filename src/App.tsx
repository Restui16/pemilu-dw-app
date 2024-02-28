import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/user/Home'
import Voting from './pages/user/Voting'
import profilePic from './assets/images/profile-pic.png'
import logo from '/brand-logo.png'
import brand from './assets/images/brand.png'
import imgBanner from './assets/images/kotak-suara.png'
import Dashboard from './pages/admin/Dashboard'
import dataVoters from './mocks/dataVoters.json'
import dataPaslon from './mocks/dataPaslon.json'
import dataPartai from './mocks/dataPartai.json'
import ListPaslon from './pages/admin/ListPaslon'
import ListPartai from './pages/admin/ListPartai'
import AddPaslon from './pages/admin/AddPaslon'
import AddPartai from './pages/admin/AddPartai'
import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  const [isVoting, setIsVoting] = useState<boolean>(false)

  function handleVoting(){
    setIsVoting(!isVoting)
  }
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home logo={logo} brand={brand} imgBanner={imgBanner} />}></Route>
        <Route path='/voting' element={<Voting logo={logo} profilePic={profilePic} click={handleVoting} isVoting={isVoting} />}></Route>
        <Route path='/dashboard' element={<Dashboard logo={logo} profilePic={profilePic} dataVoters={dataVoters}/>}></Route>
        <Route path='/list-paslon' element={<ListPaslon logo={logo} dataPaslon={dataPaslon}/>}></Route>
        <Route path='/list-partai' element={<ListPartai logo={logo} dataPartai={dataPartai}/>}></Route>
        <Route path='/add-paslon' element={<AddPaslon logo={logo} profilePic={profilePic}/>}></Route>
        <Route path='/add-partai' element={<AddPartai logo={logo} profilePic={profilePic}/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </>
  )
}

export default App
