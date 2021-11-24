import React from "react";
import { Field, Form, Formik } from "formik";

export default function RegisterPage() {
  return (
    <Formik
      initialValues={{ firstName: "", email: "", password: "" }}
      onSubmit={() => {}}
    >
      {() => {
        return (
          <Form>
            <Field name="firstName" />
            <Field name="email" />
            <Field name="password" />
            <button type="submit">Register</button>
          </Form>
        );
      }}
    </Formik>
  );
}
