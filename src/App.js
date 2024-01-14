import { currencies } from './currencies';
import './App.css';
import { Form } from './Form';
import { useState } from 'react';
import { Clock } from './Clock';

function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {

    const rate = currencies.find(({ short }) => short === currency).rate;
    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    })
  }

  return (
    <div className="App">
      <Clock/>
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </div>
  );
}

export default App;
