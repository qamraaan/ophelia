import React, { useEffect } from "react";
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
      {props?.user?.data?.map((userInfo) => {
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
      })}
      {/* {props.user} */}
    </div>
  );
};
export default UserMedia;
