
const NewTask = () => {
    return (
        <div className="flex-shrink-0 h-full w-[300px] py-5 px-4 bg-emerald-400 rounded-lg overflow-auto relative">
        <div className="flex items-center justify-between ">
          <h3 className="bg-red-600 text-md rounded px-3 py-1">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">
          Make a Portfolio Website
        </h2>
        <p className="text-sm mt-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa
          aspernatur esse, quas nam recusandae!
        </p>
        <div className="flex justify-start items-center mt-4">
            <button className="bg-green-500 rounded py-0.5 px-2">Accept</button>
        </div>
      </div>
    )
}

export default NewTask;