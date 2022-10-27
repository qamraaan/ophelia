import React from "react";
import { useSearchParams } from "react-router-dom";
const Home = () => {
  const [searchParams] = useSearchParams();

  console.log("Search Params", searchParams.get("code"));
  let url = `https://api.instagram.com/oauth/authorize?client_id=1096816224277958&redirect_uri=https://instadetails.netlify.app/&scope=user_profile,user_media&response_type=code`;
  return (
    <>
      <div>
        {" "}
        <h1>Hola amigos!</h1>
        <a href={url}>Add Button</a>
        {/* <button className="btn" onClick={getData}>
        Add Account
      </button> */}
      </div>
    </>
  );
};
export default Home;
