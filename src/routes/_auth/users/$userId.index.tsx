import { createFileRoute } from "@tanstack/react-router";
import UserProfile from "../../../routeHelper/userId/UserProfile";
import UserStatistics from "../../../routeHelper/userId/userStatistics";
import { useUserGetById } from "../../../hooks/useUsersQuery";

export const Route = createFileRoute("/_auth/users/$userId/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { userId } = Route.useParams();
  const userProfileQuery = useUserGetById(userId);

  return (
    <div className=''>
      <UserProfile user={userProfileQuery.data} />
      <UserStatistics />
    </div>
  );
}
