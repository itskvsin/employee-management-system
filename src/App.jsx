import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";


const App = () => {

  const [user , setUser] = useState(null);
  const [loggedInUserData , setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      if (loggedInUser) {
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }
    }
  },[])



  const handleUser = (email , password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser("admin");
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}));
    } 
    else if (authData) {
      const emp = authData.emp.find((e) => e.email === email && e.password === password);
      if(emp){
        setUser("employee");
        setLoggedInUserData(emp);
        localStorage.setItem("loggedInUser",JSON.stringify({role:"employee" , data:emp}));
      }
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <>
      {!user ? <Login handleUser={handleUser} /> : ''}
      {user === "admin" ? <AdminDashboard /> : (user == "employee" ?  <EmployeeDashboard data={loggedInUserData} /> : null  )}
    </>
  );
};

export default App;
