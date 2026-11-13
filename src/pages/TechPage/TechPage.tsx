import { PageSection, PixelIconList } from "@/components";
import { useLanguage } from "@/hooks";
import { TECHNOLOGIES } from "@/util";

export const TechPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <PageSection title={t.tech.title} description={t.tech.intro}>
      <PixelIconList items={TECHNOLOGIES} ariaLabel={t.tech.listLabel} />
    </PageSection>
  );
};
