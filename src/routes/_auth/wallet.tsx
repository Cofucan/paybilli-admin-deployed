import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/wallet')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/wallet"!</div>
}
