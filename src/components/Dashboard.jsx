import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
const Dashboard = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
    axios
      .get("https://proj-backend-kappa.vercel.app/getUsering", { withCredentials: true })
      .then((users) => setUser(users.data))
      .catch((err) => console.log(err));
  }, []);
  console.log("users",users)
  console.log("the data is ", users);

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear("userInfo");
    navigate("/");
  }

  
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'300px',gap:'10px'}}>
      <div
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   width: "100vw",
        //   height: "100vh",
        //   gap: "100px",
        //   alignItems: "center",
        // }}
      >
        <div style={{width:'200px', padding:'5px',display:'flex',flexDirection:'column',gap:'5px',backgroundColor:'grey',border:'1px solid green'}}>
          <div>
            <div style={{ fontWeight: "bold" }}>User Name : {users.uname} </div>
          </div>
          <div>
            <div style={{ fontWeight: "bold" }}>Email : {users.email} </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "80px",
          height: "40px",
          border: "1px solid grey",
          cursor: "pointer",
        }}
        onClick={handleLogout}
      >
        Logout
      </div>
    </div>
  );
};

export default Dashboard;
