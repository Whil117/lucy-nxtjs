import { css } from "@emotion/react";
import { AtomWrapper } from "@Src/@atoms";
import { FC, ReactNode } from "react";
import ListElements from "./components/listElements";
import ListMethods from "./components/listMethods";

type Props = {
  children?: ReactNode;
};

const SidebarLayoutEditorLeft: FC<Props> = () => {
  return (
    <AtomWrapper
      backgroundColor="#252424"
      justifyContent="flex-start"
      padding="20px"
      customCSS={css`
        grid-column: 1;
        grid-row: 2;
        gap: 10px;
      `}
    >
      <ListMethods />
      <ListElements />
    </AtomWrapper>
  );
};

export default SidebarLayoutEditorLeft;
