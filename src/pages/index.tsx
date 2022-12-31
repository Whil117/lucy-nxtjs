import {
  AtomButton,
  AtomIcon,
  AtomImage,
  AtomLoader,
  AtomText,
  AtomWrapper,
} from "@Src/@atoms";
import { useTheme } from "@Src/@atoms/AtomThemeProvider";

export default function Home() {
  const theme = useTheme();
  console.log();

  return (
    <AtomWrapper>
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
            <AtomText backgroundColor="#0072FF" fontWeight="bold" color="red">
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
            <AtomButton
              margin="10px"
              backgroundColor="#1fdaca"
              onClick={() => {
                theme.toggle();
              }}
            >
              TOGGLE
            </AtomButton>
            <AtomButton
              margin="10px"
              backgroundColor="#4eb6e6"
              onClick={() => {
                theme.setTheme("light");
              }}
            >
              LIGHT
            </AtomButton>
            <AtomButton
              margin="10px"
              backgroundColor="#8d18c4"
              onClick={() => {
                theme.setTheme("dark");
              }}
            >
              DARK
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
