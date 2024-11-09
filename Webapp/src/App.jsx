import { Route, Routes } from "react-router-dom";
import "./App.css";
import Authentication from "./components/Authentication";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Authentication />} />
      </Routes>
    </div>
  );
}

export default App;
