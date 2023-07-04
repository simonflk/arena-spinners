import { Icon, useTheme } from "@chakra-ui/react";

import { ArenaLogo } from "./arena-logo";
import { VariantProps, LoadingSpinnerProps } from "./types";
import { variants } from "./spinner-variants";

export type { LoadingSpinnerProps };

export function LoadingSpinner({
  variant = "fadeInOut",
  duration,
  colors,
  colorScheme,
  repeat = "infinite",
  ...props
}: LoadingSpinnerProps) {
  const theme = useTheme();

  const variantProps: VariantProps = {
    duration,
    variant,
    color: props.color,
    colors,
    colorScheme,
    repeat
  };
  const getPathStyles = (index: number) => {
    return variants[variant].getSegmentStyles(index, variantProps, theme);
  };

  return (
    <Icon
      as={ArenaLogo}
      {...props}
      sx={{
        "path:nth-child(1)": getPathStyles(0),
        "path:nth-child(2)": getPathStyles(1),
        "path:nth-child(3)": getPathStyles(2),
        "path:nth-child(4)": getPathStyles(3),
        "path:nth-child(5)": getPathStyles(4),
        "path:nth-child(6)": getPathStyles(5),
        ...variants[variant].getIconStyles?.(variantProps, theme),
        ...props.sx
      }}
    />
  );
}
