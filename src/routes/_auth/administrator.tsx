import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/administrator")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_auth/adminstrator"!</div>;
}