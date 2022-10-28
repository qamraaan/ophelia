import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserMedia from "./UserMedia";
const Home = () => {
  const navigate = useNavigate();
  // const [userInfo, setUserInfo] = useState({});
  const [searchParams] = useSearchParams();
  const [userInfo, setUserInfo] = useState({});

  let url = `https://api.instagram.com/oauth/authorize?client_id=1096816224277958&redirect_uri=https://instadetails.netlify.app/&scope=user_profile,user_media&response_type=code`;
  useEffect(() => {
    console.log("Search Params", searchParams.get("code"));
    const getAccessToken = async () => {
      let obj = {
        code: searchParams.get("code"),
      };
      // console.log("OJbje", obj);
      try {
        const response = await fetch(`https://bf6e-137-59-1-12.in.ngrok.io`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(obj),
        });
        const data = await response.json();
        const userDetails = await fetch(
          // `https://graph.instagram.com/17841456185935341?fields=id,username&access_token=${data.access_token}`
          `https://graph.instagram.com/me/media?fields=id,username,caption,media_type,media_url&access_token=${data.access_token}`
        );
        const user = await userDetails.json();
        setUserInfo(user);
        // console.log("User media", user);
        // navigate()
      } catch (err) {
        return err;
      }
    };
    getAccessToken();
  }, [searchParams]);

  return (
    <>
      <div>
        {" "}
        <h1>Hola amigos!</h1>
        <a href={url}>Link Instagram Account </a>
        <UserMedia user={userInfo} />
        {/* <UserMedia user /> */}
        {/* <button className="btn" onClick={getData}>
        Add Account
      </button> */}
      </div>
    </>
  );
};
export default Home;
