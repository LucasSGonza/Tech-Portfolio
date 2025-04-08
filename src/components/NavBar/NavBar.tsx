import { AppBar, Button, List, Toolbar } from "@mui/material";

export const NavBar = () => {
  const topBarLinks = ["Links", "Tecnologias", "Projetos", "Sobre mim"];

  //TODO: 'boxShadow: none' no 'AppBar' ?
  return (
    <AppBar position="fixed" sx={{ bgcolor: "#ffff", minHeight: "auto" }}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0 80px 0 80px",
          margin: 0,
        }}
        disableGutters
      >
        <h2
          style={{
            margin: 0,
          }}
        >
          Lucas Silva Gonçalves
        </h2>
        <List
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: "48px",
            margin: 0,
          }}
        >
          {topBarLinks.map((text, index) => (
            <li key={`btn-${text}-${index}`}>
              <Button variant="text" sx={{ textTransform: "none" }}>
                {text}
              </Button>
            </li>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
};
