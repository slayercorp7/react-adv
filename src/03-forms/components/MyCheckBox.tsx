import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: Props) => {
  const [field] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label>
        <input type="checkbox" className="text-input" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" className="custom-span-error-class"/>
      {/* {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
    </>
  );
};
