export interface EventsStatsResponse {
  total_count: number;
  open_count: number;
  pending_count: number;
  closed_count: number;
}

export interface EventsTableResponse {
  count: number;
  next: number;
  previous: number;
  results: EventsTableData[];
}

export interface EventsTableData {
  id: number;
  creator: { name: string; username: string, id: string, profileImage: string };
  participants: never[];
  bet_type: string;
  event_type: string;
  amount: string;
  currency: string;
  event_name: string;
  is_system: boolean;
  due_date: string;
  refund_condition: string;
  status: "open" | "pending" | "closed" | "waiting";
  event_id: string;
  created_at: string;
}
