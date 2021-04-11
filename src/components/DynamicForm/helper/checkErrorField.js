const emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const mobilePhoneCheck = /^(\+|\d)[0-9]{7,16}$/;
const maxSize5MB = 5242880; // bytes => 5MB

const checkMaxSizeFile = (files, sizeLimit) => {
  let totalsize = 0;
  files &&
    files.forEach((file) => {
      totalsize = totalsize + file.size;
    });

  return totalsize >= sizeLimit;
};

export const errorMessage = (item, state) => {
  let textError = "";

  // Messages
  const requiredError = `* ${item.label} is required`;
  const emailError = "* Email is invalid";
  const mobilePhoneError = "* Phone is invalid";
  const termsError = "* You must accept the Terms before proceeding";
  const captchaError = "* Please check the box";
  const fileTypeError = "* Invalid File Type";
  const fileMaxSizeError = (fileSize) =>
    `* File size must be less than ${fileSize / 1024 / 1024} MB`;

  if (state.dirtyFields.includes(item.slug) || state.submitCount) {
    if (item.isRequired && !state[item.slug]) {
      textError = requiredError;
    } else if (
      item.slug === "email" &&
      item.isRequired &&
      !emailCheck.test(state[item.slug])
    ) {
      textError = emailError;
    } else if (
      item.slug === "mobile-phone" &&
      item.isRequired &&
      !mobilePhoneCheck.test(state[item.slug])
    ) {
      textError = mobilePhoneError;
    } else if (item.slug === "captcha" && !state[item.slug]) {
      textError = captchaError;
    }
  }

  if (
    item.slug === "terms" &&
    item.isRequired &&
    state.submitCount &&
    !state[item.slug]
  ) {
    textError = termsError;
  }

  if (item.type === "file") {
    const files = state[item.slug];
    if (checkMaxSizeFile(files, maxSize5MB)) {
      textError = fileMaxSizeError(maxSize5MB);
    } else if (item.type === "file") {
      const file = state[item.slug];
      const fileType = file && file[0]?.type;

      if (
        fileType &&
        !(
          fileType === "application/pdf" ||
          fileType === "application/msword" ||
          fileType ===
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        )
      ) {
        textError = fileTypeError;
      }
    }
  }

  return textError;
};

export const isErrorField = (item, state) => {
  const file = state[item.slug];
  const fileType = file && file[0]?.type;
  if (item.isRequired && !state[item.slug]) {
    return true;
  } else if (
    item.type === "file" &&
    fileType &&
    !(
      fileType === "application/pdf" ||
      fileType === "application/msword" ||
      fileType ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    )
  ) {
    return true;
  } else if (
    item.slug === "email" &&
    item.isRequired &&
    !emailCheck.test(state[item.slug])
  ) {
    return true;
  } else if (item.isRequired && state[item.slug].length === 0) {
    return true;
  } else if (
    item.isRequired &&
    item.slug === "upload-file" &&
    checkMaxSizeFile(state[item.slug], maxSize5MB)
  ) {
    return true;
  } else if (!state.captcha) {
    return true;
  }
};
