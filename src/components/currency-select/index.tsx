export default function CurrencySelect() {
    return (
        <div className="flex flex-col">
        <label htmlFor="currency-select">Currency</label>
        <select id="currency-select" className="rounded-md text-slate-950">
            <option value="USD">USD</option>
            <option value="CAD">CAD</option>
            <option value="EUR">EUR</option>
        </select>
        </div>
    )
}