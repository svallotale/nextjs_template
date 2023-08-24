import {apiBase} from "@/api/request";

export const fetcher = async (path: string, options?: RequestInit) => await apiBase(path, options).json();
