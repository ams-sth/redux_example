import { Route, Routes } from "react-router-dom";
import "./App.css";
import Authentication from "./components/Authentication";
// import Collection from "./components/Collection";

function App() {
  return (
    <div>
      {/* <Collection /> */}
      <Routes>
        <Route path="/" element={<Authentication />} />
      </Routes>
    </div>
  );
}

export default App;
