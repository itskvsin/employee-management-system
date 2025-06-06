const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-4 rounded">
      <form className="w-full flex justify-between items-start flex-wrap">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Create Task:</h3>
            <input
              type="text"
              name="task"
              id="task"
              placeholder="Enter your task:"
              className="text-sm p-3 w-4/5 rounded outline-none bg-transparent text-white border-1 border-white mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date:</h3>
            <input
              type="date"
              name="date"
              id="date"
              className="text-sm p-3 w-4/5 rounded outline-none bg-transparent text-white border-1 border-white mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To:</h3>
            <input
              type="text"
              name="assignTo"
              id="assignTo"
              placeholder="Whon To Assign:"
              className="text-sm p-3 w-4/5 rounded outline-none bg-transparent text-white border-1 border-white mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category:</h3>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="e.g.: dev,design,etc.."
              className="text-sm p-3 w-4/5 rounded outline-none bg-transparent text-white border-1 border-white mb-4"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start justify-evenly">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            name="description"
            id="description"
            placeholder="Enter the description of task:"
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent text-white border-1 border-white mt-4 resize-none"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm w-full mt-10 cursor-pointer">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
