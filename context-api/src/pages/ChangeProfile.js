import { useContext,useState } from "react";
import App, { AppContext } from "../App";

export const ChangeProfile = () => {
    let [newUserName, setNewUserName] = useState("");
    const {setUserName} = useContext(AppContext);
    return(
        <div>
            <input onChange={(event) => setNewUserName(event.target.value)}/>
            <button onClick={()=>{setUserName(newUserName)}}>Change Username</button>
        </div>
    )
}