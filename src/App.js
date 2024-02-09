import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import MainDashboard from "./components/MainDash/MainDashboard";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDashboard />
      </div>
    </div>
  );
}

export default App;
