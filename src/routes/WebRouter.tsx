import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, ProjectsPage, TechPage } from "@/pages";
import { ROUTES } from "@/util";

const WebRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={ROUTES.tech} element={<TechPage />} />
      <Route path={ROUTES.projects} element={<ProjectsPage />} />
      <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
    </Routes>
  );
};

export default WebRouter;
