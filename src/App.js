import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import ProtectedRoute from "./ProtectedRoute";
import Settings from "./components/Settings";
import Friends from "./components/Friends";
import { ThemeProvider, createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import CraftStore from "./components/CraftStore";

const App = () => {
  const modeObj = useSelector((state) => state.theme);

  const darkTheme = createTheme({
    palette: {
      mode: modeObj.mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        {/**Protected / private routes which can't be accessed by unauthorized user */}
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user/settings" element={<Settings />} />
          <Route exact path="/user/friends" element={<Friends />} />
          <Route exact path="/store" element={<CraftStore />} />
        </Route>

        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
};
export default App;
