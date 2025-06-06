import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`${email} ${password} is submitted`);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form className="flex flex-col">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email:"
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full px-6 py-3 text-xl placeholder:text-gray-400"
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
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full mt-5 px-6 py-3 text-xl"
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
