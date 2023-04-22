import * as React from 'react';

interface ResultProps {
  nights: number;
  nightlyRates: number[];
}

const Result: React.FC<ResultProps> = ({ nights, nightlyRates }) => {
  const [taxes, setTaxes] = React.useState(0);
  const [depositTotal, setDepositTotal] = React.useState(0);

  React.useEffect(() => {
    const taxesResult = nightlyRates.reduce((acc, rate) => {
      const a = +(Math.round(rate * 0.05 * 1e2) / 1e2);
      const b = +(Math.round(rate * 0.02 * 1e2) / 1e2);
      const c = +(Math.round(rate * 0.06 * 1e2) / 1e2);
      return acc + a + b + c;
    }, 0);

    const depositTotalResult = nightlyRates.reduce((acc, rate) => acc + rate, 0) + taxesResult;

    setTaxes(taxesResult);
    setDepositTotal(depositTotalResult);
  }, [nightlyRates]);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Copied to clipboard');
    } catch (err) {
      alert('Failed to copy text');
    }
  };

  return (
    <>
      <h1>Results</h1>
      <div>
        <h2>Taxes:</h2>
        <p>{taxes.toFixed(2)}</p>
        <button onClick={() => handleCopy(taxes.toFixed(2))}>Copy</button>
      </div>
      <div>
        <h2>Deposit Total:</h2>
        <p>{depositTotal.toFixed(2)}</p>
        <button onClick={() => handleCopy(depositTotal.toFixed(2))}>Copy</button>
      </div>
    </>
  );
};

export default Result;
