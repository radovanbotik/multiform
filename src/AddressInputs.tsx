import React from "react";
import FormWrapper from "./FormWrapper";
import TextInput from "./TextInput";

const AddressInputs = () => {
  return (
    <FormWrapper title="Address Step">
      <TextInput type="text" name="address" label="Address" />
      <TextInput type="text" name="city" label="City" />
      <TextInput type="text" name="state" label="State" />
    </FormWrapper>
  );
};

export default AddressInputs;
