// Format: "01 Mar, 2024"
export function formatDate(dateString: string | number | Date) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

// Format: "29 Jul, 2024 04:30pm"
export function formatDateTime(dateString: string | number | Date) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return formattedDate.replace(" AM", "am").replace(" PM", "pm");
}
// Format: "29 Jul, 2024 04:30pm"
export function formatTime(dateString: string | number | Date) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return formattedDate.replace(" AM", "am").replace(" PM", "pm");
}

// Format: "2024-09-14 04:30 PM"
export function formatDateTimeWithSeconds(dateString: string | number | Date) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

// ISO 8601 format: "2025-03-11T21:56:43.687Z"
export function formatISO(dateString: string | number | Date) {
  const date = new Date(dateString);
  return date.toISOString(); // Converts to ISO string
}
