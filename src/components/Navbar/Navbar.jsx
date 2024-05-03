import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="flex w-full shadow-md py-3 z-[9999] bg-white">
        <div className="container flex justify-between p-3 items-center">
          <Link to="/">
            <div className="logo flex text-[#040404] font-black text-3xl cursor-pointer">
              Neutralink<span className="text-blue-700">.</span>
            </div>
          </Link>
          {/* Navlinks */}
          <div>
            <ul className="flex justify-between gap-5 text-[18px]">
              <li className="text-gray-800 font-extrabold capitalize">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "active text-blue-700 transition-all ease-in"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="text-gray-800 font-extrabold capitalize">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "active text-blue-700 transition-all ease-in"
                      : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="text-gray-800 font-extrabold capitalize">
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive
                      ? "active text-blue-700 transition-all ease-in"
                      : ""
                  }
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Side Navbar */}
          <div className="flex">
            <div>
              <button className="hidden md:block bg-blue-700 text-white border border-blue-500 w-36 h-12 font-bold rounded-sm">
                Make A Post
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
