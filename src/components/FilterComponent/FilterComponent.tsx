import React from "react";
import styles from "./FilterComponent.module.css";

const FilterComponent: React.FC = () => {
  return (
    <div className={styles.filterComponent}>
      <h2>Filter Options</h2>
      <label>
        <input type="checkbox" />
        Option 1
      </label>
      <label>
        <input type="checkbox" />
        Option 2
      </label>
      <label>
        <input type="checkbox" />
        Option 3
      </label>
    </div>
  );
};
export default FilterComponent;
