import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/Routenames";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";

function App() {
  return (
    <Routes>
      <Route path={routes.general.home} element={<Layout />}>
        <Route index element={<Landing />} />
      </Route>
    </Routes>
  );
}

export default App;
