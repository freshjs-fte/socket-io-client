import React from "react";
import { bindActionCreators } from "redux";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import * as creators from "../../app/actions";
import { useDispatch } from "react-redux";

export default function ChatForm() {
  // useSelector get user
  const dispatch = useDispatch();

  const { sendMessageRequest } = bindActionCreators(creators, dispatch);

  return (
    <Formik
      onSubmit={(values, formikBag) => {
        sendMessageRequest({ ...values, author: "6197f3fab11d16c6ea3b737c" });

        formikBag.resetForm();
      }}
      initialValues={{
        text: "",
      }}
      validationSchema={yup.object().shape({ text: yup.string().required() })}
    >
      {() => {
        return (
          <Form>
            <Field name="text" placeholder="Enter message..." />
            <button type="submit">Send message</button>
          </Form>
        );
      }}
    </Formik>
  );
}
