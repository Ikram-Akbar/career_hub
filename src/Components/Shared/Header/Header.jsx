import { NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li><NavLink to="/" className="nav-link">Home</NavLink></li>
      <li><NavLink to="/jobs" className="nav-link">Jobs</NavLink></li>
      <li><NavLink to="/statistics" className="nav-link">Statistics</NavLink></li>
      <li><NavLink to="/applied" className="nav-link">Applied Jobs</NavLink></li>
    </>
  );
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-md py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a href="#" className="text-white text-xl font-semibold">Career@HUB</a>
        <ul className="hidden lg:flex space-x-4">
          {links}
        </ul>
        <a href="#" className="btn btn-outline text-white hover:bg-white hover:text-red-500 border-white border hover:border-transparent transition duration-300">Apply Now</a>
      </div>
    </div>
  );
};

export default Header;
