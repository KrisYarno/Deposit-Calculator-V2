import * as React from 'react';
import { useState } from 'react';
import NightlyRates from './NightlyRates';
import Result from './Result';

const RateCalculator: React.FC = () => {
  const [step, setStep] = useState(0);
  const [nights, setNights] = useState(0);
  const [nightlyRates, setNightlyRates] = useState<number[]>([]);
  const [history, setHistory] = useState<number[]>([]);

  const nextStep = (next: number) => {
    setHistory([...history, step]);
    setStep(next);
  };

  const prevStep = () => {
    const prev = history.pop();
    setHistory([...history]);
    if (prev !== undefined) {
      setStep(prev);
    }
  };

  const reset = () => {
    setStep(0);
    setHistory([]);
  };

  const handleNightsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNights(parseInt(e.target.value));
  };

  const handleRateChange = (isRateChanging: boolean) => {
    if (isRateChanging) {
      nextStep(2);
    } else {
      nextStep(3);
    }
  };

  const handleSubmitSingleRate = () => {
    nextStep(4);
  };

  const handleSingleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rate = parseFloat(e.target.value);
    setNightlyRates(Array(nights).fill(rate));
  };

  const handleNightlyRatesChange = (rates: number[]) => {
    setNightlyRates(rates);
    nextStep(4);
  };

  if (step === 0) {
    return (
      <>
        <h1>How many nights is the reservation for?</h1>
        <input type="number" onChange={handleNightsChange} />
        {nights > 0 && <button onClick={() => nextStep(1)}>Next</button>}
      </>
    );
  } else if (step === 1 && nights > 1) {
    return (
      <>
        <h1>Does the nightly rate change?</h1>
        <button onClick={() => handleRateChange(true)}>Yes</button>
        <button onClick={() => handleRateChange(false)}>No</button>
        <button className="back-button" onClick={prevStep}>Back</button>
        <button className="restart-button" onClick={reset}>Restart</button>
      </>
    );
  } else if (step === 2 || (step === 1 && nights === 1)) {
    return (
      <>
        <NightlyRates nights={nights} onRatesSubmit={handleNightlyRatesChange} />
        <button className="back-button" onClick={prevStep}>Back</button>
        <button className="restart-button" onClick={reset}>Restart</button>
      </>
    );
  } else if (step === 3) {
    return (
      <>
        <h1>Enter the nightly rate:</h1>
        <input type="number" onChange={handleSingleRateChange} />
        <button onClick={handleSubmitSingleRate}>Calculate</button>
        <button className="back-button" onClick={prevStep}>Back</button>
        <button className="restart-button" onClick={reset}>Restart</button>
      </>
    );
  } else {
    return (
      <>
        <Result nights={nights} nightlyRates={nightlyRates} />
        <button className="back-button" onClick={prevStep}>Back</button>
        <button className="restart-button" onClick={reset}>Restart</button>
</>
);
}
};

export default RateCalculator;