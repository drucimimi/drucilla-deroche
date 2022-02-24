import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

const Contact = loadable(() => import("./pages/Contact"));
const Home = loadable(() => import("./pages/Home"));
const NotFound = loadable(() => import("./pages/NotFound"));
const Portfolio = loadable(() => import("./pages/Portfolio"));
const Referals = loadable(() => import("./pages/Referals"));

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/portfolio' exact element={<Portfolio />} />
        <Route path='/referals' exact element={<Referals />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
