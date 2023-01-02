import { css } from "@emotion/react";
import {
  AtomButton,
  AtomIcon,
  AtomImage,
  AtomLoader,
  AtomText,
  AtomWrapper,
} from "@Src/@atoms";
import { useTheme } from "@Src/@atoms/AtomThemeProvider";
import handleSetTheme from "@Src/@atoms/AtomThemeProvider/utils/setTheme";
import handleToggleTheme from "@Src/@atoms/AtomThemeProvider/utils/toggle";
import { useState } from "react";

export default function Home() {
  const theme = useTheme();
  const [loading, setloading] = useState(false);

  return (
    <AtomWrapper
      maxWidth="1440px"
      padding="0px 90px"
      gap="20px"
      flexDirection="row"
      alignItems="center"
    >
      <AtomWrapper flexDirection="row">
        <AtomIcon
          src="https://res.cloudinary.com/whil/image/upload/v1672601967/LUCY_gsdwo3.svg"
          width="75px"
          height="75px"
        />
        <AtomText
          fontSize="42px"
          fontWeight="bold"
          fontFamily="GTWalsheim_regular"
        >
          Lucy
        </AtomText>
      </AtomWrapper>
      <AtomWrapper>
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
            {loading && <AtomLoader type="fullscreen" colorLoad="#0072FF" />}
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
            <AtomIcon
              src="https://res.cloudinary.com/whil/image/upload/v1670118796/gallery_duuoqb.svg"
              width="100px"
              height="100px"
              color="white"
            />
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
            <AtomButton
              disabled
              margin="10px"
              onClick={() => {
                alert("Button was clicked!");
              }}
            >
              DISABLED
            </AtomButton>
            <AtomButton margin="10px">DEFAULT</AtomButton>
            <AtomButton
              margin="10px"
              backgroundColor="#1fdaca"
              focus
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
            <AtomButton
              margin="10px"
              backgroundColor="#e78ce7"
              onClick={() => {
                handleSetTheme("dark");
              }}
            >
              MANUAL SETTER THEME DARK
            </AtomButton>
            <AtomButton
              margin="10px"
              backgroundColor="#0072FF"
              onClick={() => {
                handleSetTheme("light");
              }}
            >
              MANUAL SETTER THEME LIGHT
            </AtomButton>
            <AtomButton
              margin="10px"
              backgroundColor="#25cc3b"
              onClick={() => {
                handleToggleTheme();
              }}
            >
              TOGGLE MANUAL THEME
            </AtomButton>
            <AtomButton
              margin="10px"
              backgroundColor="#ff006a"
              onClick={() => {
                setloading(true);
              }}
            >
              LOADER
            </AtomButton>
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper
          customCSS={css`
            padding: 5px;
            border-radius: 20px;
            border-color: rgba(255, 255, 255, 0.1);
            box-shadow: rgb(0 0 0 / 4%) 0px 0.60323px 3.01615px -1.25px,
              rgb(0 0 0 / 3%) 0px 2.29021px 11.4511px -2.5px,
              rgb(0 0 0 / 1%) 0px 10px 50px -3.75px;
            background-color: rgba(255, 255, 255, 0.2);
          `}
        >
          <AtomWrapper
            gap="20px"
            customCSS={css`
              border-bottom-width: 1px;
              border-color: rgba(255, 255, 255, 0.5);
              border-left-width: 1px;
              border-right-width: 1px;
              border-style: solid;
              border-top-width: 1px;
              place-content: flex-start;
              align-items: flex-start;
              background: var(--card-baclgroundColor);
              border-radius: 20px;
              box-shadow: rgb(0 0 0 / 10%) 0px 0.60323px 3.01615px -0.833333px,
                rgb(0 0 0 / 10%) 0px 2.29021px 11.4511px -1.66667px,
                rgb(0 0 0 / 10%) 0px 10px 50px -2.5px;
              display: flex;
              flex: 0 0 auto;
              flex-flow: column nowrap;
              gap: 20px;
              height: min-content;
              overflow: hidden;
              padding: 20px;
              position: relative;
              will-change: transform;
            `}
          >
            <AtomText>AtomImage</AtomText>
            <AtomWrapper
              flexDirection="row"
              alignItems="flex-start"
              width="100%"
              justifyContent="flex-start"
            >
              <AtomImage
                src="https://picsum.photos/200/300"
                width="420px"
                height="420px"
              />
              <AtomImage
                src="https://picsum.photos/200/300"
                width="250px"
                height="250px"
              />
              <AtomImage
                src="https://picsum.photos/200/300"
                width="150px"
                height="150px"
              />
            </AtomWrapper>
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
}
