import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
export const Home = () => {
  const { username } = useContext(AppContext);
  let {
    data: catData,
    isLoading,
    isError,
    refetch
  } = useQuery({queryKey:["catData"],
    queryFn: () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  }});
  if (isError) return <h1>Sorry, there was an error</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>THIS IS HOME PAGE for {username}</h1>
      <p>{catData.fact}</p>
      <button onClick={refetch}>Update data</button>
    </div>
  );
};
