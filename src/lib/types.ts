import { Keyframes } from "@emotion/serialize";
import { SetRequired } from "type-fest";
import { IconProps, useTheme } from "@chakra-ui/react";

export type LoadingSpinnerProps = {
  duration?: number;
  variant?: string;
  color?: string;
  colorScheme?: string;
  colors?: [string, string, string, string, string, string];
  repeat?: number | string;
} & IconProps;

export type VariantProps = SetRequired<
  Pick<
    LoadingSpinnerProps,
    "duration" | "variant" | "color" | "colors" | "colorScheme" | "repeat"
  >,
  "variant" | "repeat"
>;

export type SpinnerVariant = {
  frames?: Keyframes;
  getIconStyles?: (
    props: VariantProps,
    theme: ReturnType<typeof useTheme>
  ) => React.CSSProperties;
  getSegmentStyles: (
    index: number,
    props: VariantProps,
    theme: ReturnType<typeof useTheme>
  ) => React.CSSProperties;
};
