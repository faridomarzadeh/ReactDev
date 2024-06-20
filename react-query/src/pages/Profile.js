import { useContext } from "react"
import { AppContext } from "../App"
import { ChangeProfile } from "./ChangeProfile"
export const Profile = () => {
    let {username} = useContext(AppContext)
    return(
        <div>
        <h1>PROFILE for {username}</h1>
        <ChangeProfile/>
        </div>
    )
}