import { QueryClient } from "@tanstack/react-query";
import CustomFetchClient from "./CustomFetchClient.js";
import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export const queryClient = new QueryClient();
export const BASE_URL = "http://localhost:8000";
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

export function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const objectToFormData = (obj: Record<string, never>): FormData => {
  const formData: FormData = new FormData();

  // Recursive function to handle nested objects
  const appendFormData = (data: Record<string, never>, path = ''): void => {
    // @ts-expect-error It is recursive
    if ([null, undefined].includes(data)) {
      return;
    }

    if (Array.isArray(data)) {
      data.forEach((value: Record<string, never>, index: number) => {
        const newPath = `${path}[${index.toString()}]`;
        appendFormData(value, newPath);
      });
    } else if (data instanceof File) {
      formData.append(path, data);
    } else if (typeof data === 'object') {
      Object.entries(data).forEach(([key, value]: [string, Record<string, never>]) => {
        const newPath: string = path ? `${path}.${key}` : key;
        appendFormData(value, newPath);
      });
    } else {
      formData.append(path, String(data));
    }
  };

  appendFormData(obj);

  return formData;
}
