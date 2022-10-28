import React, { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import UserMedia from "./UserMedia";
function App() {
  // }, []);

  // const getData = async () => {
  //   const response = await fetch();
  //   // `/oauth/authorize?client_id=1096816224277958&redirect_uri=https://instadetails.netlify.app/&scope=user_profile,user_media&response_type=code`
  //   // `https://e508-137-59-1-12.in.ngrok.io`
  //   // const data = await response.json();
  //   console.log(response);
  // };
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/" element={<UserMedia />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
