import { Link } from "react-router-dom";
import { useAuthContext } from "../store/useContext";

const Navbar = () => {
  const {isLoggedIn,setIsLoggedIn} = useAuthContext();
  

  const{authUser} = useAuthContext();
  return (
    <>
      <div className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl">
            Astro-Coder
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
            {!authUser ? <><li>
                <Link to={"/register"} className="justify-between">
                  Register
                </Link>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li></> : <li>
                <Link to={"/logout"}>Logout</Link>
              </li>}
              
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
