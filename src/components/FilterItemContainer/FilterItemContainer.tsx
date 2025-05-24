import React from "react";
import { useFilters } from "../../contexts/FilterContext";
import styles from "./FilterItemContainer.module.css";
import { FilterTypes } from "../../types/FilterContextTypes";
import AddIcon from "../../assets/icons/add.png";
import RemoveIcon from "../../assets/icons/remove.png";

interface FilterItemContainerProps {
  filter: FilterTypes;
  children?: React.ReactNode;
}

const FilterItemContainer: React.FC<FilterItemContainerProps> = ({
  children,
  filter,
}) => {
  const { filters, setFilters } = useFilters();

  const handleOnclick = () => {
    if (filters["activeFilters"].includes(filter)) {
      setFilters((prev) => ({
        ...prev,
        activeFilters: prev.activeFilters.filter((e) => e !== filter),
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        activeFilters: prev.activeFilters.concat(filter),
      }));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterItem}>{children}</div>
      <div className={styles.buttonContainer}>
        {filters["activeFilters"].includes(filter) ? (
          <button
            className={styles.Button}
            type="button"
            onClick={() => handleOnclick()}
          >
            <img className={styles.Icon} src={RemoveIcon} alt="Remove" />
          </button>
        ) : (
          <button
            className={styles.Button}
            type="button"
            onClick={() => handleOnclick()}
          >
            <img className={styles.Icon} src={AddIcon} alt="Add" />
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterItemContainer;
