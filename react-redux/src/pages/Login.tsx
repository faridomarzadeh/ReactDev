import React,{ useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store";

export const Login = () =>{
    const[newUsername, setNewUsername] = useState<string>("");
    const username = useSelector((state:any)=>state.user.value.username);
    const dispatch = useDispatch();
    return(
        <h1>
        THIS IS LOGIN PAGE {username}
        <input onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setNewUsername(event.target.value)}}/>
        <button onClick={()=>dispatch(login({username: newUsername}))}> Submit Login </button>
        <button onClick={() => dispatch(logout())}> Logout </button>
        </h1>
    )
}