import { useEffect } from "react";
import { AlertCircle } from "lucide-react";
import Header from "./Header";
import Filters from "./Filters";
import TableContainer from "./TableContainer";
import Loader from "./Loader";
import Table from "./Table";
import NoUsers from "./NoUsers";
import Pagination from "./Pagination";
import type { IFilterState } from "../types/user";
import { useUsers } from "../hooks/useUsers";
import { useFilters } from "../hooks/useFilters";
import { usePagination } from "../hooks/usePagination";

import { FILTERS_INITIAL_STATE } from "../constants/api";
import { updateURL } from "../utils/updateURL";

function UserTable() {
  const { users, loading, error, fetchUsers } = useUsers();
  const { filters, setFilters, resetFilters } = useFilters(
    FILTERS_INITIAL_STATE
  );
  const { currentPage, setCurrentPage } = usePagination();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const pageFromURL = parseInt(urlParams.get("page") || "1", 10);
    const genderFromURL = urlParams.get("gender") || "all";
    const natFromURL = urlParams.get("nat") || "all";

    const initialFilters = {
      gender: genderFromURL,
      nationality: natFromURL,
    };

    setCurrentPage(pageFromURL);
    setFilters(initialFilters);
    fetchUsers(pageFromURL, initialFilters);
  }, [fetchUsers, setCurrentPage, setFilters]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && !loading) {
      setCurrentPage(newPage);
      updateURL(newPage, filters);
      fetchUsers(newPage, filters);
    }
  };

  const handleFilterChange = (
    filterType: keyof IFilterState,
    value: string
  ) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    setCurrentPage(1);
    updateURL(1, newFilters);
    fetchUsers(1, newFilters);
  };

  const handleResetFilters = () => {
    const resetState = resetFilters();
    setCurrentPage(1);
    updateURL(1, resetState);
    fetchUsers(1, resetState);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Header />

        <Filters
          filters={filters}
          handleFilterChange={handleFilterChange}
          loading={loading}
          resetFilters={handleResetFilters}
        />

        <TableContainer>
          {loading && <Loader />}

          {error && !loading && (
            <div className="flex items-center justify-center py-12">
              <AlertCircle className="w-8 h-8 text-red-500" />
              <div className="ml-3">
                <p className="text-red-600 font-medium">Error loading users</p>
                <p className="text-gray-600 text-sm">{error}</p>
              </div>
            </div>
          )}

          {!loading && !error && users.length > 0 && <Table users={users} />}

          {!loading && !error && users.length === 0 && <NoUsers />}
        </TableContainer>

        {!loading && !error && users.length > 0 && (
          <Pagination
            currentPage={currentPage}
            loading={loading}
            handlePageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}

export default UserTable;
