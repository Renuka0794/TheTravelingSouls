import "./App.css";
import "./index.css";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import TripPackage from "./Pages/TripPackage";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header></Header>
        <div className="container m-0 p-0 max-w-[100%] app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/package" element={<TripPackage />} />

            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
        </div>
        <Footer />
        </BrowserRouter>
        </ThemeProvider>
    </div>
  );
}

export default App;
