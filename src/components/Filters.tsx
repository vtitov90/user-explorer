import { Filter, RotateCcw } from "lucide-react";
import { NATIONALITIES } from "../constants/api";
import { GENDERS } from "../constants/api";
import type { IFilterState } from "../types/user";
import Button from "./Button";

interface IFiltersProps {
  filters: IFilterState;
  handleFilterChange: (filterType: keyof IFilterState, value: string) => void;
  loading: boolean;
  resetFilters: () => void;
}

function Filters({
  filters,
  handleFilterChange,
  loading,
  resetFilters,
}: IFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-gray-500" />
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        {/* Gender Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender
          </label>
          <select
            value={filters.gender}
            onChange={(e) => handleFilterChange("gender", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={loading}
          >
            {GENDERS.map((gender) => (
              <option key={gender.value} value={gender.value}>
                {gender.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nationality
          </label>
          <select
            value={filters.nationality}
            onChange={(e) => handleFilterChange("nationality", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={loading}
          >
            {NATIONALITIES.map((nat) => (
              <option key={nat.code} value={nat.code}>
                {nat.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Button
            onClick={resetFilters}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RotateCcw className="w-4 h-4" />
            Reset Filters
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
