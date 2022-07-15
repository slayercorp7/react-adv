import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>RegisterFormikPage</h1>
      <Formik
        initialValues={{ name: "", email: "", password1: "", password2: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "debe tener 2 caracteres o más")
            .max(15, "debe ser menos de 15 caracteres")
            .required("Requerido"),
          email: Yup.string().email("email no valido").required("Requerido"),
          password1: Yup.string()
            .required("requerido")
            .min(6, "minimo 6 caracteres"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1"), null], "contraseñas no son iguales")
            .required("Requerido"),
        })}
      >
        {({handleReset}) => (
          <Form>
            <MyTextInput
              label="name"
              name="name"
              placeholder="name"
              type="text"
            />
            <MyTextInput
              label="email"
              name="email"
              placeholder="email"
              type="email"
            />
            <MyTextInput
              label="password"
              name="password1"
              placeholder="password"
              type="password"
            />
            <MyTextInput
              label="Repeat password"
              name="password2"
              placeholder="Repeat password"
              type="password"
            />
            <button type="submit">create</button>
            <button type="button" onClick={handleReset}>reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
