import { useContext } from "react"
import { AppContext } from "../App"
export const Home = () => {
    let {userName} = useContext(AppContext);
    return(
        <h1>This is Home Page for user: {userName}</h1>
    )
}