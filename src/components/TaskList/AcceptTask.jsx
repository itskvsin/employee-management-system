
const AcceptTask = ({ data }) => {
  const {title , description , date ,category } = data;
    return (
        <div className="flex-shrink-0 h-full w-[300px] py-5 px-4 bg-yellow-400 rounded-lg overflow-auto relative">
        <div className="flex items-center justify-between ">
          <h3 className="border-3 border-white text-black text-md rounded px-3 py-1 shadow-lg">{category}</h3>
          <h4 className="text-sm text-shadow-lg">{date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">
          {title}
        </h2>
        <p className="text-sm mt-4 ">
          {description}
        </p>
        <div className="flex justify-between items-center mt-5">
            <button className="bg-green-500 py-1 px-2 text-sm rounded">Completed</button>
            <button className="bg-red-500 py-1 px-2 text-sm rounded">Failed</button>
        </div>
      </div>
    )
}

export default AcceptTask;