import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/$userId/view')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
  </>
}
