import { Form, Formik } from "formik";
import { MySelect, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";
import * as Yup from "yup";

const initialValues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("este campo es requerido");
    }
    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        `minimo de ${(rule as any).value || 2} caracteres`
      );
    }
    if (rule.type === "maxLength") {
        schema = schema.max(
          (rule as any).value,
          `maximo de ${(rule as any).value} caracteres`
        );
      }
      if (rule.type === "email") {
        schema = schema.email('email no es valido');
      }
  }
  requiredFields[input.name] = schema;
}
const validationSchema = Yup.object({ ...requiredFields });
export const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ label, name, type, options, placeholder }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    label={label}
                    name={name}
                    placeholder={placeholder}
                    type={type as any}
                    key={name}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">select an option</option>
                    {options?.map(({ id, description }) => {
                      return (
                        <option key={id} value={id}>
                          {description}
                        </option>
                      );
                    })}
                  </MySelect>
                );
              }
              throw new Error(` el type ${type} no es valido `);
            })}
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
