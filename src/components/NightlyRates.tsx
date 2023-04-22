import * as React from 'react';

interface NightlyRatesProps {
  nights: number;
  onRatesSubmit: (rates: number[]) => void;
}

const NightlyRates: React.FC<NightlyRatesProps> = ({ nights, onRatesSubmit }) => {
  const [rates, setRates] = React.useState<number[]>(Array(nights).fill(null));

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newRates = [...rates];
    newRates[index] = parseFloat(e.target.value);
    setRates(newRates);
  };

  const handleSubmit = () => {
    onRatesSubmit(rates);
  };

  return (
    <>
      <h1>Enter the rate for each night</h1>
      {rates.map((rate, index) => (
        <div key={index}>
          <label>Night {index + 1}:</label>
          <input type="number" value={rate} onChange={(e) => handleRateChange(e, index)} />
        </div>
      ))}
      <button onClick={handleSubmit}>Calculate</button>
    </>
  );
};

export default NightlyRates;
