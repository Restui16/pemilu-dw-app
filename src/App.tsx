import React, { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom'
import ListPaslon from './pages/admin/ListPaslon'
import ListPartai from './pages/admin/ListPartai'
import AddPaslon from './pages/admin/AddPaslon'
import AddPartai from './pages/admin/AddPartai'
import Login from './pages/Login'
import Register from './pages/Register'
import DetailArticle from './pages/user/DetailArticle'
import Home from './pages/user/Home'
import Voting from './pages/user/Voting'
import Dashboard from './pages/admin/Dashboard'
import dataVoters from './mocks/dataVoters.json'
import dataPaslon from './mocks/dataPaslon.json'
import dataPartai from './mocks/dataPartai.json'
import dataUsers from './mocks/dataUsers.json'
import logo from '/brand-logo.png'
import profilePic from './assets/images/profile-pic.png'
import brand from './assets/images/brand.png'
import imgBanner from './assets/images/kotak-suara.png'
import IUser from './interface/IUser'



const App: React.FC = () => {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const [isVoting, setIsVoting] = useState<boolean>(false)
  const [users, setUsers] = useState<IUser[]>(dataUsers)

  function handleVoting() {
    setIsVoting(!isVoting)
  }

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }

    const storedIsLogin = localStorage.getItem("isLogin");
    if (storedIsLogin && storedIsLogin === "true") {
      setIsLogin(true);
    }

    const storedIsAdmin = localStorage.getItem("isAdmin");
    if (storedIsAdmin && storedIsAdmin === "true") {
      setIsAdmin(true);
      navigate('/dashboard')
    }
  }, []);

  useEffect(() => {
    navigate('/')
  }, [isLogin])

  useEffect(() => {
    navigate('/dashboard')
  }, [isAdmin])



  function handleSubmitRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newUsers: IUser = {
      fullname: String(formData.get("fullname")),
      address: String(formData.get("address")),
      gender: String(formData.get("gender")),
      username: String(formData.get("username")),
      password: String(formData.get("password")),
      isAdmin: false
    }

    for (const user of users) {
      if (user.username.includes(newUsers.username)) {
        alert("Username Sudah ada")
        return
      }

    }

    setUsers((prevUsers) => [...prevUsers, newUsers]);
    localStorage.setItem('users', JSON.stringify([...users, newUsers]));
    navigate('/login')
  }

  function handleSubmitLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const username = String(formData.get("username"))
    const password = String(formData.get("password"))
    if (username !== "" && password !== "") {
      let isUserFound = false
      let isAdmin = false;
      for (const user of users) {
        if (user.username.includes(username) && user.password.includes(password)) {
          isUserFound = true
          isAdmin = user.isAdmin;
          break
        }
      }


      if (isUserFound) {
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("isAdmin", String(isAdmin));
        setIsLogin(true);
        setIsAdmin(isAdmin);
      } else {
        alert("username atau Password salah")
      }
    } else {
      alert("username dan password harus diisi")
    }

  }



  function PrivateRoute() {
    if (isLogin) {
      return <Outlet />
    } else {
      return <Navigate to={"/login"} />
    }
  }

  function PrivateRouteAdmin() {
    if (isLogin && isAdmin) {
      return <Outlet />
    } else if (isLogin) {
      return <Navigate to={'/'}/>
    } else {
      return <Navigate to={"/login"} />
    }
  }



  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home isLogin={isLogin} logo={logo} brand={brand} imgBanner={imgBanner} />} />
          <Route path='/voting' element={<Voting isLogin={isLogin} logo={logo} profilePic={profilePic} click={handleVoting} isVoting={isVoting} />}></Route>
          <Route path='article/:id' element={<DetailArticle logo={logo} />}></Route>
        </Route>

        <Route element={<PrivateRouteAdmin />}>
          <Route path='/dashboard' element={<Dashboard dataPaslon={dataPaslon} isAdmin={isAdmin} logo={logo} dataVoters={dataVoters} />}></Route>
          <Route path='/list-paslon' element={<ListPaslon logo={logo} dataPaslon={dataPaslon} />}></Route>
          <Route path='/list-partai' element={<ListPartai logo={logo} dataPartai={dataPartai} />}></Route>
          <Route path='/add-paslon' element={<AddPaslon logo={logo} profilePic={profilePic} />}></Route>
          <Route path='/add-partai' element={<AddPartai logo={logo} profilePic={profilePic} />}></Route>
        </Route>

        <Route path='/login' element={<Login onSubmit={handleSubmitLogin} />}></Route>
        <Route path='/register' element={<Register handleSubmit={handleSubmitRegister} />}></Route>

      </Routes>
    </>
  )
}

export default App
