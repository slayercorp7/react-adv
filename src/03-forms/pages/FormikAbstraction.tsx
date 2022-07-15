import "../styles/styles.css";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {MyCheckbox,MyTextInput,MySelect} from '../components';

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>FormikAbstraction</h1>
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
          terms: Yup.boolean().oneOf([true], "debe de aceptar la condiciones"),
          jobtype: Yup.string()
            .required("Requerido")
            .notOneOf(["4", "choose another category"]),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="firstName"
              name="firstName"
              placeholder="firstName"
              type="text"
            />
            <MyTextInput
              label="lastName"
              name="lastName"
              placeholder="lastName"
              type="text"
            />
            <MyTextInput
              label="email"
              name="email"
              placeholder="email"
              type="email"
            />
            <MySelect label="jobtype" name="jobtype" placeholder="jobtype">
              <option value="">pick one</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </MySelect>

            <MyCheckbox label="terms and conditions" name="terms" />

            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
