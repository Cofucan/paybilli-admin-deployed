import { customFetch } from "../../utils/constants.ts";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { UsersStatisticResponse, UsersTableResponse } from "./usersTypes.ts";

export interface FetchUsersTableProps {
  page?: number;
  limit?: number;
  status?: string;
  name?: string;
}

async function fetchUsers({
  page = 1,
  limit = 10,
  status = "",
  name = "",
}: FetchUsersTableProps) {
  const query = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    ...(status && { status }),
    ...(name && { name }),
  });

  const response = await fetch(
    `http://localhost:3000/users?${query.toString()}`,
  );
  return (await response.json()) as UsersTableResponse;
}

async function fetchUserStatistic() {
  const response = await customFetch.get("app_admin/users/stats/");
  return (await response.json()) as UsersStatisticResponse;
}

const useUsersQuery = (table: FetchUsersTableProps) => {
  const statisticQuery = useQuery({
    queryFn: fetchUserStatistic,
    queryKey: ["user", "statistic"],
  });
  //  TODO: Make table query here

  const tableQuery = useQuery({
    queryFn: () => fetchUsers(table),
    placeholderData: keepPreviousData,
    queryKey: ["user", "all", table],
  });

  return { statisticQuery, tableQuery };
};

export default useUsersQuery;
