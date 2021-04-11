import { v4 as uuidv4 } from "uuid";

export const initialState = (fields, theme) =>
  fields?.reduce(
    (obj, field) => {
      if (field.slug) {
        obj[field.slug] = field.default;
      }
      return obj;
    },
    {
      dirtyFields: [],
      submitCount: 0,
      captcha: "",
      isSubmiting: false,
      errorSubmitting: "",
      theme,
      idForm: uuidv4(),
    }
  );
