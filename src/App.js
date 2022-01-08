import './App.css';
import HeaderStatistics from "./components/HeaderStatistics";
import TownMap from "./components/TownMap";
import UserInput from "./components/UserInput";
function App() {
  return (
    <div className="App">
      <HeaderStatistics/>
      <div id="mainWrapper">
          <UserInput/>
          <TownMap/>
      </div>

    </div>
  );
}

export default App;
