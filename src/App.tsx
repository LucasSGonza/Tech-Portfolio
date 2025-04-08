import { Box } from "@mui/material";
import WebRouter from "@/routes/WebRouter";
import { NavBar } from "@/components";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />
      <Box
        component={"main"}
        sx={{
          flex: 1,
          padding: `80px`, //NOTE: 64px é minimo da AppBar... futuramente pegar isso pela store
        }}
      >
        <WebRouter />
      </Box>
    </Box>
  );
}

export default App;
