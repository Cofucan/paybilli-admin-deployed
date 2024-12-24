import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/transaction')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/transactions"!</div>
}
