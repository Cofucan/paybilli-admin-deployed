import UsersBlack from "./assets/UsersBlack.svg";
import UsersGold from "./assets/UsersGold.svg";
import UsersGreen from "./assets/UsersGreen.svg";
import UsersPurple from "./assets/UsersPurple.svg";
import UsersRed from "./assets/UsersRed.svg";
import { TableColumn } from "../../components/table/hooks/useTable.ts";
import { UsersStatisticResponse, UsersTableData } from "./usersTypes.ts";
import { createColumn } from "../../components/table/hooks/useTable.tsx";

export const usersStats = (data?: UsersStatisticResponse) => [
  { icon: UsersBlack, count: data?.users, label: "Total Users" },
  { icon: UsersGreen, count: data?.verified_users, label: "Verified Users" },
  {
    icon: UsersPurple,
    count: data?.unverified_users,
    label: "Unverified Users",
  },
  {
    icon: UsersGold,
    count: data?.deactivated_users,
    label: "Deactivated Accounts",
  },
  {
    icon: UsersRed,
    count: data?.suspended_users,
    label: "Suspended Accounts",
  },
];

export const usersColumns = (checkboxId: string) =>
  [
    {
      id: "checkbox-data",
      header: () => <></>,
      cell: ({ id }) => (
        <input type={"checkbox"} name={id.toString()} className={checkboxId} />
      ),
      filterType: () => null,
    },
    {
      id: "user",
      header: () => "User",
      cell: (data) => (
        <div className="flex gap-6">
          <img src={data.profilePicture} alt={data.firstName + "'s Picture"} className="size-8 rounded-full" />
          <div>
            <h3 className="font-medium">
              {(`${data.firstName} ${data.lastName}`).slice(0, 10)}
            </h3>
              <span className="text-xs">@{data.userName}</span>
          </div>
        </div>
      ),
      filterType: (data) => `${data.firstName} ${data.lastName}`,
    },
    createColumn("email", { header: "Email Address" }),
    createColumn("dateRegistered", {
      header: "Date Registered",
      cell: ({ dateRegistered }) => (
        <>{new Date(dateRegistered).toDateString()}</>
      ),
    }),
    createColumn("status", { header: "Status" }),
    {
      id: "action",
      header: () => <>Action</>,
      // TODO: Add a function that handles the different actions
      cell: (data) => <>{data.id}</>,
      filterType: () => <></>,
    },
  ] as const satisfies readonly TableColumn<UsersTableData>[];
