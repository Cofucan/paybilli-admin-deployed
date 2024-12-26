import { FieldValues, Path, RegisterOptions, useForm, UseFormReturn } from "react-hook-form";

export interface CustomFormErrorFields {
  isRequired: boolean;
  minLength: number;
  min: number;
  maxLength: number;
  max: number;
}
type FormErrorType<T extends FieldValues> = CustomFormErrorFields &
  Omit<RegisterOptions<T, Path<T>>, keyof CustomFormErrorFields>;

export interface CustomFormHook<T extends FieldValues> extends UseFormReturn<T> {
  formErrorHelper: (
    fieldName: string,
    props: Partial<FormErrorType<T>>,
  ) => RegisterOptions<T, Path<T>>;
}

const useCustomForm = <T extends FieldValues>(): CustomFormHook<T> => {
  const form = useForm<T>();

  function formErrorHelper(
    fieldName: string,
    props: Partial<FormErrorType<T>>,
  ): RegisterOptions<T, Path<T>> {
    const errors: Partial<RegisterOptions<T, Path<T>>> = {};

    if (props.minLength)
      errors.minLength = {
        message: `${fieldName} should be at least ${props.minLength.toString()} Characters`,
        value: props.minLength,
      };
    if (props.min)
      errors.min = {
        message: `${fieldName} should be at least ${props.min.toString()}`,
        value: props.min,
      };
    if (props.maxLength)
      errors.maxLength = {
        message: `${fieldName} should be at most ${props.maxLength.toString()} Characters`,
        value: props.maxLength,
      };
    if (props.max)
      errors.max = {
        message: `${fieldName} should be at most ${props.max.toString()}`,
        value: props.max,
      };
    if (props.isRequired) errors.required = `${fieldName} is Required`;

    return { ...props, ...errors } as RegisterOptions<T, Path<T>>;
  }

  return { ...form, formErrorHelper };
};

export default useCustomForm