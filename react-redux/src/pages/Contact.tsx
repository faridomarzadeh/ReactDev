import { UseSelector, useSelector } from "react-redux"
export const Contact = () =>{

    const username = useSelector((state:any)=>state.user.value.username);
    return(
        <h1>THIS IS CONTACT PAGE {username}</h1>
    )
}