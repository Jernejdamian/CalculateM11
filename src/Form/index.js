import { useState } from "react";
import { Result } from "../Result";
import { currencies } from "../currencies";

export const Form = ({ result, calculateResult }) => {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short)

    const onFormSubmit = (event) => {
        event.preventDefault();

        calculateResult(amount, currency)
    };

    return (
        <form
            onSubmit={onFormSubmit}
        >
            <p>
                <label>
                    <span>Ile chcesz złotówek wyienić?:</span>
                    <input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    <span>Na jaką walutę chcesz wymienić pieniądze?:</span>
                    <select
                        value={currency}
                        onChange={setCurrency}
                    >
                        {currencies.map(currency => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        ))}
                    </select>
                </label>
            </p>
            <p><button>OBLICZ</button></p>
            <Result
                result={result}
            />
        </form>
    )
}