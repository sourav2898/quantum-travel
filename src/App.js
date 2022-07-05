import { Suspense, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import About from "./components/About";
import News from "./components/News";

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">
        <Navbar />
        <Box p={{ sm: 1, xs: 1, md: 2 }} m={{ sm: 0, xs: 0, md: 2 }}>
          <Home />
          <About />
          <News />
        </Box>
      </div>
    </Suspense>
  );
}

export default App;
