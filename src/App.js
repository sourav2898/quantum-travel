import { Suspense, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App" onScroll={(e) => console.log(e)}>
        <Navbar />
        <Box p={2} m={2}>
          <Home />
        </Box>
      </div>
    </Suspense>
  );
}

export default App;
