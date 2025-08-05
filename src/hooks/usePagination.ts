import { useState } from "react";

export const usePagination = (initialPage: number = 1) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  return {
    currentPage,
    setCurrentPage,
  };
};
