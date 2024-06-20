import { useContext } from "react";
import { AppContext } from "../App";
import { ChangeProfile } from "./ChangeProfile";
export const Profile = () => {
  let { userName } = useContext(AppContext);
  return (
    <div>
      <h1>PROFILE, for user: {userName}</h1>
      <ChangeProfile />
    </div>
  );
};