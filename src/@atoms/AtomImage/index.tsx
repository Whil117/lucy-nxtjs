import type { FC } from "react";
import { AtomImageContainerStyled, AtomImageImgStyled } from "./styled";
import type AtomImageTypes from "./types";

const DEFAULTIMG =
  "https://res.cloudinary.com/whil/image/upload/v1661401537/gallery-slash2_dwpvpx.jpg";

const AtomImage: FC<AtomImageTypes> = (props) => {
  const { src, alt } = props;
  return (
    <AtomImageContainerStyled {...{ ...props, src: "" }}>
      <AtomImageImgStyled src={src ?? DEFAULTIMG} alt={alt ?? ""} />
    </AtomImageContainerStyled>
  );
};
export default AtomImage;
