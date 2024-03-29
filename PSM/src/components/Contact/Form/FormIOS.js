import React from "react"
import { withFormik } from "formik"
import * as Yup from "yup"
import * as emailjs from "emailjs-com"
import styled from "styled-components"
import { colors } from "../../Utils/colors"

import { InputWrapper, FormWrapper, ErrorMessage, Submit } from "./FormStyles"

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
          id='name'
          aria-label='name'
          aria-required="true"
          placeholder="Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name || ""}
          name="name"
        />
      </label>
      <label htmlFor="Email">
        {errors.email && touched.email && (
          <ErrorMessage id="feedback">{errors.email}</ErrorMessage>
        )}
        <InputWrapper
          type="email"
          id='email'
          aria-label='email'
          aria-required="true"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email || ""}
          name="email"
          noValidate
        />
      </label>
      <label htmlFor="message us">
        {errors.message && touched.message && (
          <ErrorMessage id="feedback">{errors.message}</ErrorMessage>
        )}
        <MessageIOS
          id="message us"
          aria-label='message us'
          aria-required="true"
          onChange={handleChange}
          placeholder="What can we help with?"
          onBlur={handleBlur}
          name="message us"
          rows="4"
          value={values.messageUs || ""}
        ></MessageIOS>
      </label>
      <Submit type="Submit">submit</Submit>
    </FormWrapper>
  </>
)

const FormIOS = withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    messageUs: "",
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be more than 1 character")
      .required("Name is needed"),
    email: Yup.string()
      .email("Whoops, thats not a valid email address")
      .required("Email is needed"),
    messageUs: Yup.string()
      .min(
        2,
        "Please leave a message or provide telephone number to request a callback"
      )
      .required(
        "Please leave a message or provide telephone number to request a callback"
      ),
  }),

  handleSubmit: (values, { resetForm }) => {
    const service_id = `${process.env.GATSBY_SERVICE_ID}`
    const template_id = `${process.env.GATSBY_TEMPLATE_ID}`
    const user_id = `${process.env.GATSBY_USER_ID}`
    const template_params = {
      userName: values.name,
      userEmail: values.email,
      userMessage: values.messageUs,
    }

    emailjs.send(service_id, template_id, template_params, user_id).then(
      function(response) {
        alert("Thanks for your request we'll be in touch shortly")
        resetForm()
      },
      function(error) {
        alert("There was an error sending your message please try again")
      }
    )
  },

  displayName: "Contact Form",
})(SignUp)

export default FormIOS

export const MessageIOS = styled.textarea`
  border: none;
  margin-top: 0.7rem;
  margin-bottom: 0.7rem;
  border-radius: 6px;
  padding: 1rem;
  width: 100%;
  background-color: ${colors.tan};
`
