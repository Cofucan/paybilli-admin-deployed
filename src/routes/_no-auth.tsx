import { createFileRoute, Navigate, Outlet } from '@tanstack/react-router'
import { useAuth } from '../context/AuthContext'

export const Route = createFileRoute('/_no-auth')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): { redirect?: string } => {
    return {
      redirect: search.redirect as string,
    }
  },
})

function RouteComponent() {
  const { user } = useAuth()

  if (!user.isError) {
    return <Navigate to="/" search={{ redirect: location.href }} />
  }
  return <Outlet />
}
