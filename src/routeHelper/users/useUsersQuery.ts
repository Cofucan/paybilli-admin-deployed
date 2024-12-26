import { customFetch, generateUUID, sleep } from "../../utils/constants.ts";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UsersStatisticResponse, UsersTableResponse } from "./usersTypes.ts";

export interface FetchUsersTableProps {
  page?: number;
  limit?: number;
  status?: string;
  name?: string;
}

async function fetchUsers({ page = 1, limit = 10, status = "", name = "" }: FetchUsersTableProps) {
  const query = new URLSearchParams({
    page: page.toString(),
    pageSize: limit.toString(),
    ...(status && { account_status: status }),
    ...(name && { search: name }),
  });

  const response = await customFetch.get(`app_admin/users/?${query.toString()}`);
  const res = (await response.json()) as UsersTableResponse;
  return res.results.map((x) => ({ ...x, id: generateUUID() }));
}

async function fetchUserStatistic() {
  const response = await customFetch.get("app_admin/users/stats/");
  return (await response.json()) as UsersStatisticResponse;
}

const useUsersQuery = (table: FetchUsersTableProps) => {
  const queryClient = useQueryClient();

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

  const tableMutationAction = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      console.log({ id, status });
      await sleep(2);
      return { id, status };
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { statisticQuery, tableQuery, tableMutationAction };
};

export default useUsersQuery;
