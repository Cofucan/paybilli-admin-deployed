import { createFileRoute } from '@tanstack/react-router'
import UserProfile from '../../../routeHelper/userId/userProfile'
import profilePicture from '../../../routeHelper/userId/assets/profilePicture.svg'
import UserStatistics from '../../../routeHelper/userId/userStatistics'


export const Route = createFileRoute('/_auth/$userId/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="">
      <UserProfile
        profilePicture={profilePicture}
        fullName="John Badarin"
        email="johnbaderin@gmail.com"
        username="Johnie"
        country="Nigeria"
        accountCreated="02 August, 2023"
        dateOfBirth="12 August, 1994"
        status="Active"
        bvn="33440233233"
        phoneNumber="0902323743"
      />
      <UserStatistics />
    </div>
  )
}
