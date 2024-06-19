import { useNavigate } from "react-router-dom";

export const Menu = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h2>THIS IS MENU PAGE</h2>
      <button onClick={()=>{
        navigate("/contact")
      }}>Go to Contact Page</button>
    </div>
  );
};
