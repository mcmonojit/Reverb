import { BrowserRouter, Routes, Route } from "react-router-dom";

import Abouts from "../pages/Abouts";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<Abouts />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AllRoutes as Routes };
