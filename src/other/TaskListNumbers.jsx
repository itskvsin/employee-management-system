
const TaskListNumbers = ({data}) => {

    const {newTask , active , failed , completed} = data.taskSummary;

  return (
    <div className="flex justify-between gap-5 screen">
        <div className="rounded-lg mt-6 py-6 px-9 w-[45%] bg-red-400">
            <h2 className="text-2xl font-semibold">{failed}</h2>
            <h3 className="text-xl font-medium">Failed</h3>
        </div>
        <div className="rounded-lg mt-6 py-6 px-9 w-[45%] bg-green-400">
            <h2 className="text-2xl font-semibold">{newTask }</h2>
            <h3 className="text-xl font-medium">New Task</h3>
        </div>
        <div className="rounded-lg mt-6 py-6 px-9 w-[45%] bg-yellow-400">
            <h2 className="text-2xl font-semibold">{active}</h2>
            <h3 className="text-xl font-medium">Active</h3>
        </div>
        <div className="rounded-lg mt-6 py-6 px-9 w-[45%] bg-blue-400">
            <h2 className="text-2xl font-semibold">{completed}</h2>
            <h3 className="text-xl font-medium">Completed</h3>
        </div>
    </div>
  );
}

export default TaskListNumbers;