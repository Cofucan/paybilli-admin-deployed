import Logout from "./assets/logout.svg";

import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useAuth } from "../../context/AuthContext.tsx";
import { sidebarItems } from "./SidebarData.ts";

const Sidebar = () => {
  const router = useRouterState();

  const navigate = useNavigate(); // For redirection after logout
  const { logout } = useAuth(); // Get the logout function from useAuth

  // Handle the logout functionality
  const handleLogout = async () => {
    logout();
    await navigate({ to: "/account/login" });
  };

  return (
    <section className='sidebar-scroll h-full w-[250px] border-r bg-[#fff] lg:w-[320px]'>
      <ul className='flex h-full w-full flex-col'>
        {sidebarItems.map(({ label, to, activeImage, inactiveImage }, index) => {
          return (
            <li key={index} className='-mb-4'>
              <Link
                className={"mx-4 mt-5 flex items-center gap-2 rounded-md p-4 text-lg font-normal"}
                activeProps={{
                  className: "bg-light-blue-500 text-white hover:text-white",
                }}
                inactiveProps={{
                  className: "text-slate-800 hover:text-slate-800",
                }}
                to={to}
              >
                <img
                  src={router.location.href === to ? activeImage : inactiveImage}
                  alt={`${label} Icon`}
                  className='h-5 w-5'
                />
                {label}
              </Link>
            </li>
          );
        })}
        <li
          className='mx-4 mt-5 flex cursor-pointer items-center rounded-md p-4 text-black'
          onClick={handleLogout}
        >
          <img src={Logout} alt='#' className='h-5 w-5' />
          <span className='ml-2 text-lg font-[400] text-slate-800'>Logout</span>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
