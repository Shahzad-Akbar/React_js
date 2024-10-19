import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChage,
    currencyOption = [],
    selectCurrency = "use",
    amountDisable = false,
    currrencyDisable = false,
    className = "",
}) {
    const amountInputId= useId()

    return (
        <>
            <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
                <div className='w-1/2'>
                    <label htmlFor={amountInputId}
                    className='text-balck/4 mb-2 inline-block'>
                        {label}
                    </label>
                    <input
                        id={amountInputId}
                        className='w-full outline-none bg-transparent py-1.5'
                        type="number"
                        placeholder='Amount'
                        disabled={amountDisable}
                        value={amount}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    />
                </div>
                <div className='w-1/2 flex felx-wrap justify-end text-write'>
                    <p className='text-black/40 mb-2 w-full'> currency Type</p>
                    <select
                        className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none '
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChage && onCurrencyChage(e.target.value)}
                        disabled={currrencyDisable}
                    >
                        {currencyOption.map((currency) =>
                        (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>

                        ))}

                    </select>
                </div>

            </div>
        </>
    )
}

export default InputBox
