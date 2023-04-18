import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/Routenames";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path={routes.general.home} element={<Layout />}></Route>
    </Routes>
  );
}

export default App;
