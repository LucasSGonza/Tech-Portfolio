import { PageSection, PixelIconList, ProjectBookDialog } from "@/components";
import { useLanguage } from "@/hooks";
import { useProjectsPage } from "./useProjectsPage";

export const ProjectsPage: React.FC = () => {
  const { t } = useLanguage();
  const { projects, selectedProject, isDialogOpen, handleSelectProject, handleCloseDialog } =
    useProjectsPage();

  return (
    <PageSection title={t.projects.title} description={t.projects.intro}>
      <PixelIconList
        items={projects}
        ariaLabel={t.projects.listLabel}
        onSelect={handleSelectProject}
      />
      <ProjectBookDialog
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </PageSection>
  );
};
