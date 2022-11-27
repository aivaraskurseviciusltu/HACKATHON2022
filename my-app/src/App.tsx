import { ThemeProvider } from "@mui/material";
import "./App.css";
import Dashboard from "./dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buddy from "./buddy/Buddy";
import Tech from "./tech/Tech";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/buddy" element={<Buddy />} />
          <Route path="/tech" element={<Tech />} />
      </Routes>
    </div>
  );
}

export default App;
