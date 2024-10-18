import { useState } from "react";

function App() {
  return (
    <div className="flex justify-center">
      <Counter />
    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  // const [today, setToday] = useState(new Date());

  const date = new Date();
  date.setDate(date.getDate() + count);

  const increaseStep = () => {
    setStep((s) => {
      return s + 1;
    });
  };

  const decreaseStep = () => {
    setStep((s) => {
      return s - 1;
    });
  };

  const increaseCount = () => {
    setCount((c) => {
      if (step) {
        return c + step;
      } else {
        return c + 1;
      }
    });
  };

  const decreaseCount = () => {
    setCount((c) => {
      if (step) {
        return c - step;
      } else {
        return c - 1;
      }
    });
  };

  return (
    <div className="flex flex-col">
      <section>
        <button
          style={{
            padding: "5px",
            border: "2px solid rgba(255,255,255,0.5)",
            background: "#ddd",
          }}
          onClick={increaseStep}
        >
          +
        </button>
        Step: {step}
        <button
          style={{
            padding: "5px",
            border: "2px solid rgba(255,255,255,0.5)",
            background: "#ddd",
          }}
          onClick={decreaseStep}
        >
          -
        </button>
      </section>

      <section>
        <button
          style={{
            padding: "5px",
            border: "2px solid rgba(255,255,255,0.5)",
            background: "#ddd",
          }}
          onClick={increaseCount}
        >
          +
        </button>
        Count: {count}
        <button
          style={{
            padding: "5px",
            border: "2px solid rgba(255,255,255,0.5)",
            background: "#ddd",
          }}
          onClick={decreaseCount}
        >
          -
        </button>
      </section>
      <p>
        <span>
          {count === 0
            ? "Today is:"
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </span>
        &nbsp;
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
};

export default App;
