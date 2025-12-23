import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Student from "./pages/Student";
import Payment from "./pages/Payment";
import Fees from "./pages/Fees";
import Report from "./pages/Report";
import Setting from "./pages/Setting";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Student />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/settings" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
