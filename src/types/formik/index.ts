/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
  FormikErrors,
  FormikState,
  FormikTouched,
} from "formik";

export type FormikCustom<T> = {
  initialValues: T;
  initialErrors: FormikErrors<unknown>;
  initialTouched: FormikTouched<unknown>;
  initialStatus: any;
  handleBlur: {
    (e: React.FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  handleReset: (e: any) => void;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  resetForm: (nextState?: Partial<FormikState<T>> | undefined) => void;
  setErrors: (errors: FormikErrors<T>) => void;
  setFormikState: (
    stateOrCb: FormikState<T> | ((state: FormikState<T>) => FormikState<T>)
  ) => void;
  setFieldTouched: (
    field: string,
    touched?: boolean,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<T>> | Promise<void>;
  setFieldValue: (
    field: keyof T,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<T>> | Promise<void>;
  setFieldError: (field: string, value: string | undefined) => void;
  setStatus: (status: any) => void;
  setSubmitting: (isSubmitting: boolean) => void;
  setTouched: (
    touched: FormikTouched<T>,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<T>> | Promise<void>;
  setValues: (
    values: React.SetStateAction<T>,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<T>> | Promise<void>;
  submitForm: () => Promise<any>;
  validateForm: (values?: T) => Promise<FormikErrors<T>>;
  validateField: (name: string) => Promise<void> | Promise<string | undefined>;
  isValid: boolean;
  dirty: boolean;
  unregisterField: (name: string) => void;
  registerField: (name: string, { validate }: any) => void;
  getFieldProps: (nameOrOptions: any) => FieldInputProps<any>;
  getFieldMeta: (name: string) => FieldMetaProps<any>;
  getFieldHelpers: (name: string) => FieldHelperProps<any>;
  validateOnBlur: boolean;
  validateOnChange: boolean;
  validateOnMount: boolean;
  values: T;
  errors: FormikErrors<T>;
  touched: FormikTouched<T>;
  isSubmitting: boolean;
  isValidating: boolean;
  status?: any;
  submitCount: number;
};
