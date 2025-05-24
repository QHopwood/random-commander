import React from "react";
import styles from "./FilterText.module.css";
import { FilterInputTypes } from "../../../types/FilterInputTypes";
import { TextBasedFilterTypes } from "../../../types/FilterContextTypes";
import { useFilters } from "../../../contexts/FilterContext";

interface FilterTextProps {
  inputType: FilterInputTypes;
  filter: TextBasedFilterTypes;
  placeholder?: string;
  numbersOnly?: boolean;
}

const FilterText: React.FC<FilterTextProps> = ({
  inputType,
  placeholder,
  filter,
}) => {
  const { filters, setFilters } = useFilters();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: e.target.value,
    }));
  };

  return (
    <div className={styles.filterTextContainer}>
      <input
        type={inputType}
        value={filters[filter]}
        onChange={handleChange}
        placeholder={placeholder}
        className={styles.filterInput}
      />
    </div>
  );
};

export default FilterText;
