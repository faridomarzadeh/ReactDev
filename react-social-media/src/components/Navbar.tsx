import { Link } from "react-router-dom";
import "../App.css";
import { auth,provider } from "../config/firebase";
import {useAuthState} from 'react-firebase-hooks/auth'
import {signOut} from 'firebase/auth'

export const Navbar = () => {
    const [user] = useAuthState(auth)

    const logout = async() =>{
        await signOut(auth);
    }
  return (
    <div className="navbar">
      <div className="navbar__menu">
        <Link className="navbar__menu-link" to="/">
          Home
        </Link>
        <Link className="navbar__menu-link" to="/login">
          Login
        </Link>
      </div>
      { user &&
      <div className="navbar__user">
        <span className="navbar__username">{user.displayName}</span>
        <img className="navbar__user-image" src={user.photoURL || ""}/>
        <button className="navbar__btn" onClick={logout}>Logout</button>
      </div>}
    </div>
  );
};
