import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/$userId/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <main>
    PROF
  </main>
}


type User = {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  status: string;
  country: string
  bvn: string
  nin: string
  phone: string
  profileImage: string
  dateOfBirth: string
  accountCreated: string
}