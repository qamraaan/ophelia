import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserMedia from "./UserMedia";
import "./App.css";
const Home = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [userInfo, setUserInfo] = useState({});

  let url = `https://api.instagram.com/oauth/authorize?client_id=1096816224277958&redirect_uri=https://instadetails.netlify.app/&scope=user_profile,user_media&response_type=code`;
  useEffect(() => {
    console.log("Search Params", searchParams.get("code"));
    const getAccessToken = async () => {
      let obj = {
        code: searchParams.get("code"),
      };
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
      <div className="home">
        {" "}
        {/* <div>To add your accounts, click below:</div> */}
        <div className="links">
          <a className="insta-link" href={url}>
            Add Instagram Account{" "}
          </a>
          <a className="twitter-link" href={url}>
            Add Twitter Account{" "}
          </a>
          <a className="fb-link" href={url}>
            Add Facebook Account{" "}
          </a>
        </div>
      </div>
      {/* <UserMedia user={userInfo} /> */}
    </>
  );
};
export default Home;
