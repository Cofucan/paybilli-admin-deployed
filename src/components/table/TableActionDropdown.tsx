// import { HiOutlineDotsVertical } from "react-icons/hi";
// import { usersTableAction } from "../../routeHelper/users/usersData";
// export const usersTableAction = ({ navigate, tableMutationAction }: UsersTableAction) => [
//     {
//       title: "View User",
//       icon: Eye,
//       onClick: (id: string) => navigate({ to: "/$userId/detail", params: { userId: id } }),
//     },
//     {
//       title: "Edit User",
//       icon: Edit,
//       onClick: (id: string) => navigate({ to: "/$userId/edit", params: { userId: id } }),
//     },
//     {
//       title: "Verify User", icon: VerifyCheck, onClick: (id: string) => {
//         tableMutationAction.mutate({ id, status: "verified" });
//       },
//     },
//     {
//       title: "Reactivate User", icon: Like, onClick: (id: string) => {
//         tableMutationAction.mutate({ id, status: "deactivated" });
//       },
//     },
//     {
//       title: "Suspend User", icon: Delete, onClick: (id: string) => {
//         tableMutationAction.mutate({ id, status: "suspended" });
//       },
//     },
//   ];
// const TableActionDropdown:  = () => {

//   return  (<div className={"relative"}>
//     <button
//       onClick={() => {
//         props.setColumnIndex(prev => prev === id ? -1 : id);
//       }}
//       className="text-gray-400 hover:text-gray-600 text-xl"
//     >
//       <HiOutlineDotsVertical />
//     </button>
//     {id === props.columnIndex ? <div className="absolute right-0 z-20">
//       <TableActionDropdown id={id.toString()} data={usersTableAction(props)} />,
//     </div> : null}
//   </div>)
// }

// export default TableActionDropdown
