import { ErrorMessage, useField } from "formik";

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    [x: string]: any;
  }

export const MySelect = ({ label, ...props }: Props) => {
    const [field] = useField(props);
    return (
      <>
        <label htmlFor={props.name || props.id}> {label}</label>
        <select  {...field} {...props} />
        <ErrorMessage name={props.name} component="span" className="custom-span-error-class"/>
        {/* {
          meta.touched && meta.error && (
              <span className="error">{meta.error}</span>
          )
        } */}
      </>
    );
}
