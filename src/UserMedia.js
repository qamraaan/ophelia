import React, { useEffect } from "react";
const UserMedia = (props) => {
  console.log(props.user);
  useEffect(() => {
    console.log("UserInfo", props);
  }, []);

  return (
    <div>
      {/* {props.user.data.map((userInfo) => {
        return (
          <>
            {" "}
            <h1>{userInfo?.username}</h1>
            <h3>{userInfo?.id}</h3>
            <div>{userInfo?.media_url}</div>
            <div>{userInfo?.media_type}</div>
            <h5>{userInfo?.caption}</h5>
          </>
        );
      })} */}
      {/* {props.user} */}
    </div>
  );
};
export default UserMedia;
