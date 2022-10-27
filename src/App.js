import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  // useEffect(() => {
  //   getData();
  // }, []);

  const getData = async () => {
    const response = await fetch(
      `/oauth/authorize?client_id=1096816224277958&redirect_uri=https://instadetails.netlify.app/&scope=user_profile,user_media&response_type=code`
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="App">
      <h1>Hola amigos!</h1>
      <button className="btn" onClick={getData}>
        Add Account
      </button>
    </div>
  );
}

export default App;
