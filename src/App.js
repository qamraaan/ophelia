import React, { useEffect, useState } from "react";
import "./App.css";
import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get("code"));
  }, []);
  let url = `https://api.instagram.com/oauth/authorize?client_id=1096816224277958&redirect_uri=https://instadetails.netlify.app/&scope=user_profile,user_media&response_type=code`;
  // const getData = async () => {
  //   const response = await fetch();
  //   // `/oauth/authorize?client_id=1096816224277958&redirect_uri=https://instadetails.netlify.app/&scope=user_profile,user_media&response_type=code`
  //   // `https://e508-137-59-1-12.in.ngrok.io`
  //   // const data = await response.json();
  //   console.log(response);
  // };
  return (
    <div className="App">
      <h1>Hola amigos!</h1>
      <a href={url}>Add Button</a>
      {/* <button className="btn" onClick={getData}>
        Add Account
      </button> */}
    </div>
  );
}

export default App;
