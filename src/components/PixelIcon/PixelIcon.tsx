import { Box } from "@mui/material";

interface PixelIconProps {
  src: string;
  /** Use string vazia quando o ícone for decorativo (o rótulo já está no elemento pai). */
  alt: string;
  size?: number;
}

export const PixelIcon: React.FC<PixelIconProps> = ({ src, alt, size = 48 }) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        display: "block",
        flexShrink: 0,
        width: size,
        height: size,
        imageRendering: "pixelated",
      }}
    />
  );
};
