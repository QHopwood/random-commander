import React from "react";
import styles from "./FilterCheckboxList.module.css";
import { useFilters } from "../../../contexts/FilterContext";
import {
  Colors,
  SelectBasedFilterTypes,
} from "../../../types/FilterContextTypes";

interface CheckboxItem {
  text: string;
  value: Colors; // update if additional types are needed
  checked: boolean;
}

interface FilterCheckboxProps {
  data: CheckboxItem[];
  filter: SelectBasedFilterTypes;
}

const FilterCheckboxList: React.FC<FilterCheckboxProps> = ({
  data,
  filter,
}) => {
  const { filters, setFilters } = useFilters();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: CheckboxItem,
  ) => {
    if (e.target.checked) {
      item.checked = true;
      setFilters((prev) => ({
        ...prev,
        [filter]: filters[filter].concat(item),
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [filter]: filters[filter].filter((e) => e.value !== item.value),
      }));
    }
  };

  return (
    <div className={styles.filterCheckboxContainer}>
      {data.map((item) => (
        <label key={item.value as string} className={styles.filterLabel}>
          {item.text}
          <input
            type="checkbox"
            value={item.value as string}
            onChange={(e) => handleChange(e, item)}
            checked={filters[filter].some((e) => e.value === item.value)}
            className={styles.filterInput}
          />
        </label>
      ))}
    </div>
  );
};

export default FilterCheckboxList;
