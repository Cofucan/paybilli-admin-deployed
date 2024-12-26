import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/withdrawal")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_auth/withdrawal"!</div>;
}
