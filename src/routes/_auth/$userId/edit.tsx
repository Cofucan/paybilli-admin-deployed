import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/$userId/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/$userId/edit"!</div>
}
