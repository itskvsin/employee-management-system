import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  // console.log(authData.emp);
  return (
    <div className="bg-[#1C1C1C] p-5 mt-5 rounded h-50 text-xl font-bold">
      <div className="flex justify-between rounded py-2 px-4">
        <h2 className="w-1/5">Name</h2>
        <h5 className="w-1/5 text-green-600">New Task</h5>
        <h5 className="w-1/5 text-yellow-600">Active</h5>
        <h5 className="w-1/5 text-blue-600">Completed</h5>
        <h5 className="w-1/5 text-red-600">Failed</h5>
      </div>

      <div className=" overflow-auto">
        {authData.emp.map((emp) => {
            const {active  , newTask  ,completed , failed} = emp.taskSummary
          return (
            <div className="mb-2 py-4 px-4 flex justify-between rounded border-green-300 border-2 text-lg">
              <h2 className="w-1/5">{emp.firstName}</h2>
              <h5 className="w-1/5 text-green-600">{newTask}</h5>
              <h5 className="w-1/5 text-yellow-600">{active}</h5>
              <h5 className="w-1/5 text-blue-600">{completed}</h5>
              <h5 className="w-1/5 text-red-600">{failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
