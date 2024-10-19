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
  const [step, setStep] = useState(1);
  // const [today, setToday] = useState(new Date());

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  const handleStep = (e) => {
    setStep(Number(e.target.value));
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
      <section className="flex items-center gap-3">
        <input
          type="range"
          min="1"
          max="10"
          onChange={handleStep}
          value={step}
        />
        Step:{step}
      </section>

      <section className="mt-3">
        <button
          className="p-2 px-2 border-2 border-gray-900 mx-2 rounded "
          onClick={increaseCount}
        >
          +
        </button>
        <input
          type="text"
          value={count}
          className="border-2 p-2 border-gray-900 rounded"
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button
          className="p-2 px-2 border-2 border-gray-900 mx-2 rounded "
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

      <div
        style={{ display: count !== 0 || step !== 1 ? "block" : "none" }}
        className="mx-auto mt-5 border-2 p-2 rounded-xl"
      >
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
