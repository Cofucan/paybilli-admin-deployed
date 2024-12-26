import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/account/_noAuth")({
  component: () => <Outlet />,
  validateSearch: (search: Record<string, unknown>): { redirect?: string } => {
    return {
      redirect: search.redirect as string,
    };
  },
  beforeLoad: ({ context, search }) => {
    if (context.auth.authToken) {
      console.log(context.auth.authToken);

      throw redirect({ to: search.redirect ?? "/" });
    }
  },
});
