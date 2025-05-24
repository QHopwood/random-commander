import { FilterContextTypes, FilterTypes } from "../types/FilterContextTypes";

export const isStringArray = (value: unknown): value is string[] => {
  return (
    Array.isArray(value) && value.every((item) => typeof item === "string")
  );
};

export const getFilterValue = (
  filters: FilterContextTypes,
  filterType: FilterTypes,
): string => {
  const value = filters[filterType];

  switch (filterType) {
    case FilterTypes.COLORS:
      return filters.colors
        .filter((color) => color.checked)
        .map((color) => color.value)
        .join(", ");

    case FilterTypes.MIN_CMV:
    case FilterTypes.MAX_CMV:
    case FilterTypes.MIN_PRICE:
    case FilterTypes.MAX_PRICE:
      return typeof value === "number" ? value.toString() : "0";

    case FilterTypes.MIN_SET_RELEASE_DATE:
    case FilterTypes.MAX_SET_RELEASE_DATE:
      return value instanceof Date
        ? value.toLocaleDateString()
        : new Date(value as string).toLocaleDateString();

    case FilterTypes.SET_RELEASE_NAMES:
    case FilterTypes.CONTAINS_KEYWORDS:
    case FilterTypes.TRIBES:
    case FilterTypes.SUBTYPES:
      return isStringArray(value) ? value.join(", ") : "";

    default:
      return typeof value === "string" ? value : "";
  }
};
