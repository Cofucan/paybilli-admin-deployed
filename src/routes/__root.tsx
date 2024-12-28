import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import LoadingSpinner from "../components/loading/LoadingSpinner.tsx";
import { AuthContextProps, useAuth } from "../context/AuthContext.tsx";

interface RouterContext {
  auth: AuthContextProps;
}

const RouteComponent: React.FC = () => {
  const { user } = useAuth();
  if (user.isLoading) return <LoadingSpinner size={"10"} />;
  return <Outlet />;
};

export const Route = createRootRouteWithContext<RouterContext>()({ component: RouteComponent });
