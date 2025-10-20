import { Box, Icon } from "@mui/material";

export const HomePage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", bgcolor: "#fbfce8" }}>
      {/* Sobre mim */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "50%",
        }}
      >
        <img
          alt="foto=perfil"
          src="src\assets\foto-comportado.png"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "100%",
          }}
        />
        <h1>Sobre Mim...</h1>
        <span style={{ maxWidth: "60%", textAlign: "justify" }}>
          Meu nome é Lucas Silva Gonçalves, tenho 22 anos, sou formado em
          Sistemas de Informação pela Universidade do Sul de Santa Catarina
          (UNISUL) e atualmente atuo como Desenvolvedor de Software Full-stack
          na @Softplan! Na área de TI, estou sempre procurando por novos
          conhecimentos através de cursos e certificações, sempre em busca de
          ser melhor dia após dia. Atualmente as tecnologias que mais tenho
          contato e desenvolvido são: Java (Springboot + JPA), Javascript
          (Node.js, Vite.js, React.js, Typescript, ...), Bancos de dados
          relacionais (SQL) e Git.
        </span>
      </Box>
      {/* Projetos + Tech */}
      <Box>
        {/* Projetos */}
        <Box>
          <h2>Projetos</h2>
          <Box>
            <Icon>smart_toy</Icon>
          </Box>
        </Box>
        {/* Tech */}
        <Box>
          <h2>Tecnologias</h2>
          <Box>
            <Icon>smart_toy</Icon>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
