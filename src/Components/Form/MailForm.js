import React, { Component } from "react";
import "./MailForm.scss";
import { Field, Form, Formik } from "formik";
import MyInput from "../myInput/myInput";
import MyTestArea from "../myTextArea/myTextArea";
import { submit, validation } from "./MailFormUtils";
import { Button } from "react-bootstrap";

class MailForm extends Component {


    render() {
        return (
            <Formik
                initialValues={{ email: "", content: "" }}
                validate={validation}
                onSubmit={(values, actions) => {
                    submit(values);
                    actions.resetForm();
                }}

            >
                <Form className="MailForm">
                    <Field name="email" component={MyInput} placeholder="Email zwrotny" />
                    <Field name="content" component={MyTestArea} placeholder="Wpisz tutaj treść wiadomości" />
                    <Button type="submit">Wyślij</Button>
                </Form>

            </Formik>
        );
    }
}

export default MailForm;