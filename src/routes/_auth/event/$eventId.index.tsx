import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/event/$eventId/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/event/$eventId/"!</div>
}
