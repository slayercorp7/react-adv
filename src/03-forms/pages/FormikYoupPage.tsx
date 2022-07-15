import "../styles/styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export const FormikYoupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } =
    useFormik({
      initialValues: { firstName: "", lastName: "", email: "" },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, "debe tener 15 cararcteres o menos")
          .required("Requerido"),
        lastName: Yup.string()
          .max(10, "debe de ser de menos de 10 caracteres")
          .required("Requerido"),
        email: Yup.string().email("email no valido").required("Requerido"),
      }),
    });

  return (
    <div>
      <h1>FormikYupPage</h1>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="firstName"> First name</label>
        <input
          type="text"
          {...getFieldProps('firstName')}
          
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor="lastName"> last name</label>
        <input
          type="text"
          {...getFieldProps('lastName')}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email"> Email</label>
        <input
          type="email"
          {...getFieldProps('email')}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
