import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ListPaslon from "./pages/admin/ListPaslon";
import ListPartai from "./pages/admin/ListPartai";
import AddPaslon from "./pages/admin/AddPaslon";
import AddPartai from "./pages/admin/AddPartai";
import DetailArticle from "./pages/user/DetailArticle";
import Home from "./pages/user/Home";
import Voting from "./pages/user/Voting";
import Dashboard from "./pages/admin/Dashboard";
import ListArticle from "./pages/admin/ListArticle";
import data_candidates from "./mocks/data_candidates.json";
import data_voters from "./mocks/data_voters.json";
import data_parties from "./mocks/data_parties.json";
import data_articles from "./mocks/data_articles.json";
import profilePic from "./assets/images/profile-pic.png";
import IParties from "./interface/IParties";
import ICandidate from "./interface/ICandidate";
import IVoter from "./interface/IVoter";
import IArticle from "./interface/IArticle";
import { getData } from "./utils/fetching";

const App: React.FC = () => {
  const [candidates, setCandidates] = useState<ICandidate[]>(data_candidates);
  const [parties, setParties] = useState<IParties[]>(data_parties);
  const [voters, setVoters] = useState<IVoter[]>(data_voters);
  const [articles, setArticles] = useState<IArticle[]>(data_articles);
  
  useEffect(() => {
    getData("article")
      .then((r) => setArticles(r))
      .catch((err) => console.log(err));
  }, [articles]);

  useEffect(() => {
    getData("candidate")
      .then((r) => setCandidates(r))
      .catch((err) => console.log(err));
    getData("partai")
      .then((r) => setParties(r))
      .catch((err) => console.log(err));
    getData("article")
      .then((r) => setArticles(r))
      .catch((err) => console.log(err));
    getData("voter")
      .then((r) => setVoters(r))
      .catch((err) => console.log(err));
  }, []);

  // function handleSubmitRegister(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();

  //   // postData("http://localhost:5000/api/v1/user", formData)
  //   //   .then(() => alert("Akun Berhasil dibuat"))
  //   //   .catch((err) => console.error(err));
  // }

  // function handleSubmitLogin(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   // const formData = new FormData(e.currentTarget)
  //   // const username = String(formData.get("username"))
  //   // const password = String(formData.get("password"))
  //   // if (username !== "" && password !== "") {
  //   //   let isUserFound = false
  //   //   let isAdmin = false;
  //   //   for (const user of users) {
  //   //     if (user.username.includes(username) && user.password.includes(password)) {
  //   //       isUserFound = true
  //   //       isAdmin = user.isAdmin;
  //   //       break
  //   //     }
  //   //   }

  //   //   if (isUserFound) {
  //   //     localStorage.setItem("isLogin", "true");
  //   //     localStorage.setItem("isAdmin", String(isAdmin));
  //   //     setIsLogin(true);
  //   //     setIsAdmin(isAdmin);
  //   //   } else {
  //   //     alert("username atau Password salah")
  //   //   }
  //   // } else {
  //   //   alert("username dan password harus diisi")
  //   // }
  // }

  // function PrivateRoute() {
  //   if (isLogin) {
  //     return <Outlet />
  //   } else {
  //     return <Navigate to={"/login"} />
  //   }
  // }

  // function PrivateRouteAdmin() {
  //   if (isLogin && isAdmin) {
  //     return <Outlet />
  //   } else if (isLogin) {
  //     return <Navigate to={'/'} />
  //   } else {
  //     return <Navigate to={"/login"} />
  //   }
  // }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home articles={articles} />}/>
        <Route
          path="/voting"
          element={<Voting candidates={candidates} voters={voters} />}
        ></Route>
        <Route
          path="/article/:id"
          element={<DetailArticle articles={articles} />}
        ></Route>

        <Route
          path="/dashboard"
          element={<Dashboard candidates={candidates} voters={voters} />}
        ></Route>
        <Route
          path="/list-paslon"
          element={<ListPaslon candidates={candidates} />}
        ></Route>
        <Route
          path="/list-partai"
          element={<ListPartai parties={parties} />}
        ></Route>
        <Route
          path="/list-article"
          element={<ListArticle articles={articles} />}
        ></Route>
        <Route
          path="/add-paslon"
          element={<AddPaslon profilePic={profilePic} />}
        ></Route>
        <Route
          path="/add-partai"
          element={<AddPartai profilePic={profilePic} />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
