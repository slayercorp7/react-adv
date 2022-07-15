import { ChangeEvent, useState } from "react";

export const useForm = <T>(InitState: T) => {
  const [formData, setFormData] = useState(InitState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    switch (target.name) {
      case "name":
        setFormData({ ...formData, name: target.value });
        break;

      case "email":
        setFormData({ ...formData, email: target.value });
        break;
      case "password":
        setFormData({ ...formData, password1: target.value });
        break;
      case "Rpassword":
        setFormData({ ...formData, password2: target.value });
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setFormData({ ...InitState });
  };
  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  return { ...formData, formData: formData, onChange, reset, isValidEmail};
};
