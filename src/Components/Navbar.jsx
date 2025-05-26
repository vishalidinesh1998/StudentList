import { Link } from "react-router-dom"
function Navbar(){
    return(
        <div className="flex bg-red-600 p-4 justify-around text-white text-2xl font-bold">
            <h1> <Link to={"/"} className="underline">ListofStudents</Link></h1>
            <h1> <Link to={"/FavouritList"} className="underline">Fovourit List</Link></h1>
        </div>
    )
}

export default Navbar