import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setPassword } from "../../Store/loginSlice";
import {
  Typography,
  Grid,
  Button,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPass, toggleCheckbox] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.login);
  const { username, password } = userDetails;
  const navigate = useNavigate();

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:3001/api/login",
      userDetails
    );
    const data = await response.data;
    console.log(response);
    console.log(data);
    if (response.statusText === "OK") {
      dispatch(setUsername(""));
      dispatch(setPassword(""));
      console.log(data);
      Cookies.set("jwtToken", data.jwtToken, { expires: 30 });
      Cookies.set("user", data.payload.username, { expires: 30 });
      navigate("/");
    } else {
      setErrorMsg(data.error_msg);
    }
  };
  const paperStyle = {
    height: "auto",
    padding: 30,
    width: "auto",
    backgroundColor: "#ffffff",
    border: "2px solid #fff",
  };
  const loginPageContainer = {
    backgroundColor: "#8EB6DE",
    width: "100vw",
  };

  return (
    <>
      <Grid container maxWidth="xxl" minWidth="xs" style={loginPageContainer}>
        <Grid
          container
          height="100vh"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item align="center">
            <StoreIcon fontSize="large" sx={{ height: 100, width: 100 }} />
            <Typography variant="h2" color="#0F1E33" fontFamily={"serif"}>
              Craft Vista
            </Typography>
            <Typography variant="h6">Handcrafted Horizons</Typography>
          </Grid>
          <Grid item>
            <form onSubmit={onHandleSubmit}>
              <Paper elevation={20} style={paperStyle}>
                <Typography variant="h4" align="center">
                  Log in
                </Typography>
                <TextField
                  label="Username"
                  placeholder="Enter user name "
                  variant="outlined"
                  required
                  fullWidth
                  margin="normal"
                  value={username}
                  onChange={(e) => dispatch(setUsername(e.target.value))}
                />
                <TextField
                  label="Password"
                  placeholder="Enter Password"
                  variant="outlined"
                  required
                  fullWidth
                  margin="normal"
                  type={showPass ? "text" : "password"}
                  onChange={(e) => dispatch(setPassword(e.target.value))}
                  value={password}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Show password"
                  onClick={(e) => toggleCheckbox(e.target.checked)}
                />

                <Typography color="red" variant="subtitle2">
                  {errorMsg}
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ height: 50, marginTop: 20 }}
                  type="submit"
                >
                  Login
                </Button>
                <Typography
                  variant="subtitle1"
                  sx={{ marginTop: 2, textAlign: "center" }}
                >
                  Don't have account with us..?{" "}
                  <Link href="/register">Register now</Link>
                </Typography>
              </Paper>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
