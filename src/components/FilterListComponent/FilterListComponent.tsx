import React from "react";
import styles from "./FilterListComponent.module.css";
import FilterText from "../Filters/FilterText";
import { FilterInputTypes } from "../../types/FilterInputTypes";
import {
  Colors,
  FilterTypes,
  SelectBasedFilterTypes,
  TextBasedFilterTypes,
} from "../../types/FilterContextTypes";
import FilterCheckboxList from "../Filters/FilterCheckboxList";
import FilterItemContainer from "../FilterItemContainer/FilterItemContainer";
import { useFilters } from "../../contexts/FilterContext";
import { getFilterValue } from "../../utils/FilterTypeConverter";
const FilterListComponent: React.FC = () => {
  const { filters } = useFilters();

  return (
    <div className={styles.filterComponent}>
      <h2>Filter Options</h2>
      <h3>Active Filters:</h3>
      <div>
        {filters["activeFilters"].length > 0
          ? filters["activeFilters"].map((filter) => (
              <span key={filter} className={styles.activeFilter}>
                {`${filter}: ${getFilterValue(filters, filter)}`}
              </span>
            ))
          : "No active filters"}
      </div>
      <FilterItemContainer filter={FilterTypes.COLORS}>
        <FilterCheckboxList
          data={[
            { text: "Red", value: Colors.RED, checked: false },
            { text: "Blue", value: Colors.BLUE, checked: false },
            { text: "Green", value: Colors.GREEN, checked: false },
            { text: "Black", value: Colors.BLACK, checked: false },
            { text: "White", value: Colors.WHITE, checked: false },
            { text: "Colorless", value: Colors.COLORLESS, checked: false },
          ]}
          filter={SelectBasedFilterTypes.COLORS}
        />
      </FilterItemContainer>
      <FilterItemContainer filter={FilterTypes.MIN_CMV}>
        <label>
          Min Converted Mana Value
          <FilterText
            inputType={FilterInputTypes.NUMBER}
            filter={TextBasedFilterTypes.MIN_CMV}
            placeholder="Enter min CMV..."
          />
        </label>
      </FilterItemContainer>
      <hr />
      <FilterItemContainer filter={FilterTypes.CONTAINS_IN_NAME}>
        <label>
          Contains in Name
          <FilterText
            inputType={FilterInputTypes.TEXT}
            filter={TextBasedFilterTypes.CONTAINS_IN_NAME}
            placeholder="Search..."
          />
        </label>
      </FilterItemContainer>
      <FilterItemContainer filter={FilterTypes.CONTAINS_IN_TEXT}>
        <label>
          Contains in Text
          <FilterText
            inputType={FilterInputTypes.TEXT}
            filter={TextBasedFilterTypes.CONTAINS_IN_TEXT}
            placeholder="Search..."
          />
        </label>
      </FilterItemContainer>
      <hr />
    </div>
  );
};
export default FilterListComponent;
