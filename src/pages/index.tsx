import { css } from "@emotion/react";
import { Inter } from "@next/font/google";
import {
  AtomButton,
  AtomIcon,
  AtomImage,
  AtomLoader,
  AtomText,
  AtomWrapper,
} from "@Src/@atoms";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <AtomWrapper>
      <AtomText
        fontSize="32px"
        fontWeight="900"
        customCSS={css`
          order: 2;
          color: #fde9ff;
          font-weight: 900;
          text-transform: uppercase;
          font-size: clamp(3rem, 10vw, 6rem);
          line-height: 0.75em;
          text-align: center;
          text-shadow: 3px 1px 1px #4af7ff, 2px 2px 1px #165bfb,
            4px 2px 1px #4af7ff, 3px 3px 1px #165bfb, 5px 3px 1px #4af7ff,
            4px 4px 1px #165bfb, 6px 4px 1px #4af7ff, 5px 5px 1px #165bfb,
            7px 5px 1px #4af7ff, 6px 6px 1px #165bfb, 8px 6px 1px #4af7ff,
            7px 7px 1px #165bfb, 9px 7px 1px #4af7ff;

          span {
            display: block;
            position: relative;

            &:before {
              content: attr(data-text);
              position: absolute;
              text-shadow: 2px 2px 1px #e94aa1, -1px -1px 1px #c736f9,
                -2px 2px 1px #e94aa1, 1px -1px 1px #f736f9;
              z-index: 1;
            }

            &:nth-child(1) {
              padding-right: 2.25rem;
            }

            &:nth-child(2) {
              padding-left: 2.25rem;
            }
          }
        `}
      >
        <AtomText as="span" fontSize="inherit">
          Lucy
        </AtomText>
      </AtomText>
      <AtomWrapper maxWidth="1440px" padding="0px 90px" gap="20px">
        <AtomWrapper>
          <AtomText>AtomLoader Large</AtomText>
          <AtomWrapper
            flexDirection="row"
            alignItems="center"
            width="100%"
            justifyContent="space-around"
          >
            <AtomLoader type="large" />
            <AtomLoader type="large" colorLoad="#0072FF" />
            <AtomLoader type="large" colorLoad="#e78ce7" />
            <AtomLoader type="large" colorLoad="#41c052" />
            <AtomLoader type="large" colorLoad="skyblue" />
            <AtomLoader type="large" colorLoad="#da1f1f" />
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper>
          <AtomText>AtomLoader Medium</AtomText>
          <AtomWrapper
            flexDirection="row"
            alignItems="center"
            width="100%"
            justifyContent="space-around"
          >
            <AtomLoader type="medium" />
            <AtomLoader type="medium" colorLoad="#0072FF" />
            <AtomLoader type="medium" colorLoad="#e78ce7" />
            <AtomLoader type="medium" colorLoad="#41c052" />
            <AtomLoader type="medium" colorLoad="skyblue" />
            <AtomLoader type="medium" colorLoad="#da1f1f" />
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper>
          <AtomText>AtomLoader Small</AtomText>
          <AtomWrapper
            flexDirection="row"
            alignItems="center"
            width="100%"
            justifyContent="space-around"
          >
            <AtomLoader type="small" />
            <AtomLoader type="small" colorLoad="#0072FF" />
            <AtomLoader type="small" colorLoad="#e78ce7" />
            <AtomLoader type="small" colorLoad="#41c052" />
            <AtomLoader type="small" colorLoad="skyblue" />
            <AtomLoader type="small" colorLoad="#da1f1f" />
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper>
          <AtomText>AtomText</AtomText>
          <AtomWrapper
            flexDirection="row"
            alignItems="center"
            width="100%"
            justifyContent="flex-start"
          >
            <AtomText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos esse
              nulla neque repellendus debitis! Mollitia id quidem sunt atque
              quod maxime minus ducimus quasi, accusamus, dicta ex nam dolor
              perferendis!
            </AtomText>
            <AtomText fontWeight="bold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos esse
              nulla neque repellendus debitis! Mollitia id quidem sunt atque
              quod maxime minus ducimus quasi, accusamus, dicta ex nam dolor
              perferendis!
            </AtomText>
            <AtomText fontWeight="bold" textDecoration="underline">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos esse
              nulla neque repellendus debitis! Mollitia id quidem sunt atque
              quod maxime minus ducimus quasi, accusamus, dicta ex nam dolor
              perferendis!
            </AtomText>
            <AtomText
              fontSize="24px"
              fontWeight="bold"
              textDecoration="underline"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos esse
              nulla neque repellendus debitis! Mollitia id quidem sunt atque
              quod maxime minus ducimus quasi, accusamus, dicta ex nam dolor
              perferendis!
            </AtomText>
            <AtomText backgroundColor="#0072FF" fontWeight="bold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos esse
              nulla neque repellendus debitis! Mollitia id quidem sunt atque
              quod maxime minus ducimus quasi, accusamus, dicta ex nam dolor
              perferendis!
            </AtomText>
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper>
          <AtomText>AtomIcon</AtomText>
          <AtomWrapper
            flexDirection="row"
            alignItems="center"
            width="100%"
            justifyContent="flex-start"
          >
            <AtomIcon src="https://res.cloudinary.com/whil/image/upload/v1670118796/smallcaps_iowxub.svg" />
            <AtomIcon src="https://res.cloudinary.com/whil/image/upload/v1670118796/gallery_duuoqb.svg" />
            <AtomIcon
              src="https://res.cloudinary.com/whil/image/upload/v1666492647/HARMONY_orc7z0.svg"
              color="default"
            />
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper>
          <AtomText>AtomButton</AtomText>
          <AtomWrapper
            flexDirection="row"
            alignItems="center"
            width="100%"
            justifyContent="flex-start"
          >
            <AtomButton>DEFAULT</AtomButton>
            <AtomButton margin="10px" backgroundColor="#da1f1f">
              DISABLED
            </AtomButton>
            <AtomButton margin="10px" backgroundColor="#e78ce7">
              EXAMPLE
            </AtomButton>
            <AtomButton margin="10px" backgroundColor="#0072FF">
              EXAMPLE
            </AtomButton>
            <AtomButton margin="10px" backgroundColor="#25cc3b">
              EXAMPLE
            </AtomButton>
            <AtomButton margin="10px" backgroundColor="#ff006a">
              EXAMPLE
            </AtomButton>
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper>
          <AtomText>AtomImage</AtomText>
          <AtomWrapper
            flexDirection="row"
            alignItems="center"
            width="100%"
            justifyContent="flex-start"
          >
            <AtomImage
              src="https://res.cloudinary.com/whil/image/upload/v1670118796/smallcaps_iowxub.svg"
              width="150px"
              height="150px"
            />
            <AtomImage
              src="https://res.cloudinary.com/whil/image/upload/v1670118796/smallcaps_iowxub.svg"
              width="150px"
              height="150px"
            />
            <AtomImage
              src="https://res.cloudinary.com/whil/image/upload/v1670118796/smallcaps_iowxub.svg"
              width="150px"
              height="150px"
            />

            <AtomImage
              src="https://res.cloudinary.com/whil/image/upload/v1670118796/smallcaps_iowxub.svg"
              width="150px"
              height="150px"
            />

            <AtomImage
              src="https://res.cloudinary.com/whil/image/upload/v1670118796/smallcaps_iowxub.svg"
              width="150px"
              height="150px"
            />
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
}
