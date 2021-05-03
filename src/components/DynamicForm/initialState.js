export const initialState = (fields, theme) =>
  fields?.reduce(
    (obj, field) => {
      let defaultValue = field.default ?? (field.type === "file" ? [] : "");

      if (field.slug) {
        obj[field.slug] = defaultValue;
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
    }
  );
