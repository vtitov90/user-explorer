export const API_BASE_URL = "https://randomuser.me/api/";

export const RESULTS_PER_PAGE = 10;

export const NATIONALITIES = [
  { code: "all", name: "All Nationalities" },
  { code: "us", name: "United States" },
  { code: "gb", name: "Great Britain" },
  { code: "fr", name: "France" },
  { code: "de", name: "Germany" },
  { code: "au", name: "Australia" },
] as const;

export const GENDERS = [
  { value: "all", label: "All" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
] as const;

export const FILTERS_INITIAL_STATE = {
  gender: "all",
  nationality: "all",
};
