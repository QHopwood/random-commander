import React, { createContext, ReactNode, use, useMemo, useState } from "react";
import * as FilterTypes from "../types/FilterContextTypes";

interface FilterContextValue {
  filters: FilterTypes.FilterContextTypes;
  setFilters: React.Dispatch<
    React.SetStateAction<FilterTypes.FilterContextTypes>
  >;
}
const FilterContext = createContext<FilterContextValue | undefined>(undefined);
export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<FilterTypes.FilterContextTypes>({
    colors: [],
    allowMulticolor: true,
    minCMV: 0,
    maxCMV: Number.MAX_VALUE,
    minPopularity: 0,
    maxPopularity: Number.MAX_VALUE,
    minSetReleaseDate: new Date(0),
    maxSetReleaseDate: new Date(),
    setReleaseNames: [],
    minPrice: 0,
    maxPrice: Number.MAX_VALUE,
    containsInName: "",
    containsInText: "",
    containsKeywords: [],
    tribes: [],
    subtypes: [],
    activeFilters: [],
  });

  // Memoize the context value to prevent unnecessary re-renders
  const filterValue = useMemo(
    () => ({
      filters,
      setFilters,
    }),
    [filters],
  );

  return <FilterContext value={filterValue}>{children}</FilterContext>;
};

export const useFilters = () => {
  const context = use(FilterContext);
  if (!context) {
    throw new Error("useFilters must be used within a FilterProvider");
  }
  return context;
};
