import { Suspense, useState } from "react";
import "./App.css";
import "./index.css";
import "./input.css";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>loading.....</div>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
