import React, { useEffect } from "react";

const Home = () => {
  let url = `https://api.instagram.com/oauth/authorize?client_id=1096816224277958&redirect_uri=https://instadetails.netlify.app/user/&scope=user_profile,user_media&response_type=code`;

  return (
    <>
      <div>
        {" "}
        <h1>Hola amigos!</h1>
        <a href={url}>Link Instagram Account </a>
        {/* <button className="btn" onClick={getData}>
        Add Account
      </button> */}
      </div>
    </>
  );
};
export default Home;
