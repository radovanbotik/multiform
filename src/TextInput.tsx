import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";

interface InputProps {
  label: string;
  type: "text" | "number";
  name: string;
}

const TextInput = ({ label, ...props }: InputProps) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;

  return (
    <div className="form-control flex flex-col md:mr-16">
      <label
        htmlFor={props.name}
        className="mb-2 text-sm font-bold leading-tight tracking-normal text-gray-800 dark:text-gray-100"
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        className="flex h-10 w-64 items-center rounded border border-gray-300 bg-white pl-3 text-sm font-normal text-gray-600 shadow focus:border focus:border-indigo-700 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:focus:border-indigo-700"
      />
      {isError && <p>{meta.error}</p>}
    </div>
  );
};

export default TextInput;
