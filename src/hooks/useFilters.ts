import { useState, useCallback } from "react";
import type { IFilterState } from "../types/user";

export const useFilters = (initialFilters: IFilterState) => {
  const [filters, setFilters] = useState<IFilterState>(initialFilters);

  const resetFilters = useCallback(() => {
    const resetState = { gender: "all", nationality: "all" };
    setFilters(resetState);
    return resetState;
  }, []);

  return {
    filters,
    setFilters,
    resetFilters,
  };
};
