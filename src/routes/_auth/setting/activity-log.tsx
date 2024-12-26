import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/setting/activity-log')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/setting/activity-log"!</div>
}
