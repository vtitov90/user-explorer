import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";

interface IPaginationProps {
  currentPage: number;
  loading: boolean;
  handlePageChange: (newPage: number) => void;
}

function Pagination({
  currentPage,
  loading,
  handlePageChange,
}: IPaginationProps) {
  return (
    <div className="mt-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1 || loading}
          className="flex items-center gap-1 px-3 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>

        <div className="flex items-center gap-2">
          {[...Array(3)].map((_, i) => {
            const pageNum = Math.max(1, currentPage - 1) + i;

            return (
              <Button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                disabled={loading}
                active={pageNum === currentPage}
              >
                {pageNum}
              </Button>
            );
          })}
        </div>

        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={loading}
          className="flex items-center gap-1 px-3 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
