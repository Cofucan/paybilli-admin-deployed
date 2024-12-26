import { ComponentPropsWithoutRef } from "react";

export type CustomIconProps = {
  pathClassName?: string;
} & ComponentPropsWithoutRef<"svg">;
export interface AuthResponse {
  token: { access: string; refresh: string };
  user: User;
}

export interface PaginationRequest {
  page?: number;
  page_size?: number;
}

export interface PaginationRespose<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  email_verified: boolean;
  phone_number: string;
  date_of_birth: string;
  month_of_birth: string;
  country: string;
  state: string;
  profile_image_url: string;
  bvn: string;
  nin: string;
  is_signup_completed: boolean;
  is_profile_completed: boolean;
  is_kyc_completed: boolean;
  is_transaction_pin_set: boolean;
  is_onboarding_completed: boolean;
  account_status: AccountStatus;
  recent_activity: null | string;
}

export type AccountStatus = "verified" | "unverified" | "deactivated" | "suspended";

export interface Events {
  id: number;
  creator: {
    id: number;
    username: string;
    name: string;
    profile_image: string;
  };
  participants: [
    {
      participant: {
        id: number;
        username: string;
        name: string;
        profile_image: string;
      };
      condition: string;
      is_creator: boolean;
      winner: boolean;
      joined_at: string;
    },
  ];
  event_type: string;
  refund_condition: string;
  total_amount: string;
  commission: string;
  currency: string;
  event_name: string;
  is_system: boolean;
  due_date: string;
  amount: string;
  status: EventsStatus;
  event_id: string;
  created_at: string;
}
export type EventsStatus = "open" | "pending" | "closed" | "waiting";
