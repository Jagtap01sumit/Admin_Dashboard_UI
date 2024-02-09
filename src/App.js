import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import MainDashboard from "./components/MainDash/MainDashboard";
import RightSide from "./components/RightSide/RightSide";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDashboard />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
