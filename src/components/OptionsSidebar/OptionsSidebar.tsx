import React from "react";
import SidebarTab from "../SidebarTab";
import FilterListComponent from "../FilterListComponent";
import styles from "./OptionsSidebar.module.css";

const tabs = [
  {
    label: "Filters",
    icon: "🖊️",
    content: <FilterListComponent />,
  },
  {
    label: "Likes",
    icon: "❤️",
    content: <div>Appearance Settings</div>,
  },
  {
    label: "Search",
    icon: "🔍",
    content: <div>Search</div>,
  },
];
const OptionsSidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <SidebarTab tabs={tabs} />
    </div>
  );
};

export default OptionsSidebar;
