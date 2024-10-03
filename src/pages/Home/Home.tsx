import { AppBar, Box, List, Toolbar } from "@mui/material";

export const HomePage = () => {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar sx={{ bgcolor: "yellow" }}>
          <List></List>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
