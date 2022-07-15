import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}
export const MyTextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.name || props.id}> {label}</label>
      <input className="text-input" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" className="custom-span-error-class"/>
      {/* {
        meta.touched && meta.error && (
            <span className="error">{meta.error}</span>
        )
      } */}
    </>
  );
};
