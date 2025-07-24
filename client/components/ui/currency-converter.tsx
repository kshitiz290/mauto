import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

interface CurrencyConverterProps {
  amount: number;
  baseCurrency?: string;
  onCurrencyChange?: (currency: string, symbol: string, convertedAmount: number) => void;
  className?: string;
}

export function CurrencyConverter({ 
  amount, 
  baseCurrency = "USD", 
  onCurrencyChange,
  className 
}: CurrencyConverterProps) {
  const [currency, setCurrency] = useState(baseCurrency);
  const [currencySymbol, setCurrencySymbol] = useState("$");
  const [convertedAmount, setConvertedAmount] = useState(amount);

  // Exchange rates relative to USD
  const exchangeRates = {
    USD: { rate: 1, symbol: "$" },
    EUR: { rate: 0.92, symbol: "€" },
    GBP: { rate: 0.79, symbol: "£" },
    JPY: { rate: 150.59, symbol: "¥" },
    CAD: { rate: 1.36, symbol: "C$" },
    AUD: { rate: 1.52, symbol: "A$" },
    INR: { rate: 83.37, symbol: "₹" },
    CNY: { rate: 7.24, symbol: "¥" }
  };

  useEffect(() => {
    const convert = () => {
      // Convert to USD first if baseCurrency is not USD
      let amountInUSD = amount;
      if (baseCurrency !== "USD") {
        amountInUSD = amount / exchangeRates[baseCurrency as keyof typeof exchangeRates].rate;
      }
      
      // Then convert from USD to target currency
      const result = amountInUSD * exchangeRates[currency as keyof typeof exchangeRates].rate;
      const symbol = exchangeRates[currency as keyof typeof exchangeRates].symbol;
      
      setConvertedAmount(result);
      setCurrencySymbol(symbol);
      
      if (onCurrencyChange) {
        onCurrencyChange(currency, symbol, result);
      }
    };
    
    convert();
  }, [amount, currency, baseCurrency, onCurrencyChange]);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {amount !== 0 && (
        <div className="text-2xl font-bold">
          {currencySymbol}{convertedAmount.toFixed(2)}
        </div>
      )}
      <Select
        value={currency}
        onValueChange={(value) => {
          setCurrency(value);
        }}
      >
        <SelectTrigger className="w-24 h-9">
          <SelectValue placeholder="Currency" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="USD">USD</SelectItem>
          <SelectItem value="EUR">EUR</SelectItem>
          <SelectItem value="GBP">GBP</SelectItem>
          <SelectItem value="JPY">JPY</SelectItem>
          <SelectItem value="CAD">CAD</SelectItem>
          <SelectItem value="AUD">AUD</SelectItem>
          <SelectItem value="INR">INR</SelectItem>
          <SelectItem value="CNY">CNY</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
} 