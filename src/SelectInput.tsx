import React from "react";
import { useField } from "formik";

interface InputProps {
  label: string;
  type: "text" | "number";
  name: string;
}

const SelectInput = ({ label, ...props }: InputProps) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;
  return (
    <div className="flex flex-col md:mr-16">
      <label
        htmlFor={props.name}
        className="mb-2 text-sm font-bold leading-tight tracking-normal text-gray-800 dark:text-gray-100"
      >
        {label}
      </label>
      <select {...field} {...props} />
      {isError && <p>{isError}</p>}
    </div>
  );
};

export default SelectInput;
