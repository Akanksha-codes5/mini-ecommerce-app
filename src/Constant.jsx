import {FaDollarSign,FaRupeeSign,FaEuroSign,FaPoundSign,FaYenSign,} from "react-icons/fa";

const CURRENCIES = [
  {
    code: "USD",
    name: "United States Dollar",
    icon: FaDollarSign,
  },
  {
    code: "INR",

    name: "Indian Rupee",
    icon: FaRupeeSign,
  },

  {
    code: "EUR",
    name: "Euro",
    icon: FaEuroSign,
  },

  {
    code: "GBP",
    name: "British Pound Sterling",
    icon: FaPoundSign,
  },

  {
    code: "JPY",
    name: "Japanese Yen",
    icon: FaYenSign,
  },
];
 export const CurrencyIcon = CURRENCIES.find((cur) => cur.code === "USD").icon;
