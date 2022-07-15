import "../styles/styles.css";
import { useFormik, FormikErrors } from "formik";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}
export const FormikBasicPage = () => {
  const validate = ({ email, firstName, lastName }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!firstName) {
      errors.firstName = "Required";
    } else if (firstName.length >= 15) {
      errors.firstName = "must be 15 characters or less";
    }
    if (!lastName) {
      errors.lastName = "Required";
    } else if (lastName.length >= 10) {
      errors.firstName = "must be 10 characters or less";
    }
    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };
  const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
    initialValues: { firstName: "", lastName: "", email: "" },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: validate
  });

  return (
    <div>
      <h1>FormikBasicPage</h1>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="firstName"> First name</label>
        <input
          type="text"
          name="firstName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
        />
       {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
        <label htmlFor="lastName"> last name</label>
        <input
          type="text"
          name="lastName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email"> Email</label>
        <input
          type="email"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
