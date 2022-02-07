import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "./Link";

function appBarLabel(label: string) {
  return (
    <Toolbar>
      <Typography variant="h4" noWrap component="div" sx={{ flexGrow: 1 }}>
        <Link
          path="/"
          text={label}
          styles={{
            textDecoration: "none",
            color: "white",
          }}
        />
      </Typography>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export default function EnableColorOnDarkAppBar() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary" enableColorOnDark>
        {appBarLabel("Bookmark Manager")}
      </AppBar>
    </ThemeProvider>
  );
}
