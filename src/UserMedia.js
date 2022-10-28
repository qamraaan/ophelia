import React, { useEffect } from "react";
import "./App.css";
const UserMedia = (props) => {
  console.log("props", props);
  console.log("props.user", props?.user);
  console.log("props.user.data", props?.user?.data);
  console.log("props.user.data.id", props?.user?.data?.id);
  useEffect(() => {
    console.log("props in UseEffect", props);
    console.log("props.user in UseEffect", props?.user);
    console.log("props.user.data in UseEffect", props?.user?.data);
    console.log("props.user.data.id in UseEffect", props?.user?.data?.id);
  }, [props.user]);

  return (
    <div>
      <div className="heading">
        <h1>Username: {props?.user?.data[0]?.username}</h1>
        <h3>UserId: {props?.user?.data[0]?.id}</h3>
      </div>
      <br />
      <br />
      {props?.user?.data?.map((userInfo) => {
        return (
          <div className="container">
            {/* <h4>{userInfo?.media_url}</h4>
            <div>{userInfo?.media_type}</div> */}
            {userInfo?.media_type === "IMAGE" ? (
              <img
                width="300"
                height="250"
                src={userInfo?.media_url}
                alt="media url"
              />
            ) : (
              <video width="300" height="250" controls>
                <source src={userInfo?.media_url} type="video/mp4" />
              </video>
            )}

            <strong className="caption">{userInfo?.caption}</strong>
          </div>
        );
      })}
    </div>
  );
};
export default UserMedia;
