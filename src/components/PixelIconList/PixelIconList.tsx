import { Box, ButtonBase, Tooltip } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { PixelIcon } from "@/components/PixelIcon";

interface PixelIconListItem {
  id: string;
  name: string;
  icon: string;
  /** Quando informado, o item vira um link. */
  href?: string;
  /** Abre o link em nova aba (com `rel="noopener noreferrer"`). */
  isExternal?: boolean;
}

interface PixelIconListProps {
  items: PixelIconListItem[];
  ariaLabel: string;
  /** Quando informado, cada item sem `href` vira um botão que devolve o id do item selecionado. */
  onSelect?: (id: string) => void;
}

/** "Slot" de inventário: moldura quadrada que envolve cada ícone. */
const slotSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 72,
  height: 72,
  bgcolor: "background.paper",
  border: 4,
  borderColor: "secondary.main",
  "&:hover, &:focus-visible": {
    borderColor: "primary.main",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "primary.main",
    outlineOffset: 2,
  },
};

export const PixelIconList: React.FC<PixelIconListProps> = ({ items, ariaLabel, onSelect }) => {
  const renderSlot = (item: PixelIconListItem) => {
    const icon = <PixelIcon src={item.icon} alt="" />;

    if (item.href) {
      return (
        <ButtonBase
          component="a"
          href={item.href}
          target={item.isExternal ? "_blank" : undefined}
          rel={item.isExternal ? "noopener noreferrer" : undefined}
          aria-label={item.name}
          sx={slotSx}
        >
          {icon}
        </ButtonBase>
      );
    }

    if (onSelect) {
      return (
        <ButtonBase aria-label={item.name} onClick={() => onSelect(item.id)} sx={slotSx}>
          {icon}
        </ButtonBase>
      );
    }

    return (
      <Box role="img" aria-label={item.name} tabIndex={0} sx={slotSx}>
        {icon}
      </Box>
    );
  };

  return (
    <Box
      component="ul"
      aria-label={ariaLabel}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
        listStyle: "none",
        m: 0,
        p: 0,
      }}
    >
      {items.map((item) => (
        <Box component="li" key={item.id}>
          <Tooltip title={item.name} arrow enterTouchDelay={0}>
            {renderSlot(item)}
          </Tooltip>
        </Box>
      ))}
    </Box>
  );
};
