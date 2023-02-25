import { AtomText, AtomWrapper } from "@Src/@atoms";
import { FC, ReactNode } from "react";
import ExportCanvas from "./components/export";

type Props = {
  children?: ReactNode;
};

const StandByPage: FC<Props> = (props) => {
  return (
    <AtomWrapper height="auto">
      <AtomText>Design</AtomText>
      <ExportCanvas />
    </AtomWrapper>
  );
};

export default StandByPage;
