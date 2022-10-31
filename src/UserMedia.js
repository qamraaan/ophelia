import React, { useEffect } from "react";
import "./App.css";
const UserMedia = (props) => {
  useEffect(() => {
    console.log("MEdia thype", props);
  }, []);
  return (
    <div>
      <div className="heading">
        <h3>Username: {props?.user?.data[0]?.username}</h3>
        <h3>UserId: {props?.user?.data[0]?.id}</h3>
      </div>
      <br />
      <br />
      {props?.user?.data?.map((userInfo) => {
        return (
          <div className="container">
            {/* <h4>{userInfo?.media_url}</h4>
            <div>{userInfo?.media_type}</div> */}
            {userInfo?.media_type === "IMAGE" ||
            userInfo?.media_type === "CAROUSEL_ALBUM" ? (
              <img
                width="300"
                height="250"
                src={userInfo?.media_url}
                alt="media url"
                className="media"
              />
            ) : (
              <video className="media" width="300" height="250" controls>
                <source src={userInfo?.media_url} type="video/mp4" />
              </video>
            )}

            <strong className="caption">{userInfo?.caption}</strong>
          </div>
        );
      })}
      <a
        className="insta-link"
        target="_blank"
        href={
          "https://rapidapi.com/blog/how-to-navigate-and-connect-to-instagrams-api/#endpoints_with_scopes"
        }
      >
        For More information{" "}
      </a>
    </div>
  );
};
export default UserMedia;
