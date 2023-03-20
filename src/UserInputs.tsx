import React from "react";
import FormWrapper from "./FormWrapper";
import TextInput from "./TextInput";

const UserInputs = () => {
  return (
    <FormWrapper title="User step">
      <TextInput type="text" name="firstName" label="First Name" />
      <TextInput type="text" name="lastName" label="Last Name" />
      <TextInput type="text" name="age" label="Age" />
    </FormWrapper>
  );
};

export default UserInputs;
