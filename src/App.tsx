import RandomCommanderButton from "./components/RandomCommanderButton/RandomCommanderButton";
import "./App.css";
import CommanderCard from "./components/CommanderCard/CommanderCard";
import OptionsSidebar from "./components/OptionsSidebar/OptionsSidebar";

function App() {
  return (
    <>
      <div className="page">
        <OptionsSidebar />
        <div className="main-content">
          <div className="title-block">
            <h1>test</h1>
          </div>
          <div className="content">
            <div className="card-container">
              <div className="commander-card">
                <CommanderCard url="https://placehold.co/500x600" alt="test" />
              </div>
              <div className="filter-options"></div>
            </div>
            <div className="button-container">
              <RandomCommanderButton onClick={() => console.log("clicked")} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
