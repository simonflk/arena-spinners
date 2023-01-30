import { SimpleGrid, Stack, Text, Select } from "@chakra-ui/react";
import { useState } from "react";
import { LoadingSpinner, LoadingSpinnerProps } from "./loading-spinner";

function Sample(props: LoadingSpinnerProps) {
  return (
    <Stack
      align="center"
      border="1px solid"
      borderColor="gray.500"
      borderRadius="4"
      p="4"
    >
      <Text fontWeight="bold">{props.variant}</Text>
      <LoadingSpinner boxSize="75px" {...props} />
    </Stack>
  );
}

const styles = {
  default: {},
  brand: { color: "brand.500" },
  green: { color: "lime" },
  rainbow: { colorScheme: "rainbow" },
  flag: { colorScheme: "flag" },
  shades: {
    colors: [
      "brand.50",
      "brand.200",
      "brand.400",
      "brand.600",
      "brand.700",
      "brand.800"
    ]
  }
};

export function SpinnerSamples() {
  const [loaderStyle, setLoaderStyle] = useState("");
  const loaderProps =
    loaderStyle in styles
      ? styles[loaderStyle as keyof typeof styles]
      : styles.default;
  return (
    <Stack spacing={2}>
      <Select
        placeholder="Select a color scheme"
        onChange={(event) => setLoaderStyle(event.target.value)}
        value={loaderStyle}
      >
        <option value="default">Default</option>
        <option value="brand">Brand</option>
        <option value="green">Green</option>
        <option value="rainbow">Rainbow</option>
        <option value="flag">Red, white & blue</option>
        <option value="shades">Shades</option>
      </Select>
      <SimpleGrid columns={{ base: 1, sm: 3, md: 4 }} spacing="8">
        <Sample variant="fadeOut" {...loaderProps} />
        <Sample variant="fadeInOut" {...loaderProps} />
        <Sample variant="searchlight" {...loaderProps} />
        <Sample variant="gap" {...loaderProps} />
        <Sample variant="breathe" {...loaderProps} />
        <Sample variant="pulse" {...loaderProps} />
        <Sample variant="ripple" {...loaderProps} />
        <Sample variant="scaleOut" {...loaderProps} />
        <Sample variant="scale3d" {...loaderProps} />
        <Sample variant="shimmer" {...loaderProps} />
        <Sample variant="spin" {...loaderProps} />
        <Sample variant="yoyo" {...loaderProps} />
        <Sample variant="rotate" {...loaderProps} />
        <Sample variant="flip" {...loaderProps} />
        <Sample variant="twirl" {...loaderProps} />
        <Sample variant="contract" {...loaderProps} />
        <Sample variant="chameleon" {...loaderProps} />
        <Sample variant="colorChange" {...loaderProps} />
        <Sample variant="draw" {...loaderProps} />
      </SimpleGrid>
    </Stack>
  );
}
