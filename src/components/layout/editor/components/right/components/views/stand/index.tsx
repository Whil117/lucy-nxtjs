import { AtomText, AtomWrapper } from "@Src/@atoms";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const StandByPage: FC<Props> = (props) => {
  return (
    <AtomWrapper height="auto">
      <AtomText>Harmony</AtomText>
    </AtomWrapper>
  );
};

export default StandByPage;
