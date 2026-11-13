import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip } from "@mui/material";
import { useState } from "react";
import type { MouseEvent } from "react";
import { PixelIcon } from "@/components/PixelIcon";
import { useLanguage } from "@/hooks";
import type { Language } from "@/types";
import { LANGUAGE_OPTION_BY_CODE, LANGUAGE_OPTIONS } from "@/util";

const MENU_ID = "language-menu";

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);

  const currentOption = LANGUAGE_OPTION_BY_CODE[language];
  const isMenuOpen = Boolean(menuAnchor);

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchor(null);
  };

  const handleSelectLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    handleCloseMenu();
  };

  return (
    <>
      <Tooltip title={t.language.change} arrow>
        <IconButton
          aria-label={`${t.language.change}: ${currentOption.label}`}
          aria-haspopup="menu"
          aria-controls={isMenuOpen ? MENU_ID : undefined}
          aria-expanded={isMenuOpen}
          onClick={handleOpenMenu}
        >
          <PixelIcon src={currentOption.flag} alt="" size={32} />
        </IconButton>
      </Tooltip>

      <Menu id={MENU_ID} anchorEl={menuAnchor} open={isMenuOpen} onClose={handleCloseMenu}>
        {LANGUAGE_OPTIONS.map((option) => (
          <MenuItem
            key={option.code}
            lang={option.code}
            selected={option.code === language}
            onClick={() => handleSelectLanguage(option.code)}
          >
            <ListItemIcon>
              <PixelIcon src={option.flag} alt="" size={24} />
            </ListItemIcon>
            <ListItemText>{option.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
