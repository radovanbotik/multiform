import React, { ReactNode } from "react";

type PropTypes = {
  title: string;
  children: ReactNode;
};
const FormWrapper = ({ title, children }: PropTypes) => {
  return (
    <>
      <h2>{title}</h2>
      <div className="flex flex-col">{children}</div>
    </>
  );
};

export default FormWrapper;
