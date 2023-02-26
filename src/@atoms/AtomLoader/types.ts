import { SerializedStyles } from "@emotion/react";
import { MotionProps } from "framer-motion";
import WithCSS from "../../types/Emotion/WithCSS";

type AtomLoaderProps = MotionProps & {
  type: "small" | "large" | "medium" | "fullscreen";
  backgroundColor?: string;
  isLoading: boolean;
  colorLoad?: string;
  customCSS?: (css: WithCSS) => SerializedStyles;
};
export default AtomLoaderProps;
