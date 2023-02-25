import { MutableRefObject, useEffect, useState } from "react";

type Props = {
  ref: MutableRefObject<HTMLDivElement>;
};

const useSizeContent = ({ ref }: Props) => {
  const [{ width, height }, setSize] = useState({
    width: 10,
    height: 10,
  });

  useEffect(() => {
    if (ref.current) {
      setSize({
        width: ref.current.clientWidth,
        height: ref.current.clientHeight,
      });
    }
  }, [ref]);
  return {
    width,
    height,
  };
};

export default useSizeContent;
