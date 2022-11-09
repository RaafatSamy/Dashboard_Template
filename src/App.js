import "./App.css";
import DashboardBody from "./components/dashboardBody/DashboardBody";
import RightSide from "./components/rightSide/RightSide";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="appGlass">
        <Sidebar />
        <DashboardBody />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
