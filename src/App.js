import { Suspense, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import About from "./components/About";
import News from "./components/News";
import RoadMap from "./components/RoadMap";
import Team from "./components/Team";
import Partners from "./components/Partners";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const tittleFont = '"Lakki Reddy", cursive';
  const descFont = "Josefin Sans";
  const spanTitleFont = "Inconsolata";
  const secondaryTitleFont = "Merienda";
  const theme = createTheme({
    typography: {
      title: { fontFamily: tittleFont },
      h4: { fontFamily: tittleFont },
      h3: { fontFamily: tittleFont },
      h5: { fontFamily: secondaryTitleFont },
      h6: { fontFamily: secondaryTitleFont },
      description: {
        fontFamily: descFont,
        fontWeight: "600",
        color: "#AAB2CD",
      },
      sectitle: { fontFamily: secondaryTitleFont },
      spanTitle: { fontFamily: spanTitleFont },
    },
  });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <div className="App">
          <ThemeProvider theme={theme}>
            <Navbar />
            <Box p={{ sm: 1, xs: 1, md: 2 }} m={{ sm: 0, xs: 0, md: 2 }}>
              <Home />
              <About />
              <News />
              <RoadMap />
              <Team />
              <Partners />
              <ContactUs />
            </Box>
            <Footer />
          </ThemeProvider>
        </div>
      </Suspense>
    </>
  );
}

export default App;
