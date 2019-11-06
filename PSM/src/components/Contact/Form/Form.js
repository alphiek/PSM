import React from "react"
import { withFormik } from "formik"
import * as Yup from "yup"

import {
  InputWrapper,
  FormWrapper,
  Message,
  ErrorMessage,
  Submit,
} from "./FormStyles"

const SignUp = ({
  values,
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched,
}) => (
  <>
    <FormWrapper onSubmit={handleSubmit}>
      <label htmlFor="name">
        {errors.name && touched.name && (
          <ErrorMessage id="feedback">{errors.name}</ErrorMessage>
        )}
        <InputWrapper
          type="text"
          placeholder="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name || ""}
          name="name"
        />
      </label>
      <label htmlFor="email">
        {errors.email && touched.email && (
          <ErrorMessage id="feedback">{errors.email}</ErrorMessage>
        )}
        <InputWrapper
          type="email"
          placeholder='email'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email || ""}
          name="email"
          noValidate
        />
      </label>
      <label htmlFor="message">
        {errors.message && touched.message && (
          <ErrorMessage id="feedback">{errors.message}</ErrorMessage>
        )}
        <Message
          id="message"
          onChange={handleChange}
          placeholder='Message'
          onBlur={handleBlur}
          name="message"
          rows="4"
          value={values.message || ""}
        ></Message>
      </label>
      <Submit type="Submit">submit</Submit>
    </FormWrapper>
  </>
)

const Form = withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    message: "",
    consent: false,
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be more than 1 character")
      .required("Name is needed"),
    email: Yup.string()
      .email("Whoops, thats not a valid email address")
      .required("Email is needed"),
    consent: Yup.bool()
      .oneOf([true], "Please give us consent to contact you")
      .required("Please give us consent to contact you"),
    message: Yup.string()
      .min(
        2,
        "Please leave a message or provide telephone number to request a callback"
      )
      .required(
        "Please leave a message or provide telephone number to request a callback"
      ),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 1000)
  },

  displayName: "Contact Form",
})(SignUp)

export default Form
