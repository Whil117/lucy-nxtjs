import { MotionProps } from "framer-motion";

type AtomLoaderProps = MotionProps & {
  type: "small" | "large" | "medium" | "fullscreen";
  backgroundColor?: string;
  colorLoad?: string;
};
export default AtomLoaderProps;
