import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  return (
    <div>
      {" "}
      <Steps /> {/* <Counter /> */}{" "}
    </div>
  );
}
function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
  }
  return (
    <>
      {" "}
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        {" "}
        {isOpen ? "×" : "+"}{" "}
      </button>{" "}
      {isOpen && (
        <div className="steps">
          {" "}
          <div className="numbers">
            {" "}
            <div className={step >= 1 ? "active" : ""}>1</div>{" "}
            <div className={step >= 2 ? "active" : ""}>2</div>{" "}
            <div className={step >= 3 ? "active" : ""}>3</div>{" "}
          </div>{" "}
          <p className="message">
            {" "}
            Step {step}: {messages[step - 1]}{" "}
          </p>{" "}
          <div className="buttons">
            {" "}
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              {" "}
              <span>👈</span>Previous{" "}
            </Button>{" "}
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              {" "}
              <span>Next 👉</span>{" "}
            </Button>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </>
  );
}
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {" "}
      {children}{" "}
    </button>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  function handlePlus() {
    setCount((c) => c + step);
  }
  function handleMinus() {
    setCount((c) => c - step);
  }
  function reset() {
    setStep(1);
    setCount(0);
  }
  return (
    <div className="container">
      {" "}
      <div className="row">
        {" "}
        {/* <button onClick={() => step > 0 && setStep((s) => s - 1)}>-</button> */}{" "}
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />{" "}
        <span>{step}</span>{" "}
        {/* <button onClick={() => setStep((s) => s + 1)}>+</button> */}{" "}
      </div>{" "}
      <div className="row special">
        {" "}
        <button onClick={handleMinus}>-</button>{" "}
        <input
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>{" "}
        <button onClick={handlePlus}>+</button>{" "}
      </div>{" "}
      <p>
        {" "}
        <span>
          {" "}
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}{" "}
        </span>{" "}
        <span>{date.toDateString()}</span>{" "}
      </p>{" "}
      {count !== 0 || step !== 1 ? (
        <button onClick={reset}>
          {" "}
          <span>Reset</span>{" "}
        </button>
      ) : null}{" "}
    </div>
  );
}
