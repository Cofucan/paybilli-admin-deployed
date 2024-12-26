import { createFileRoute, Navigate, Outlet, useLocation } from "@tanstack/react-router";
import Header from "../components/header/Header.tsx";
import Sidebar from "../components/sidebar/Sidebar.tsx";
import { useAuth } from "../context/AuthContext.tsx";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = useAuth()
  const location = useLocation()
  
  if (user.isError) {
    return <Navigate to="/account/login" search={{ redirect: location.hash }} />
  }
  return (
    <div className='layout grid h-screen grid-cols-[auto_1fr] overflow-y-hidden'>
      {/* TODO: Fix Bug Here*/}
      <div className='navbar col-span-12'>
        <Header />
      </div>
      <div className='main overflow-y-hidden'>
        <Sidebar />
      </div>
      <div className='main overflow-auto bg-light-grey'>
        <Outlet />
      </div>
    </div>

    // <div className="h-full w-full bg-light-grey">
    //   <div className="flex w-full flex-col">
    //     <div className="sticky top-0 z-10 w-full">
    //       <Header />
    //     </div>
    //     <div className="relative flex max-md:flex-col">
    //       <div className="z-0 hidden xl:block">
    //         <Sidebar />
    //       </div>
    //       <Outlet />
    //       {/* This will render the nested routes, like Dashboard */}
    //     </div>
    //   </div>
    // </div>
  );
}
