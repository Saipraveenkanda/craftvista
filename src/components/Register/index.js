import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setUsername,
  setPassword,
  setEmail,
  setDateofbirth,
  setGender,
} from "../../Store/registerSlice";
import {
  Typography,
  Grid,
  Button,
  Paper,
  TextField,
  Container,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Box,
  Link,
} from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  const userdetails = useSelector((state) => state.register);
  const { username, password, email, gender } = userdetails;

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:3001/api/users",
      userdetails
    );
    const data = response.data;
    if (response.statusText === "OK") {
      dispatch(setUsername(""));
      dispatch(setPassword(""));
      dispatch(setEmail(""));
      dispatch(setDateofbirth(""));
      dispatch(setGender(""));
      alert("User created successfully, redirecting to login page");
      navigate("/login");
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
  // console.log(e["$d"].toLocaleString().split(",")[0]);
  return (
    <Grid container maxWidth="xxl" minWidth="xs" style={loginPageContainer}>
      <Grid
        container
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Container align="center" maxWidth="sm">
          <StoreIcon fontSize="large" sx={{ height: 100, width: 100 }} />
          <Typography variant="h2" color="#0F1E33" fontFamily={"serif"}>
            Craft Vista
          </Typography>
          <Typography variant="h6">Handcrafted Horizons</Typography>
        </Container>
        <Container maxWidth="sm">
          <form onSubmit={onHandleSubmit}>
            <Paper elevation={20} style={paperStyle}>
              <Typography variant="h4" align="center">
                Join Us!
              </Typography>

              <TextField
                label="Username"
                placeholder="Enter user name "
                variant="outlined"
                required
                value={username}
                fullWidth
                margin="normal"
                onChange={(e) => dispatch(setUsername(e.target.value))}
              />
              <TextField
                label="Email"
                placeholder="Enter email "
                variant="outlined"
                required
                fullWidth
                value={email}
                margin="normal"
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
              <TextField
                label="Password"
                placeholder="Enter Password"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                type="password"
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
              />
              <Box
                sx={{
                  "& > :not(style)": { mt: 1, width: "48%" },
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      label="Date of Birth"
                      onChange={(e) =>
                        dispatch(
                          setDateofbirth(e["$d"].toLocaleString().split(",")[0])
                        )
                      }
                    />
                  </DemoContainer>
                </LocalizationProvider>

                <FormControl variant="outlined">
                  <InputLabel id="demo-simple-select-standard-label">
                    Gender
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={gender}
                    onChange={(e) => dispatch(setGender(e.target.value))}
                    label="Gender"
                  >
                    <MenuItem value="Select">Select</MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Typography
                color="red"
                variant="subtitle1"
                sx={{ marginTop: 2, textAlign: "center" }}
              >
                {errorMsg}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ height: 50, marginTop: 20 }}
                type="submit"
              >
                Register
              </Button>
              <Typography
                variant="subtitle1"
                sx={{ marginTop: 2, textAlign: "center" }}
              >
                Already a member..? <Link href="/login">Login now</Link>
              </Typography>
            </Paper>
          </form>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Register;
