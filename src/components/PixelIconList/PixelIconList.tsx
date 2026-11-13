import { Box, ButtonBase, Tooltip } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { PixelIcon } from "@/components/PixelIcon";

interface PixelIconListItem {
  id: string;
  name: string;
  icon: string;
}

interface PixelIconListProps {
  items: PixelIconListItem[];
  ariaLabel: string;
  /** Quando informado, cada item vira um botão que devolve o id do item selecionado. */
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
            {onSelect ? (
              <ButtonBase aria-label={item.name} onClick={() => onSelect(item.id)} sx={slotSx}>
                <PixelIcon src={item.icon} alt="" />
              </ButtonBase>
            ) : (
              <Box role="img" aria-label={item.name} tabIndex={0} sx={slotSx}>
                <PixelIcon src={item.icon} alt="" />
              </Box>
            )}
          </Tooltip>
        </Box>
      ))}
    </Box>
  );
};
