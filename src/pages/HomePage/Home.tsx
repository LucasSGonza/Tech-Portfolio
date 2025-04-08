import { Box } from "@mui/material";

export const HomePage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "colum", bgcolor: "#fbfce8" }}>
      {/* Sobre mim */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h2>Sobre Mim...</h2>
          <span>
            Meu nome é Lucas Silva Gonçalves, tenho 21 anos, sou estudante de
            Sistemas de Informação na Universidade do Sul de Santa Catarina
            (UNISUL), atualmente no oitavo e último semestre, e sou
            desenvolvedor de software Full-stack! Na área de TI, estou sempre
            procurando por novos conhecimentos através de cursos e
            certificações, sempre em busca de ser melhor dia após dia.
            Atualmente as tecnologias que mais tenho contato e desenvolvido são:
            Java, Javascript (Node.js, Vite.js, React.js, Typescript, ...),
            Bancos de dados relacionais (SQL) e Git. No momento, sou
            Desenvolvedor de Software na Softplan!
          </span>
        </Box>
        <img
          alt="foto=perfil"
          src="src\assets\foto-comportado.png"
          style={{ width: "500px", height: "500px", objectFit: "contain" }}
        />
      </Box>
    </Box>
  );
};
