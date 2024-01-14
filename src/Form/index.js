import { useState } from "react";
import { Result } from "../Result";
import { currencies } from "../currencies";
import "./style.css";

export const Form = ({  calculateResult,result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");
    

    const onFormSubmit = (event) => {
        event.preventDefault();

        calculateResult(currency, amount)
    };

    return (
        <form className="form"
            onSubmit={onFormSubmit}
        >
            <div class="form__div">KALKULATOR WYMIANY WALUT</div>
            <p>
                <label>
                    <span className="form__paragraph">Ile chcesz złotówek wyienić?:</span>
                    <input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        type="number"
                        placeholder="Tu wpisz kwotę"
                        min="10"
                        step="10"
                        required
                    />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__paragraph">Na jaką walutę chcesz wymienić pieniądze?:</span>
                   <p>
                   <select
                        value={currency}
                        onChange={({target})=>setCurrency(target.value)}
                    >
                        {currencies.map((currency=>(
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        )))}
                    </select>
                   </p>
                </label>
            </p>
            <p><button>OBLICZ</button></p>
            <Result
                result={result}
            />
        </form>
    )
}