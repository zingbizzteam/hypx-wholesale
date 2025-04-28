import React from "react";

type QuantityAdjusterProps = {
  value: number;
  setValue: (value: number) => void;
  min?: number;
  max?: number;
};

const QuantityAdjuster = ({
  value,
  setValue,
  min = 10,
  max = 10000,
}: QuantityAdjusterProps) => {
  // Local state for input
  const [inputValue, setInputValue] = React.useState(value.toString());

  // Keep inputValue in sync with value prop
  React.useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  // Handle direct input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Clamp value on blur
  const handleBlur = () => {
    let val = parseInt(inputValue, 10);
    if (isNaN(val)) val = min;
    if (val < min) val = min;
    if (val > max) val = max;
    setValue(val);
    setInputValue(val.toString());
  };

  // Handle step buttons
  const decrease = () => {
    if (value > min) setValue(value - 1);
  };
  const increase = () => {
    if (value < max) setValue(value + 1);
  };

  return (
    <div className="flex items-center border h-16">
      <button
        onClick={decrease}
        className="quantity-btn"
        aria-label="Decrease quantity"
        disabled={value <= min}
        type="button"
      >
        -
      </button>
      <input
        type="number"
        value={inputValue}
        min={min}
        max={max}
        onChange={handleInputChange}
        onBlur={handleBlur}
        className="w-16 text-center rounded mx-2 border-b"
        aria-label="Quantity"
      />
      <button
        onClick={increase}
        className="quantity-btn"
        aria-label="Increase quantity"
        disabled={value >= max}
        type="button"
      >
        +
      </button>
    </div>
  );
};

export default QuantityAdjuster;
