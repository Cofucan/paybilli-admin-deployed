import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/audit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/audit"!</div>
}
