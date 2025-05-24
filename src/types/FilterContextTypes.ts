export enum Colors {
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
  BLACK = "black",
  WHITE = "white",
  COLORLESS = "colorless",
}

export enum FilterTypes {
  COLORS = "colors",
  ALLOW_MULTICOLOR = "allowMulticolor",
  MIN_CMV = "minCMV",
  MAX_CMV = "maxCMV",
  MIN_POPULARITY = "minPopularity",
  MAX_POPULARITY = "maxPopularity",
  MIN_SET_RELEASE_DATE = "minSetReleaseDate",
  MAX_SET_RELEASE_DATE = "maxSetReleaseDate",
  SET_RELEASE_NAMES = "setReleaseNames",
  MIN_PRICE = "minPrice",
  MAX_PRICE = "maxPrice",
  CONTAINS_IN_NAME = "containsInName",
  CONTAINS_IN_TEXT = "containsInText",
  CONTAINS_KEYWORDS = "containsKeywords",
  TRIBES = "tribes",
  SUBTYPES = "subtypes",
  ACTIVE_FILTERS = "activeFilters",
}

export enum TextBasedFilterTypes {
  MIN_CMV = "minCMV",
  MAX_CMV = "maxCMV",
  MIN_POPULARITY = "minPopularity",
  MAX_POPULARITY = "maxPopularity",
  MIN_PRICE = "minPrice",
  MAX_PRICE = "maxPrice",
  CONTAINS_IN_NAME = "containsInName",
  CONTAINS_IN_TEXT = "containsInText",
}

export enum SelectBasedFilterTypes {
  COLORS = "colors",
}

// This interface may not *technically* need to have 'checked' since the select test
// checks if the value is in the array of selected values, not the specific checked state
interface ColorObject {
  value: Colors;
  checked: boolean;
}

export interface FilterContextTypes {
  colors: ColorObject[];
  allowMulticolor: boolean;
  minCMV: number;
  maxCMV: number;
  minPopularity: number;
  maxPopularity: number;
  minSetReleaseDate: Date;
  maxSetReleaseDate: Date;
  setReleaseNames: string[];
  minPrice: number;
  maxPrice: number;
  containsInName: string;
  containsInText: string;
  containsKeywords: string[];
  tribes: string[];
  subtypes: string[];
  activeFilters: FilterTypes[];
}
