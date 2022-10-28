import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const Home = () => {
  const [searchParams] = useSearchParams();
  let url = `https://api.instagram.com/oauth/authorize?client_id=1096816224277958&redirect_uri=https://instadetails.netlify.app/&scope=user_profile,user_media&response_type=code`;
  useEffect(() => {
    console.log("Search Params", searchParams.get("code"));
    getAccessToken();
  }, [searchParams]);
  const getAccessToken = async () => {
    let obj = {
      code: searchParams.get("code"),
    };
    console.log("OJbje", obj);
    try {
      const response = await fetch(`https://bf6e-137-59-1-12.in.ngrok.io`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: obj,
      });
      console.log("REspoonce", response);
    } catch (err) {
      return err;
    }
  };
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
