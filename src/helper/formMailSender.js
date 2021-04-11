import axios from "axios";

export const formMailSender = async (data) => {
  try {
    const res = await axios.post(process.env.REACT_APP_API_MAILSENDER, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
    });
    return res;
  } catch (error) {
    return { error, statusCode: 0 };
  }
};
