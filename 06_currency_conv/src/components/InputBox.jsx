import {React,useId} from 'react'
{/* useId is a React Hook for generating unique IDs that can be passed to accessibility attributes*/}
function InputBox({label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
selectCurrency="usd",
amountDisable=false,
currencyDisable=false,

    classname=""}){
const amountInputId=useId()

    return(
       <div className={`bg-white p-3 rounded-lg text-sm flex ${classname}`}> {/* this is special ;its css in js; bcz if user enters sth by him then it will also get embedded*/}
        <div className="w-1/2">
        
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">{label}</label>
        
        <input id={amountInputId} 
        className="outline-none w-full bg-transparent py-1.5" 
        type="number"
         placeholder="Amount" 
         disabled={amountDisable}
         value={amount}
         onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}/>
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full ">Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        value={selectCurrency}
        onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
        >
            {/* in options, key improves the performance of loop */}
{currencyOptions.map((currency)=>(
<option key={currency} value={currency}>{currency}</option>
))}


            
        </select>
        </div>
       </div>
    );
}

export default InputBox;