import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  Button,
  FormGroup,
  FormLabel,
  FormControl,
  Container,
} from "react-bootstrap";
import * as Yup from "yup";
import { API_URL } from "../config";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only alphabetical characters are allowed")
    .required("First Name is required")
    .max(100, "First Name must be at most 100 characters"),
  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only alphabetical characters are allowed")
    .required("Last Name is required")
    .max(100, "Last Name must be at most 100 characters"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
});
interface UserProps {
  addUser: (data: string) => void;
}

const CreateUser: React.FC<UserProps> = ({ addUser }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const handleSubmit = (values: any) => {
    fetch(`${API_URL}users`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        addUser(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <Container className="mt-5">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <FormGroup>
              <FormLabel>First Name</FormLabel>
              <Field
                type="text"
                name="firstName"
                as={FormControl}
                isInvalid={!!errors.firstName && touched.firstName}
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-danger"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Last Name</FormLabel>
              <Field
                type="text"
                name="lastName"
                as={FormControl}
                isInvalid={!!errors.lastName && touched.lastName}
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-danger"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Email</FormLabel>
              <Field
                type="email"
                name="email"
                as={FormControl}
                isInvalid={!!errors.email && touched.email}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </FormGroup>

            <Button type="submit" disabled={isSubmitting}>
              Create
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default CreateUser;
