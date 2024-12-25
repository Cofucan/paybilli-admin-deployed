import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/user/$userId/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/user/$userId/"!</div>
}
