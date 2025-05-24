import RandomCommanderButton from "./components/RandomCommanderButton/RandomCommanderButton";
import styles from "./App.module.css";
import CommanderCard from "./components/CommanderCard/CommanderCard";
import OptionsSidebar from "./components/OptionsSidebar/OptionsSidebar";

function App() {
  return (
    <div className={styles.page}>
      <OptionsSidebar />
      <div className={styles.main}>
        <div className={styles.titleBlock}>
          <h1>test</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.cardContainer}>
            <div className={styles.commanderCard}>
              <CommanderCard url="https://placehold.co/500x600" alt="test" />
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <RandomCommanderButton onClick={() => console.log("clicked")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
