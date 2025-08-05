import type { IFilterState } from "../types/user";

export function updateURL(page: number, filterState: IFilterState) {
  const params = new URLSearchParams();
  params.set("page", page.toString());

  if (filterState.gender !== "all") {
    params.set("gender", filterState.gender);
  }

  if (filterState.nationality !== "all") {
    params.set("nat", filterState.nationality);
  }

  const newURL = `${window.location.pathname}?${params}`;
  window.history.replaceState({}, "", newURL);
}
