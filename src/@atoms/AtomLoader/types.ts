import { SerializedStyles } from "@emotion/react";
import { MotionProps } from "framer-motion";

type AtomLoaderProps = MotionProps & {
  type: "small" | "large" | "medium" | "fullscreen";
  backgroundColor?: string;
  isLoading: boolean;
  colorLoad?: string;
  customCSS?: () => SerializedStyles;
};
export default AtomLoaderProps;
