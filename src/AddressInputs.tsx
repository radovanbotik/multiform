import React from "react";
import FormWrapper from "./FormWrapper";

type Address = {
  address: string;
  city: string;
  state: string;
};

type AddressProps = Address & {
  updateFormData: (fields: Partial<Address>) => void;
};

const AddressInputs = ({ address, city, state, updateFormData }: AddressProps) => {
  return (
    <FormWrapper title="Address Step">
      <label htmlFor="">address</label>
      <input
        type="text"
        value={address}
        name="address"
        onChange={e => {
          updateFormData({ address: e.target.value });
        }}
      />
      <label htmlFor="">city</label>
      <input
        type="text"
        value={city}
        name="city"
        onChange={e => {
          updateFormData({ city: e.target.value });
        }}
      />
      <label htmlFor="">state</label>
      <input
        type="text"
        value={state}
        name="state"
        onChange={e => {
          updateFormData({ state: e.target.value });
        }}
      />
    </FormWrapper>
  );
};

export default AddressInputs;
