import "../styles/styles.css";
import { Field, Form, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

export const FormikComponents = () => {
  return (
    <div>
      <h1>FormikComponents</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "debe de ser de menos de 10 caracteres")
            .required("Requerido"),
          email: Yup.string().email("email no valido").required("Requerido"),
          terms: Yup.boolean().oneOf([true], 'debe de aceptar la condiciones'),
          jobtype: Yup.string().required('Requerido').notOneOf(['4', 'choose another category']),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName"> First name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />
            <label htmlFor="lastName"> last name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />
            <label htmlFor="email"> Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />
            <label htmlFor="jobtype"> job type</label>
            <Field name="jobtype" as="select">
              <option value="">pick one</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Field>
            <ErrorMessage name="jobtype" component="span" />
            <label>
              <Field name="terms" type="checkbox" /> terms and conditions
            </label>

            <ErrorMessage name="terms" component="span" />
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
