
const Header = () => {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-xl">Hello ,<br /> <span className=" text-2xl font-semibold"> Kevin 👋🫂</span> </h1>
            <button className=" bg-red-600 text-white px-4 py-2 rounded-sm cursor-pointer font-semibold">Log Out</button>
        </div>
    )
}

export default Header;