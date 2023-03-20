import useMultistepForm from "./useMultistepForm";
import AccountInputs from "./AccountInputs";
import AddressInputs from "./AddressInputs";
import UserInputs from "./UserInputs";
import { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  address: string;
  city: string;
  state: string;
  login: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  address: "",
  city: "",
  state: "",
  login: "",
  password: "",
};

function App() {
  const [formData, setFormData] = useState(INITIAL_DATA);
  const updateFormData = (fields: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };

  const { currentStepIndex, steps, step, prev, next } = useMultistepForm([
    <UserInputs {...formData} updateFormData={updateFormData} />,
    <AddressInputs {...formData} updateFormData={updateFormData} />,
    <AccountInputs {...formData} updateFormData={updateFormData} />,
  ]);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (currentStepIndex <= steps.length - 1) next();
          else {
            alert("last page");
            console.log(formData);
          }
        }}
      >
        <div>
          STEP: {currentStepIndex}/{steps.length}
        </div>
        <div>{step}</div>
        <div>
          {currentStepIndex > 0 && (
            <button type="button" onClick={prev}>
              prev
            </button>
          )}
          <button type="submit">{currentStepIndex <= steps.length - 1 ? "next" : "finish"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
