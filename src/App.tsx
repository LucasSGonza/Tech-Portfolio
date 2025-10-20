import { Box } from "@mui/material";
import WebRouter from "@/routes/WebRouter";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component={"main"}
        sx={{
          flex: 1,
          padding: `24px`,
        }}
      >
        <WebRouter />
      </Box>
    </Box>
  );
}

export default App;
