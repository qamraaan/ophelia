import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const Home = () => {
  const [searchParams] = useSearchParams();
  let url = `https://api.instagram.com/oauth/authorize?client_id=1096816224277958&redirect_uri=https://instadetails.netlify.app/&scope=user_profile,user_media&response_type=code`;
  useEffect(() => {
    console.log("Search Params", searchParams.get("code"));
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
          body: JSON.stringify(obj),
        });
        const data = await response.json();
        const userDetails = await fetch(
          // `https://graph.instagram.com/17841456185935341?fields=id,username&access_token=${data.access_token}`
          `https://graph.instagram.com/me/media?fields=id,username,caption&access_token=${data.access_token}`
        );
        const user = await userDetails.json();
        console.log("User media", user);
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
        <a href={url}>Add Button</a>
        {/* <button className="btn" onClick={getData}>
        Add Account
      </button> */}
      </div>
    </>
  );
};
export default Home;
