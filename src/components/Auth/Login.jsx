import { useState } from "react";
import { getLocalStorage } from "../../utils/localStorage";

const Login = ({ handleUser }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleUser(email,password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form className="flex flex-col">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email:"
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full px-8 py-3 text-xl placeholder:text-gray-400"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password:"
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full mt-6 px-6 py-3 text-xl placeholder:text-gray-400"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <button
            className="outline-none bg-transparent border-1 border-emerald-600 rounded-full mt-5 p-2 hover:bg-emerald-300 hover:text-black transition-all text-lg"
            onClick={(e) => {
              submitHandler(e);
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
