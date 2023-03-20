import React from "react";
import FormWrapper from "./FormWrapper";

type User = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserProps = User & {
  updateFormData: (fields: Partial<User>) => void;
};
const UserInputs = ({ firstName, lastName, age, updateFormData }: UserProps) => {
  return (
    <FormWrapper title="User step">
      <label htmlFor="">first name</label>
      <input
        type="text"
        value={firstName}
        name="firstName"
        onChange={e => {
          updateFormData({ firstName: e.target.value });
        }}
      />
      <label htmlFor="">last name</label>
      <input
        type="text"
        value={lastName}
        name="lastName"
        onChange={e => {
          updateFormData({ lastName: e.target.value });
        }}
      />
      <label htmlFor="">age</label>
      <input
        type="text"
        value={age}
        name="age"
        onChange={e => {
          updateFormData({ age: e.target.value });
        }}
      />
    </FormWrapper>
  );
};

export default UserInputs;
