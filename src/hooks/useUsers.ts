import { useState, useCallback } from "react";
import { API_BASE_URL, RESULTS_PER_PAGE } from "../constants/api";
import type { IFilterState, IUser } from "../types/user";
import type { IApiResponse } from "../types/api";

export const useUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchUsers = useCallback(
    async (page: number, filterState: IFilterState) => {
      setLoading(true);
      setError("");

      try {
        const params = new URLSearchParams({
          page: page.toString(),
          results: RESULTS_PER_PAGE.toString(),
        });

        if (filterState.gender !== "all") {
          params.append("gender", filterState.gender);
        }

        if (filterState.nationality !== "all") {
          params.append("nat", filterState.nationality);
        }

        const response = await fetch(`${API_BASE_URL}?${params}`);

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data: IApiResponse = await response.json();
        setUsers(data.results);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setUsers([]);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    users,
    loading,
    error,
    fetchUsers,
  };
};
