import React from "react";
import FormWrapper from "./FormWrapper";

type Account = {
  login: string;
  password: string;
};

type AccountProps = Account & {
  updateFormData: (fields: Partial<Account>) => void;
};

const AccountInputs = ({ login, password, updateFormData }: AccountProps) => {
  return (
    <FormWrapper title="Account step">
      <label htmlFor="">login</label>
      <input
        type="text"
        value={login}
        name="login"
        onChange={e => {
          updateFormData({ login: e.target.value });
        }}
      />
      <label htmlFor="">password</label>
      <input
        type="text"
        value={password}
        name="password"
        onChange={e => {
          updateFormData({ password: e.target.value });
        }}
      />
    </FormWrapper>
  );
};

export default AccountInputs;
