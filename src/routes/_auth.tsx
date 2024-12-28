import { createFileRoute, Navigate, Outlet, useLocation } from "@tanstack/react-router";
import Header from "../components/header/Header.tsx";
import Sidebar from "../components/sidebar/Sidebar.tsx";
import { useAuth } from "../context/AuthContext.tsx";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = useAuth();
  const location = useLocation();

  if (user.isError) {
    return <Navigate to='/account/login' search={{ redirect: location.hash }} />;
  }
  return (
    <div className='h-screen w-full bg-light-grey'>
      <div className='layout grid overflow-y-hidden lg:h-screen lg:grid-cols-[auto_1fr]'>
        {/* TODO: Fix Bug Here*/}
        <div className='navbar fixed left-0 right-0 top-0 z-10 col-span-12'>
          <Header />
        </div>

        <div className='main mt-20 hidden overflow-y-hidden xl:block'>
          <Sidebar />
        </div>
        <div className='main mt-20 overflow-auto'>
          <Outlet />
        </div>
      </div>
    </div>

    // <div className='h-full w-full bg-light-grey'>
    //   <div className='flex w-full flex-col'>
    //     <div className='sticky top-0 z-10 w-full'>
    //       <Header />
    //     </div>
    //     <div className='relative flex max-md:flex-col'>
    //       <div className='main z-0 hidden overflow-y-hidden xl:block'>
    //         <Sidebar />
    //       </div>
    //       <div className='main overflow-auto bg-light-grey'>
    //         <Outlet />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
