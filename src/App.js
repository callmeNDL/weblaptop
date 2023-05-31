import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import AppLayout from "./layout/Layout";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
