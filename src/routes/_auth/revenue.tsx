import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/revenue')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/revenue"!</div>
}
