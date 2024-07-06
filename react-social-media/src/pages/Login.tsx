import { auth, provider  } from "../config/firebase"
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"
export const Login = () =>{
    const navigate = useNavigate();

    const signIn =async () =>{
        var result = await signInWithPopup(auth,provider);
        navigate("/");
    }
    return<div>
        <h1>This is Login Page</h1>
        <p>Sign in with Google to continue</p>
        <button onClick={signIn}>Sign In with Google</button>
        </div>
}