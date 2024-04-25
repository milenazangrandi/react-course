import { useState } from "react";
import Button from "./Button";
import StepMessage from "./StepMessage";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps key="steps1" />
      {/* <Steps key="steps2" /> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <div>
      <button
        className="close"
        onClick={() => setIsOpen((openNow) => !openNow)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

        <StepMessage step={step}>
          {messages[step - 1]}
          <div  className="buttons">
          <Button backgroundColor='#f223'>Learn how</Button>
          </div>
        </StepMessage>

          <div className="buttons">
            <Button textColor='#fff' backgroundColor= "#7950f2" clickHandler={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button textColor='#fff' backgroundColor= "#7950f2" clickHandler={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
