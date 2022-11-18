import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4547",
  primary: "#537ce6",
  primaryBright: "blue",
  primaryDark: "#0098A1",
  secondary: "#537ce6",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
  bitgert: "#4B61C3",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#6fa9ff",
  background: "#FFFFFF",
  backgroundDisabled: "#E9EAEB",
  contrast: "#1f2229",
  invertedContrast: "#FFFFFF",
  input: "#F9F9F9",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#E5E5E5",
  text: "#1b212c",
  textDisabled: "#959fb9",
  textSubtle: "#537ce6",
  borderColor: "#bfcadb",
  card: "#F3F3F3",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#6fa9ff",
  background: "#171a1f",
  // background: "#161616",
  backgroundDisabled: "#272b34",
  contrast: "#FFFFFF",
  invertedContrast: "#171a1f",
  input: "#272b34",
  inputSecondary: "#d7caec",
  tertiary: "#272b34",
  text: "#96a2b4",
  textDisabled: "#7A7A7A",
  textSubtle: "#537ce6",
  borderColor: "#2f343e",
  card: "#1f2229",
  // card: "#1d1d1d",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};
