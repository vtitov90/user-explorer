import { type IUser } from "./user";

export interface IApiResponse {
  results: IUser[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

export interface IFetchUsersParams {
  page: number;
  results: number;
  gender?: string;
  nat?: string;
}

export interface IFetchUsersResult {
  users: IUser[];
  totalPages: number;
}
