import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/notification")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_auth/notification"!</div>;
}
