import { BrowserRouter, Routes, Route } from "react-router-dom";

import Abouts from "../pages/Abouts";
import About from "../pages/about/About";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/abouts" element={<Abouts />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AllRoutes as Routes };
