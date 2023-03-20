import React from "react";
import FormWrapper from "./FormWrapper";
import TextInput from "./TextInput";

const AccountInputs = () => {
  return (
    <FormWrapper title="Account step">
      <TextInput type="text" name="login" label="Login" />
      <TextInput type="text" name="password" label="Password" />
    </FormWrapper>
  );
};

export default AccountInputs;
