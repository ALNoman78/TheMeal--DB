import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <div className="navbar md:w-10/12 mx-auto w-full">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl font-bold">TheMealDB</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 gap-5 font-medium text-lg">
                        <NavLink to= '/'>Home</NavLink>
                        <NavLink to= '/meal'>Meal</NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

Navbar.propTypes = {}

export default Navbar