import { ExchangeInterface } from "../interfaces/exchange.interface";
import { CURRENCY_ENUM } from "../../../enums/currency.enum";

export const EXCHANGES_STATE: ExchangeInterface[] = [
  {
    date: '2023.06.23 15:11',
    amount: 96_850,
    from: CURRENCY_ENUM.UAH,
    to: CURRENCY_ENUM.USD,
    rate: 37.25
  },
  {
    date: '2023.06.26 09:40',
    amount: 37_250,
    from: CURRENCY_ENUM.UAH,
    to: CURRENCY_ENUM.USD,
    rate: 37.25
  },
  {
    date: '2023.07',
    amount: 11_175,
    from: CURRENCY_ENUM.UAH,
    to: CURRENCY_ENUM.USD,
    rate: 37.25
  },
];