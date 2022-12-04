import "./App.css";
import LoginForm from "./components/LoginForm";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function App() {
  return (
    <div className="App">
      <LeftSide></LeftSide>
      <RightSide></RightSide>
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
