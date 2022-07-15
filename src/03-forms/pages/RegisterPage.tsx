import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const { isValidEmail, onChange, email, name, password1, password2, reset } =
    useForm({
      name: "",
      email: "",
      password1: "",
      password2: "",
    });
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>register page</h1>
      <form autoComplete="off" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={onChange}
          name="name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>este campo es obligatorio</span>}
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={onChange}
          name="email"
          className={`${isValidEmail(email) && "has-error"}`}
        />
        {isValidEmail(email) && <span>email no valido</span>}
        <input
          type="password"
          placeholder="password"
          value={password1}
          onChange={onChange}
          name="password"
        />
        {password1.trim().length <= 0 && <span>este campo es obligatorio</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>la contraseña debe de ser de 6 caracteres</span>
        )}
        <input
          type="password"
          placeholder=" Repeat password"
          value={password2}
          onChange={onChange}
          name="Rpassword"
        />
        {password2.trim().length <= 0 && <span>este campo es obligatorio</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>las contraseñas no son iguales</span>
        )}
        <button type="submit">create</button>
        <button type="button" onClick={reset}>
          reset
        </button>
      </form>
    </div>
  );
};
