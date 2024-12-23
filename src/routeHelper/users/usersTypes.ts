export interface UsersStatisticResponse {
  users: number;
  verified_users: number;
  unverified_users: number;
  deactivated_users: number;
  suspended_users: number;
}

export interface UsersTableResponse {
  meta: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    itemsPerPage: number;
  };
  data: UsersTableData[];
}

// TODO: Change to User
export interface UsersTableData {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  profilePicture: string;
  email: string;
  dateRegistered: string;
  recentActivity: string;
  status:  'verified' | 'unverified' | 'suspended' | 'deactivated';
}
