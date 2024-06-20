import {useContext, useState} from "react"
import { AppContext } from "../App"

export const ChangeProfile = () => {
    const[newUsername, setNewUsername] = useState("")
    let {setUsername} = useContext(AppContext)
    return (
        <div>
            <input onChange={(event)=>setNewUsername(event.target.value)}/>
            <button onClick={()=>setUsername(newUsername)}>Change Profile</button>
        </div>
    )
}