import * as React from "react";
import { FieldProps } from "formik";
import { Form as AntForm, Input } from "antd";

const FormItem = AntForm.Item;

export const InputField: React.SFC<
  FieldProps<any> & { prefix: React.ReactNode }
> = ({ field, form: { touched, errors }, ...props }) => {
  const errorMsg = touched[field.name] && errors[field.name];

  return (
    <FormItem help={errorMsg} validateStatus={errorMsg ? "error" : undefined}>
      <Input {...field} {...props} />
    </FormItem>
  );
};
