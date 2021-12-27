// eslint-disable-next-line @typescript-eslint/no-var-requires
const { yupResolver } = require("@hookform/resolvers/yup");
import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Fullname is required"),

  emailLogin: Yup.string()
    .required("Email is required")
    .email("Email is invalid"),
  passwordLogin: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
  date: Yup.date()
    .nullable()
    .required("This field is required")
    .transform((curr, orig) => (orig === "" ? null : curr))
    .default(() => new Date(2000, 1, 1)),

  acceptTerms: Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .default(false)
    .oneOf([true], "You have to accept terms"),
});
export const loginValidationSchema = Yup.object().shape({
  emailLogin: Yup.string()
    .required("Email is required")
    .email("Email is invalid"),
  passwordLogin: Yup.string().required("Password is required"),
});
export const postContentSchema = Yup.object().shape({
  post: Yup.string().required("Post content is required"),
});
