import { css } from "@emotion/react";
import { LabelInput } from "@Src/@atoms/AtomLabel/styled";
import AtomText from "@Src/@atoms/AtomText";
import AtomWrapper from "@Src/@atoms/AtomWrapper";
import { ChangeEvent } from "react";
import { InputTextStyled } from "../text/styled";
import AtomInputTypes from "../types";

const convertFileToDataURL = (inputFile: File): Promise<string> => {
  const temporaryFileReader = new FileReader();
  return new Promise((resolve, reject) => {
    temporaryFileReader.onerror = () => {
      temporaryFileReader.abort();
      reject(new DOMException("Problem parsing input file."));
    };
    temporaryFileReader.onload = (data) => {
      resolve(data?.target?.result as string);
    };
    temporaryFileReader?.readAsDataURL(inputFile);
  });
};

export type InputFileProps = File & {
  blob: string;
  lastModifiedDate: Date;
};

const InputFile = (props: AtomInputTypes) => {
  return (
    <AtomWrapper width="100%">
      {props?.label && (
        <LabelInput
          color={props?.labelColor ?? ""}
          htmlFor={props?.id}
          customCSS={css`
            padding: 5px;
            font-family: ${props?.labelFontFamily};
            font-weight: ${props?.labelFontWeight ?? "600"};
            font-size: ${props?.labelFontSize ?? "12px"};
            cursor: pointer;
          `}
        >
          {props?.label}
        </LabelInput>
      )}
      <AtomWrapper
        customCSS={css`
          padding: 5px;
          border-radius: 5px;
          &:hover {
            box-shadow: rgb(0 0 0 / 4%) 0px 0.60323px 3.01615px -1.25px,
              rgb(0 0 0 / 3%) 0px 2.29021px 11.4511px -2.5px,
              rgb(0 0 0 / 1%) 0px 10px 50px -3.75px;
            background-color: rgba(255, 255, 255, 0.2);
          }
          &:focus {
            box-shadow: rgb(0 0 0 / 4%) 0px 0.60323px 3.01615px -1.25px,
              rgb(0 0 0 / 3%) 0px 2.29021px 11.4511px -2.5px,
              rgb(0 0 0 / 1%) 0px 10px 50px -3.75px;
            background-color: rgba(255, 255, 255, 0.2);
          }
        `}
        whileTap={{
          scale: 0.99,
        }}
        whileHover={{ scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <AtomWrapper
          customCSS={css`
            display: flex;
            flex-direction: column;
            padding: 8px 12px;
            cursor: text;
            box-sizing: border-box;
            border-radius: 5px;
            padding: 5px;
            padding: 0px;
            box-shadow: rgb(0 0 0 / 10%) 0px 0.60323px 3.01615px -0.833333px,
              rgb(0 0 0 / 10%) 0px 2.29021px 11.4511px -1.66667px,
              rgb(0 0 0 / 10%) 0px 10px 50px -2.5px;
            border: 2px dashed var(--input-file-border-dashed, #8a8a8a7f);
            position: relative;
            cursor: pointer;

            /* padding: 50px; */
          `}
          alignItems="center"
        >
          <AtomWrapper
            customCSS={css`
              z-index: -4;
              height: 220px;
            `}
            alignItems="center"
            justifyContent="center"
          >
            <AtomText fontSize="17px" fontWeight="bold">
              <AtomText
                textDecoration="underline"
                fontSize="17px"
                fontWeight="bold"
              >
                Click to upload
              </AtomText>{" "}
              or drag and drop
            </AtomText>
            <AtomText>Maximum file's size 50 MB.</AtomText>
          </AtomWrapper>
          <InputTextStyled
            {...props}
            // value={
            //   props?.formik?.values?.[`${props?.id}`] ?? props?.value ?? ""
            // }
            onChange={async (event: ChangeEvent<HTMLInputElement>) => {
              const getFiles = await Promise.all(
                await Array.from(
                  event.target.files as unknown as InputFileProps[],
                  async (item) => ({
                    ...item,
                    lastModified: item.lastModified,
                    lastModifiedDate: item.lastModifiedDate,
                    name: item.name,
                    size: item.size,
                    type: item.type,
                    webkitRelativePath: item.webkitRelativePath,
                    blob: await convertFileToDataURL(item).then((res) => res),
                  })
                )
              );
              const getFile = event.target.files?.[0] as InputFileProps;

              const getFileWithBlob = {
                ...getFile,
                lastModified: getFile.lastModified,
                lastModifiedDate: getFile.lastModifiedDate,
                name: getFile.name,
                size: getFile.size,
                type: getFile.type,
                webkitRelativePath: getFile.webkitRelativePath,
                blob: await convertFileToDataURL(getFile).then((res) => res),
              };

              props?.formik?.setFieldValue(
                `${props?.id}`,
                props?.multiple ? getFiles : getFileWithBlob
              );

              props?.onChange?.(event);
            }}
            customCSS={css`
              width: max-content;
              height: max-content;
              position: absolute;
              opacity: 0;
              cursor: pointer;
              width: -webkit-fill-available;
              height: 220px;
              padding: 0px;
            `}
          />
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default InputFile;
