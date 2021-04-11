import PropTypes from "prop-types";
import ReCAPTCHA from "react-google-recaptcha";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { Context } from "../FormStore";
import { useContext } from "react";
import { errorMessage } from "../helper/checkErrorField";

const Captcha = ({ recaptchaRef }) => {
  const [state, dispatch] = useContext(Context);

  const item = { slug: "captcha" };

  const textError = errorMessage(item, state);

  function handleCaptcha(value) {
    if (value) {
      dispatch({ type: "HANDLE_CAPTCHA", payload: value });
    } else {
      dispatch({ type: "HANDLE_CAPTCHA", payload: "" });
    }
  }

  return (
    <div>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.REACT_APP_PUBLIC_GOOGLE_SITE_KEY}
        onChange={handleCaptcha}
        onErrored={handleCaptcha}
        onExpired={handleCaptcha}
        theme={state.theme}
      />
      <ErrorMessage textError={textError} />
    </div>
  );
};

export default Captcha;

Captcha.propTypes = {
  recaptchaRef: PropTypes.object,
};
