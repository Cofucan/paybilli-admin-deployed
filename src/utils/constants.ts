import { QueryClient } from "@tanstack/react-query";
import CustomFetchClient from "./CustomFetchClient.js";
import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export const queryClient = new QueryClient();
export const BASE_URL = "http://localhost:8000"
export const customFetch = new CustomFetchClient(BASE_URL, {
  credentials: "include",
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateUUID() {
  return "xxxxxxxx".replace(/[x]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
