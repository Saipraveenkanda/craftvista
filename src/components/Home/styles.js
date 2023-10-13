import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainContainer: {
    height: "100vh",
  },
  homeContainer: {
    backgroundColor: "#cfd8dc",
    padding: 20,
  },
  sideBar: {
    padding: 10,
    backgroundColor: "#607d8b",
  },
  profileCard: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#37474f",
  },
  rightContainer: {
    backgroundColor: "#607d8b",
    padding: 10,
  },
  toolbarStyle: {
    backgroundColor: "#263238",
    height: "5vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  postActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 20,
  },
  postCloseBtn: {
    cursor: "hover",
  },
});

export default useStyles;
