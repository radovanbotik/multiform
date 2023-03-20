import useMultistepForm from "./useMultistepForm";
import AccountInputs from "./AccountInputs";
import AddressInputs from "./AddressInputs";
import UserInputs from "./UserInputs";
import { useState } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup); // extend yup

function App() {
  const { currentStepIndex, steps, step, prev, next } = useMultistepForm([
    <UserInputs />,
    <AddressInputs />,
    <AccountInputs />,
  ]);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        age: "",
        address: "",
        city: "",
        state: "",
        login: "",
        password: "",
      }}
      onSubmit={values => {
        console.log(values);
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(3, "First name must be at least 3 characters long.")
          .required("This field is required."),
        lastName: Yup.string()
          .min(3, "First name must be at least 3 characters long.")
          .required("This field is required."),
        age: Yup.string().min(3, "Age must be at least 2 characters long.").required("This field is required."),
        address: Yup.string()
          .min(5, "Address name must be at least 3 characters long.")
          .required("This field is required."),
        city: Yup.string().min(3, "First name must be at least 3 characters long.").required("This field is required."),
        state: Yup.string()
          .min(3, "First name must be at least 3 characters long.")
          .required("This field is required."),
        login: Yup.string()
          .min(3, "First name must be at least 3 characters long.")
          .required("This field is required."),
        password: Yup.string().password().required("This field is required."),
      })}
    >
      {({ errors, touched }) => (
        <Form className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
          <div>
            STEP: {currentStepIndex + 1}/{steps.length}
          </div>
          <div className="card-body">{step}</div>
          <div className="">
            {currentStepIndex < steps.length - 1 && (
              <div className="form-control mt-6">
                <button type="button" onClick={next} className="btn-primary btn-active btn">
                  next
                </button>
              </div>
            )}
            {currentStepIndex === steps.length - 1 && (
              <div className="form-control mt-6">
                <button type="submit" className="btn-accent btn-active btn">
                  submit
                </button>
              </div>
            )}
            {currentStepIndex > 0 && (
              <div className="form-control mt-6">
                <button type="button" onClick={prev} className="btn-secondary btn-active btn ">
                  prev
                </button>
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default App;
