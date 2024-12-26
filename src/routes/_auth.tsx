import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import Header from "../components/header/Header.tsx";
import Sidebar from "../components/sidebar/Sidebar.tsx";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
  beforeLoad: ({ context, location }) => {
    if (!context.auth.authToken) {
      // eslint-disable-next-line @typescript-eslint/only-throw-error
      throw redirect({
        to: "/account/login",
        search: { redirect: location.href },
      });
    }
  },
});

function RouteComponent() {
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
