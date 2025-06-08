import AcceptTask from "./AcceptTask";
import CompletedTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({data}) => {
  return (
    <div
      id="taskList"
      className="h-[55%] flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10 overflow-x-auto"
    >
      {data.tasks.map((task , id) => {
        if(task.newTask){
          return <NewTask key={id} data={task} />
        }
        if(task.active){
          return <AcceptTask key={id} data={task}/>
        }
        if(task.completed){
          return <CompletedTask key={id} data={task}/>
        }
        if(task.failed){
          return <FailedTask key={id} data={task}/>
        }
        
      })}
    </div>
  );
};

export default TaskList;
