import { css } from "@emotion/react";
import { AtomButton, AtomInput, AtomWrapper } from "@Src/@atoms";
import { useFormik } from "formik";
import { FC, ReactNode } from "react";
import * as Yup from "yup";
type Props = {
  children?: ReactNode;
};

const FormFormik: FC<Props> = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      radioButton: false,
      inputWithNumbers: 0,
      myColor: "rgb(153, 0, 255)",
      myDate: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es requerido"),
      radioButton: Yup.boolean().test(
        "isB",
        "Porfavor selecciona una opción",
        (value) => Boolean(value)
      ),
      inputWithNumbers: Yup.number().test(
        "is-zero",
        "Number must be zero",
        (value) => value > 0
      ),
    }),
    onSubmit: () => {},
  });

  return (
    <AtomWrapper>
      <AtomButton
        backgroundColor={formik.values.myColor}
        onClick={formik?.submitForm}
      >
        SUBMIT
      </AtomButton>
      <AtomButton
        backgroundColor={formik.values.myColor}
        onClick={() => {
          formik?.resetForm();
        }}
      >
        RESET
      </AtomButton>
      <AtomInput
        type="textbox"
        label="Input text"
        placeholder="Hola escribe aqui"
        labelColor="#999"
        formik={formik}
        id="name"
        accentColor={formik.values.myColor}
        customCSS={() => css`
          textarea {
            color: ${formik.values.myColor};
            font-weight: bold;
          }
        `}
      />
      <AtomWrapper flexDirection="row">
        <AtomInput
          type="radio"
          label="Input radio"
          placeholder="Hola escribe aqui"
          labelColor="#999"
          formik={formik}
          id="radioButton"
          accentColor={formik.values.myColor}
        />
        <AtomInput
          type="radio"
          label="Input radio"
          placeholder="Hola escribe aqui"
          labelColor="#999"
          formik={formik}
          id="radioButton"
          accentColor={formik.values.myColor}
        />
        <AtomInput
          type="radio"
          label="Input radio"
          placeholder="Hola escribe aqui"
          labelColor="#999"
          formik={formik}
          id="radioButton"
          accentColor={formik.values.myColor}
        />

        <AtomInput
          type="radio"
          label="Input radio"
          placeholder="Hola escribe aqui"
          labelColor="#999"
          formik={formik}
          id="radioButton"
          accentColor={formik.values.myColor}
        />
      </AtomWrapper>
      <AtomInput
        type="number"
        label="Input with numbers"
        placeholder="Hola escribe aqui"
        labelColor="#999"
        formik={formik}
        id="inputWithNumbers"
        accentColor={formik.values.myColor}
      />
      <AtomInput
        type="text"
        label="Input checkbox"
        placeholder="Hola escribe aqui"
        labelColor="#999"
        formik={formik}
        id="name"
        accentColor={formik.values.myColor}
      />
      <AtomInput
        type="text"
        label="Input text"
        placeholder="Hola escribe aqui"
        labelColor="#999"
        formik={formik}
        id="name"
        accentColor={formik.values.myColor}
      />
      <AtomInput
        type="text"
        label="Input text"
        placeholder="Hola escribe aqui"
        labelColor="#999"
        formik={formik}
        id="name"
        accentColor={formik.values.myColor}
      />
      <AtomWrapper flexDirection="row">
        <AtomInput
          type="checkbox"
          label="Input text"
          placeholder="Hola escribe aqui"
          labelColor="#999"
          formik={formik}
          id="radioButton"
          accentColor={formik.values.myColor}
        />
        <AtomInput
          type="checkbox"
          label="Input text"
          placeholder="Hola escribe aqui"
          labelColor="#999"
          formik={formik}
          id="radioButton"
          accentColor={formik.values.myColor}
        />
        <AtomInput
          type="checkbox"
          label="Input text"
          placeholder="Hola escribe aqui"
          labelColor="#999"
          formik={formik}
          id="radioButton"
          accentColor={formik.values.myColor}
        />
        <AtomInput
          type="checkbox"
          label="Input text"
          placeholder="Hola escribe aqui"
          labelColor="#999"
          formik={formik}
          id="radioButton"
          accentColor={formik.values.myColor}
        />
      </AtomWrapper>
      <AtomInput
        type="color"
        label="Input text"
        placeholder="Hola escribe aqui"
        labelColor="#999"
        formik={formik}
        id="myColor"
        customCSS={() => css`
          height: 50px;
        `}
      />
      <AtomInput
        type="date"
        label="Input date"
        placeholder="Hola escribe aqui"
        labelColor="#999"
        formik={formik}
        id="myDate"
        customCSS={() => css`
          height: 50px;
        `}
      />
    </AtomWrapper>
  );
};

export default FormFormik;
