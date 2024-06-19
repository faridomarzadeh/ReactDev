import {useParams} from "react-router-dom"

export const Contact = () => {
  let {username} = useParams()
  return <h2>THIS IS CONTACT PAGE for {username}</h2>;
};
