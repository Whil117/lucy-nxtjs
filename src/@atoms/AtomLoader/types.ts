import { MotionProps } from "framer-motion";

type AtomLoaderProps = MotionProps & {
  type: "small" | "large" | "medium" | "fullscreen";
  backgroundColor?: string;
  isLoading: boolean;
  colorLoad?: string;
};
export default AtomLoaderProps;
