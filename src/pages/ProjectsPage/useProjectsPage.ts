import { useState } from "react";
import type { Project } from "@/types";
import { PROJECTS } from "@/util";

export const useProjectsPage = () => {
  // O projeto selecionado é mantido após fechar para o conteúdo não sumir
  // durante a animação de saída do diálogo.
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSelectProject = (projectId: string) => {
    const project = PROJECTS.find((candidate) => candidate.id === projectId);
    if (!project) return;

    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return {
    projects: PROJECTS,
    selectedProject,
    isDialogOpen,
    handleSelectProject,
    handleCloseDialog,
  };
};
