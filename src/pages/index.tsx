import { css } from "@emotion/react";
import {
  AtomButton,
  AtomIcon,
  AtomImage,
  AtomLoader,
  AtomText,
  AtomWrapper,
} from "@Src/@atoms";
import AtomInput from "@Src/@atoms/AtomInput";
import AtomWrapperCard from "@Src/@atoms/AtomWrapperCard";
import { useTheme } from "@Src/hooks";
import { handleSetTheme, handleToggleTheme } from "@Src/utils";
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
        <AtomText fontSize="42px" fontWeight="bold">
          Lucy
        </AtomText>
      </AtomWrapper>

      <AtomWrapper>
        <AtomText fontSize="42px" fontWeight="bold">
          A network of creators.
        </AtomText>
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
            <AtomText fontSize="24px" fontWeight="bold">
              Sell templates.
            </AtomText>
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper
          customCSS={css`
            display: flex;
            flex-direction: column;
            padding: 10px 16px 16px;
            border: 1px solid #efefef;
            background: #f5f5f5;
            overflow-y: auto;
            max-height: 80vh;
            border-radius: 5px;
            box-sizing: border-box;
            overflow-wrap: break-word;
            word-wrap: break-word;
            word-break: break-word;
          `}
        >
          <AtomText color="#999">Request a Feature</AtomText>
          <AtomInput
            type="text"
            label="TITLE"
            labelFontSize="12px"
            labelColor="#999"
            labelFontWeight="bold"
          />
          <AtomInput
            type="text"
            label="TITLE"
            labelFontSize="12px"
            labelColor="#999"
            labelFontWeight="bold"
          />
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
        <AtomWrapperCard flexDirection="column" padding="25px">
          <AtomText fontWeight="bold" fontSize="22px">
            AtomWrapperCard
          </AtomText>
          <AtomText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            illo consectetur hic earum, labore, eum omnis repellendus rem
            maiores debitis temporibus asperiores repudiandae? At eveniet vero,
            totam dolore non architecto?
          </AtomText>
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
        </AtomWrapperCard>
      </AtomWrapper>
    </AtomWrapper>
  );
}
