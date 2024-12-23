import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { AuthContextProps } from "../context/AuthContext.tsx";

interface RouterContext {
  auth: AuthContextProps;
}

export const Route = createRootRouteWithContext<RouterContext>()({ component: () => <Outlet /> });

