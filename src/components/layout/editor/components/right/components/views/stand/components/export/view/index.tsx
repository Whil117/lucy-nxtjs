import { css } from "@emotion/react";
import { AtomImage } from "@Src/@atoms";

import { FC, useState } from "react";

const ViewExport: FC = () => {
  const [canv, setcanv] = useState("");

  return (
    <AtomImage
      src={canv}
      width="100%"
      customCSS={css`
        background-color: white;
        width: 100%;
        height: 220px;
      `}
    />
  );
};

export default ViewExport;
