import Eye from "./assets/eye.svg";
import Edit from "./assets/edit.svg";
import VerifyCheck from "./assets/verifyCheck.svg";
import Like from "./assets/like.svg";
import Delete from "./assets/delete.svg";
import UsersBlack from "./assets/UsersBlack.svg";
import UsersGold from "./assets/UsersGold.svg";
import UsersGreen from "./assets/UsersGreen.svg";
import UsersPurple from "./assets/UsersPurple.svg";
import UsersRed from "./assets/UsersRed.svg";
import { TableColumn } from "../../components/table/hooks/useTable.ts";
import { UsersStatisticResponse } from "./usersTypes.ts";
import { createColumn } from "../../components/table/hooks/useTable.tsx";
import { UseNavigateResult } from "@tanstack/react-router";
import { UseMutationResult } from "@tanstack/react-query";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Dispatch, SetStateAction } from "react";
import TableActionDropdown from "../../components/dropdown/TableActionDropdown.tsx";
import { User } from "../../utils/types.ts";

const statusClasses = {
  verified: {
    dot: "bg-green-600",
    label: "bg-green-100 text-green-600",
  },
  unverified: {
    dot: "bg-blue-600",
    label: "bg-blue-100 text-blue-600",
  },
  deactivated: {
    dot: "bg-yellow-600",
    label: "bg-yellow-100 text-yellow-600",
  },
  suspended: {
    dot: "bg-red-600",
    label: "bg-red-100 text-red-600",
  },
};

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

interface UsersTableAction {
  navigate: UseNavigateResult<string>,
  tableMutationAction: UseMutationResult<{ id: string, status: string }, Error, { id: string, status: string }>
}

export const usersTableAction = ({ navigate, tableMutationAction }: UsersTableAction) => [
  {
    title: "View User",
    icon: Eye,
    onClick: (id: string) => navigate({ to: "/user/$userId", params: { userId: id } }),
  },
  {
    title: "Edit User",
    icon: Edit,
    onClick: (id: string) => navigate({ to: "/user/$userId/edit", params: { userId: id } }),
  },
  {
    title: "Verify User", icon: VerifyCheck, onClick: (id: string) => {
      tableMutationAction.mutate({ id, status: "verified" });
    },
  },
  {
    title: "Reactivate User", icon: Like, onClick: (id: string) => {
      tableMutationAction.mutate({ id, status: "deactivated" });
    },
  },
  {
    title: "Suspend User", icon: Delete, onClick: (id: string) => {
      tableMutationAction.mutate({ id, status: "suspended" });
    },
  },
];


interface UsersColumn extends UsersTableAction {
  checkboxId: string;
  columnIndex: number | string;
  setColumnIndex: Dispatch<SetStateAction<number | string>>;
}

export const usersColumns = (props: UsersColumn) =>
  [
    {
      id: "checkbox-data",
      header: <></>,
      cell: ({ id }) => (
        <input type={"checkbox"} name={id.toString()} className={`${props.checkboxId} rounded`} />
      ),
      filterType: () => null,
    },
    {
      id: "user",
      header: "User",
      cell: (data) => (
        <div className="flex gap-4 text-left items-center">
          <img src={data.profilePicture} alt={data.firstName + "'s Picture"} className="size-8 rounded-full" />
          <div>
            <h3 className="font-medium">
              {(`${data.firstName} ${data.lastName}`).slice(0, 10)}
            </h3>
            <span className="text-xs text-gray-400">@{data.userName}</span>
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
    createColumn("recentActivity", {
      header: "Recent Activity",
      cell: ({ recentActivity }) => (
        <>{new Date(recentActivity).toDateString()}</>
      ),
    }),
    createColumn("status", {
      header: "Status", cell: ({ status }) => <div className="flex items-center">
        <span
          className={`w-2 h-2 rounded-full mr-2 ${statusClasses[status].dot}`}
        />
        <span
          className={`px-2 py-1 text-xs rounded-lg ${statusClasses[status].label}`}
        >
          {status}
        </span>
      </div>,
    }),
    {
      id: "action",
      header: <>Action</>,
      cell: ({ id }) => (<div className={"relative"}>
        <button
          onClick={() => {
            props.setColumnIndex(id === props.columnIndex ? -1 : id);
          }}
          className="text-gray-400 hover:text-gray-600 text-xl"
        >
          <HiOutlineDotsVertical />
        </button>
        {id === props.columnIndex ? <div className="absolute right-0 z-20">
          <TableActionDropdown id={id.toString()} data={usersTableAction(props)} />,
        </div> : null}
      </div>),
      filterType: () => <></>,
    },
  ] as const satisfies readonly TableColumn<User>[];
