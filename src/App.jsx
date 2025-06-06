import { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {

  // useEffect(() => {
  //   // setLocalStorage();
  //   getLocalStorage();
  // },)

  const [user , setUser] = useState(null);

  const handleUser = (email , password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser("admin");
    } 
    else if (email === 'user@me.com' && password === '123') {
      setUser("employee")
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <>
      {!user ? <Login handleUser={handleUser} /> : ''};
      {user === "admin" ? <AdminDashboard /> : <EmployeeDashboard />};
    </>
  );
};

export default App;
