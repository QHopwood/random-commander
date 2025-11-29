import RandomCommanderButton from "./components/RandomCommanderButton/RandomCommanderButton";
import styles from "./App.module.css";
import CommanderCard from "./components/CommanderCard/CommanderCard";
import OptionsSidebar from "./components/OptionsSidebar/OptionsSidebar";
import { NetworkProvider, useNetwork } from "./contexts/NetworkContext";
import { FilterProvider } from "./contexts/FilterContext";

function App() {
  return (
    <FilterProvider>
      <NetworkProvider>
        <AppContent />
      </NetworkProvider>
    </FilterProvider>
  );
}

const AppContent: React.FC = () => {
  const { card, loading } = useNetwork();
  return (
    <div className={styles.page}>
      <OptionsSidebar />
      <div className={styles.main}>
        <div className={styles.titleBlock}>
          <h1>
            {!card && loading ? "Loading..." : card?.name || "Random Commander"}
          </h1>
        </div>
        <div className={styles.content}>
          <div className={styles.cardContainer}>
            <div className={styles.commanderCard}>
              <CommanderCard />
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <RandomCommanderButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
