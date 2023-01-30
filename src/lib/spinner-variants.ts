import { keyframes } from "@chakra-ui/react";
import { get } from "lodash-es";

import { VariantProps, SpinnerVariant } from "./types";

const colorSchemes = {
  brand: Array(6).fill("brand.500"),
  rainbow: ["#ff3366", "#ff6633", "#FFCC33", "#33FF66", "#3366FF", "#CC33FF"],
  flag: ["#bf0a30", "#ffffff", "#3939ff", "#bf0a30", "#ffffff", "#3939ff"],
  grays: ["gray.50", "gray.200", "gray.400", "gray.500", "gray.600", "gray.800"]
} as const;

const getSegmentColor = (index: number, props: VariantProps) =>
  props.colors?.[index] ??
  (props.colorScheme && colorSchemes[props.colorScheme]?.[index]);

export const variants: Record<
  | "fadeOut"
  | "fadeInOut"
  | "searchlight"
  | "gap"
  | "breathe"
  | "pulse"
  | "ripple"
  | "scaleOut"
  | "scale3d"
  | "shimmer"
  | "spin"
  | "yoyo"
  | "rotate"
  | "flip"
  | "twirl"
  | "contract"
  | "chameleon"
  | "colorChange"
  | "draw",
  SpinnerVariant
> = {
  fadeOut: {
    frames: keyframes`
      0% { opacity: 1; }
      100% { opacity: 0; }
    `,
    getSegmentStyles: (index, props) => {
      const self = variants[props.variant];
      const duration = props.duration ?? 1.25;
      const delay = index * (duration / 6);
      return {
        opacity: 0,
        color: getSegmentColor(index, props),
        animation: `${self.frames} ${duration}s ease-in ${delay}s ${props.repeat} forwards`
      };
    }
  },

  fadeInOut: {
    frames: keyframes`
      0% { opacity: 0; }
      16.6% { opacity: 1; }
      50% { opacity: 1; }
      66.6% { opacity: 0; }
    `,
    getSegmentStyles: (index, props) => {
      const self = variants[props.variant];
      const duration = props.duration ?? 2.5;
      const delay = index * (duration / 12);
      return {
        opacity: 0,
        color: getSegmentColor(index, props),
        animation: `${self.frames} ${duration}s ease-in ${delay}s ${props.repeat} forwards`
      };
    }
  },

  searchlight: {
    frames: keyframes`
      30% { opacity: 0.1; }
      50% { opacity: 1; }
      70% { opacity: 0.1; }
  `,
    getSegmentStyles: (index, props) => {
      const self = variants[props.variant];
      const duration = props.duration ?? 1.25;
      const delay = index * (duration / 6);
      return {
        opacity: 0.1,
        color: getSegmentColor(index, props),
        animation: `${self.frames} ${duration}s ease-in ${delay}s ${props.repeat} forwards`
      };
    }
  },

  gap: {
    frames: keyframes`
      30% { opacity: 1; }
      50% { opacity: 0; }
      70% { opacity: 1; }
    `,
    getSegmentStyles: (index, props) => {
      const self = variants[props.variant];
      const duration = props.duration ?? 1.25;
      const delay = index * (duration / 6);
      return {
        color: getSegmentColor(index, props),
        animation: `${self.frames} ${duration}s ease-in ${delay}s ${props.repeat} forwards`
      };
    }
  },

  breathe: {
    frames: keyframes`
      0%, 5% { transform: scale(0.75); }
      20% { transform: scale(1); }
      25% { transform: scale(1); }
      100% { transform: scale(0.75); }
    `,
    getSegmentStyles: (index, props) => {
      const self = variants.breathe;
      const duration = props.duration ?? 3.5;
      const delay = 0;
      return {
        transformOrigin: "center",
        transformBox: "view-box",
        color: getSegmentColor(index, props),
        animation: `${self.frames} ${duration}s ease-in ${delay}s ${props.repeat} forwards`
      };
    }
  },

  pulse: {
    frames: keyframes`
      0% { transform: scale(0.95); }
      5% { transform: scale(1.1); }
      39% { transform: scale(0.85); }
      45% { transform: scale(1); }
      60% { transform: scale(0.95); }
      100% { transform: scale(0.9); }
    `,
    getSegmentStyles: (index, props) => {
      const self = variants[props.variant];
      const duration = props.duration ?? 1.5;
      const delay = 0;
      return {
        transformOrigin: "center",
        color: getSegmentColor(index, props),
        animation: `${self.frames} ${duration}s ease-in ${delay}s ${props.repeat} forwards`
      };
    }
  },

  ripple: {
    frames: keyframes`
      0% { transform: scale(1); }
      50% { transform: scale(0.75); }
      100% { transform: scale(0.75); }
  `,
    getSegmentStyles: (index, props) => {
      const self = variants[props.variant];
      const duration = props.duration ?? 1.5;
      const delay = (-5 + index) * (duration / 24);
      return {
        transformOrigin: "center",
        color: getSegmentColor(index, props),
        animation: `${self.frames} ${duration}s cubic-bezier(0, 0.5, 0.5, 1) ${delay}s ${props.repeat} forwards`
      };
    }
  },

  scaleOut: {
    frames: keyframes`
      0% { transform: scale(0.25); }
      100% { transform: scale(1); opacity: 0 }
    `,
    getIconStyles: (props, theme) => {
      const { frames } = variants[props.variant];
      const duration = props.duration ?? 1.5;
      return {
        transformOrigin: "center",
        animation: `${frames} ${duration}s cubic-bezier(0, 0.5, 0.5, 1) 0s ${props.repeat} forwards`
      };
    },
    getSegmentStyles: (index, props) => {
      return {
        color: getSegmentColor(index, props)
      };
    }
  },

  scale3d: {
    frames: keyframes`
      0%, 70%, 100% {
        transform: scale3D(1, 1, 1);
      } 35% {
        transform: scale3D(0, 0, 1);
      } 
    `,
    getSegmentStyles: (index, props) => {
      const { frames } = variants[props.variant];
      const duration = props.duration ?? 1.5;
      const delay = index * (duration / 12);
      return {
        color: getSegmentColor(index, props),
        transformOrigin: "center",
        transformBox: "fill-box",
        animation: `${frames} ${duration}s ease-in-out ${delay}s ${props.repeat} forwards`
      };
    }
  },

  shimmer: {
    frames: keyframes`
      0%, 100% { opacity 1; }
      50% { opacity: 0.5 }
    `,
    getSegmentStyles: (index, props) => {
      const self = variants[props.variant];
      const duration = props.duration ?? 1;
      const delay =
        index * (duration / 12) -
        (index % 4) * (duration / 6) +
        (index % 3) * (duration / 5);
      return {
        color: getSegmentColor(index, props),
        animation: `${self.frames} ${duration}s ease-in ${delay}s ${props.repeat} forwards`
      };
    }
  },

  spin: {
    frames: keyframes`
      0% { transform: rotate(0deg); }
      100% { transform: rotate(720deg); }
    `,
    getSegmentStyles: (index, props) => {
      const self = variants[props.variant];
      const duration = props.duration ?? 1.5;
      const delay = 0;
      return {
        transformOrigin: "center",
        color: getSegmentColor(index, props),
        animation: `${self.frames} ${duration}s ease-in-out ${delay}s ${props.repeat} both`
      };
    }
  },

  yoyo: {
    frames: keyframes`
      0% { transform: rotate(0deg) scale(0.8); }
      100% { transform: rotate(720deg) scale(1); }
    `,
    getSegmentStyles: (index, props) => {
      const self = variants[props.variant];
      const duration = props.duration ?? 1.5;
      const delay = 0;
      return {
        transformOrigin: "center",
        color: getSegmentColor(index, props),
        animation: `${self.frames} ${duration}s ease-in-out ${delay}s ${props.repeat} alternate both`
      };
    }
  },

  rotate: {
    frames: keyframes`
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    `,
    getSegmentStyles: (index, props) => {
      const self = variants[props.variant];
      const duration = props.duration ?? 1.5;
      const delay = 0;
      return {
        transformOrigin: "center",
        color: getSegmentColor(index, props),
        animation: `${self.frames} ${duration}s linear ${delay}s ${props.repeat} forwards`
      };
    }
  },

  flip: {
    frames: keyframes`
      0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg); }
      50% { transform: perspective(120px) rotateX(-180deg) rotateY(0deg); }
      100% { transform: perspective(120px) rotateX(-180deg) rotateY(-180deg); }
      `,
    getSegmentStyles: (index, props) => {
      const self = variants[props.variant];
      const duration = props.duration ?? 1.5;
      const delay = 0;
      return {
        transformOrigin: "center",
        color: getSegmentColor(index, props),
        animation: `${self.frames} ${duration}s ease-in-out ${delay}s ${props.repeat} forwards`
      };
    }
  },

  twirl: {
    getIconStyles: (props) => {
      const rotate = variants.rotate.frames;
      const duration = props.duration ?? 1.5;
      return {
        animation: `${rotate} ${duration}s linear infinite forwards`
      };
    },
    frames: keyframes`
      35%, 100% { transform: rotate(360deg); } 
    `,
    getSegmentStyles: (index, props) => {
      const self = variants[props.variant];
      const duration = props.duration ?? 2.5;
      const delay = index * (duration / 36);
      return {
        transformOrigin: "center",
        color: getSegmentColor(index, props),
        animation: `${self.frames} ${duration}s linear ${delay}s ${props.repeat} forwards`
      };
    }
  },

  contract: {
    getIconStyles: (props) => {
      const rotate = variants.rotate.frames;
      const duration = props.duration ?? 1.5;
      return {
        scale: 0.75,
        transformOrigin: "center",
        animation: `${rotate} ${duration}s linear forwards`
      };
    },
    getSegmentStyles: (index, props) => {
      const matrix = [
        [1, -1, 0],
        [1, 0, 0],
        [1, 1, 0],
        [-1, 1, 0],
        [-1, 0, 0],
        [-1, -1, 0]
      ];
      const contract = keyframes`
        0% { transform: translate3d(0, 0, 0) rotate(0deg);  }
        50% { transform: translate3d(${matrix[index][0] * 5}%, ${
        matrix[index][1] * 5
      }%, 0) rotate(180deg); }
        100% { transform: translate3d(0, 0, 0) rotate(360deg); }
      `;
      const duration = props.duration ?? 1.5;
      const delay = 0;
      return {
        transformOrigin: "center",
        color: getSegmentColor(index, props),
        animation: `${contract} ${duration}s linear ${delay}s ${props.repeat} forwards`
      };
    }
  },

  chameleon: {
    getSegmentStyles: (index, props, theme) => {
      const colors =
        props.colors ??
        (props.colorScheme && colorSchemes[props.colorScheme]) ??
        (props.color && [props.color, "gray.200", "gray.600"]) ??
        colorSchemes.grays;

      const frames = keyframes`
          ${colors.map((color, i) => {
            const stepSize = 100 / colors.length;
            const step = i * stepSize;
            return `${step}% { color: var(--chameleon-spinner-color-${i}); }`;
          })}
          100% { color: var(--chameleon-spinner-color-0); }
        `;

      const duration = props.duration ?? colors.length / 2;
      const delay = index * (duration / (6 * colors.length));
      const colorProps = Object.fromEntries(
        colors.map((color, i) => [
          `--chameleon-spinner-color-${i}`,
          get(theme, `colors.${color}`, color)
        ])
      );

      return {
        ...colorProps,
        animation: `${frames} ${duration}s linear ${delay}s ${props.repeat} both`
      };
    }
  },

  colorChange: {
    getSegmentStyles: (index, props, theme) => {
      const colors =
        props.colors ??
        (props.colorScheme && colorSchemes[props.colorScheme]) ??
        (props.color && [props.color, "gray.200", "gray.600"]) ??
        colorSchemes.grays;

      const frames = keyframes`
          ${colors.map((color, i) => {
            const stepSize = 100 / colors.length;
            const step = i * stepSize;
            return `${step}%, ${
              step + stepSize - 0.1
            }% { color: var(--chameleon-spinner-color-${i}); }`;
          })}
          100% { color: var(--chameleon-spinner-color-0); }
        `;

      const duration = props.duration ?? colors.length / 2;
      const delay = index * (duration / (6 * colors.length));
      const colorProps = Object.fromEntries(
        colors.map((color, i) => [
          `--chameleon-spinner-color-${i}`,
          get(theme, `colors.${color}`, color)
        ])
      );

      return {
        ...colorProps,
        animation: `${frames} ${duration}s linear ${delay}s ${props.repeat} both`
      };
    }
  },

  draw: {
    frames: keyframes`
      0% {
        stroke-dashoffset: -60;
        stroke: currentColor;
        fill: transparent;
        opacity: 1;
      }
      20% {
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dashoffset: -60;
        fill: currentColor;
        opacity: 1;
      }
      75% {
        opacity: 1;
      }
      100% {
        fill: transparent;
        opacity: 0;
      }
    `,
    getSegmentStyles: (index, props, theme) => {
      const self = variants[props.variant];
      const duration = props.duration ?? 2.5;
      const delay = index * (duration / 6);
      return {
        stroke: "currentcolor",
        strokeWidth: "1",
        strokeDasharray: "60",
        strokeDashoffset: "-60",
        fill: "none",
        color: getSegmentColor(index, props),
        animation: `${self.frames} ${duration}s ease-in-out ${delay}s ${props.repeat} forwards`
      };
    }
  }
};
