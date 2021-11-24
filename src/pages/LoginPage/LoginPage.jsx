import React from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import { loginUserRequest } from "../../app/actions";

export default function LoginPage(props) {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, formikBag) => {
        dispatch(loginUserRequest(values));
        formikBag.resetForm();
        props.history.push("/");
      }}
    >
      {() => {
        return (
          <Form>
            <Field name="email" />
            <Field name="password" />
            <button type="submit">Register</button>
          </Form>
        );
      }}
    </Formik>
  );
}
