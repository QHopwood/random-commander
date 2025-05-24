import React, { useState } from "react";
import styles from "./SidebarTab.module.css";

interface Tab {
  label: string;
  icon: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.tabContainer}>
      {/* Tab Headers */}
      <div className={styles.tabHeader}>
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(index)}
            className={
              styles.tabButton +
              (activeTab === index ? " " + styles.active : "")
            }
            type="button"
          >
            {tab.label + " " + tab.icon}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
