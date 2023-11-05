import { CURRENCY_ENUM } from "../../../enums/currency.enum";

export const ACTION_LIST = [
  {
    action: 'SPEND',
    category: 'MA',
    description: 'Salary',
    amount: 5000,
    currency: CURRENCY_ENUM.UAH,
    date: '2023-11-06 00:59:00'
  },
  {
    action: 'SPEND',
    category: 'MA',
    description: 'Salary',
    amount: 5200,
    currency: CURRENCY_ENUM.UAH,
    date: '2023-10-23 19:20:00'
  },
  {
    action: 'SPEND',
    category: 'MA',
    description: 'Accounts volume',
    amount: 500,
    currency: CURRENCY_ENUM.USD,
    date: '2023-10-16 15:40:00',
    exchangeRate: 37.8,
  },
  {
    action: 'SPEND',
    category: 'MA',
    description: 'Accounts volume',
    amount: 500,
    currency: CURRENCY_ENUM.USD,
    date: '2023-09-16 15:40:00',
    exchangeRate: 37.8,
  },
  {
    action: 'EXCHANGE',
    amount: 18_900,
    currency: CURRENCY_ENUM.UAH,
    date: '2023-10-16 15:35:00',
    exchangeRate: 37.8,
    fee: 0,
  },
  {
    action: 'SPEND',
    category: 'COMMS',
    description: 'Serhii debt',
    amount: 18_900,
    currency: CURRENCY_ENUM.UAH,
    date: '2023-10-16 15:34:00',
    exchangeRate: 37.8
  },
  {
    action: 'SPEND',
    category: 'COMMS',
    description: 'Kitty debt',
    amount: 18_750, // 0 USD
    currency: CURRENCY_ENUM.UAH,
    date: '2023-10-14 21:30:00'
  },
  {
    action: 'SPEND',
    category: 'MA',
    description: 'Proxies',
    amount: 1_820, // 50 USD
    currency: CURRENCY_ENUM.UAH,
    date: '2023-10-14 21:20:00'
  },
  {
    action: 'SPEND',
    category: 'MA',
    description: 'Proxies',
    amount: 26,
    currency: CURRENCY_ENUM.USD,
    date: '2023-09-13 21:20:00',
    exchangeRate: 37.45,
  },
  {
    action: 'SPEND',
    category: 'MA',
    description: 'Proxies',
    amount: 11,
    currency: CURRENCY_ENUM.USD,
    date: '2023-09-03 21:20:00',
    exchangeRate: 37.45,
  },
  {
    action: 'SPEND',
    category: 'MA',
    description: 'Salary',
    amount: 3100,
    currency: CURRENCY_ENUM.UAH,
    date: '2023-10-09 19:20:00'
  },
  {
    action: 'SPEND',
    category: 'MA',
    description: 'Salary',
    amount: 3000,
    currency: CURRENCY_ENUM.UAH,
    date: '2023-09-25 19:20:00'
  },
  {
    action: 'SPEND',
    category: 'MA',
    description: 'Salary',
    amount: 3000,
    currency: CURRENCY_ENUM.UAH,
    date: '2023-09-11 19:20:00'
  },
  {
    action: 'SPEND',
    category: 'Crypto Crew',
    description: 'Subscription',
    amount: 5050, // 132 USD
    currency: CURRENCY_ENUM.UAH,
    date: '2023-10-09 19:10:00'
  },
  {
    action: 'SPEND',
    category: 'MA',
    description: 'AdsPower yearly subscription',
    amount: 6540,
    currency: CURRENCY_ENUM.UAH,
    date: '2023-10-09 19:00:00'
  },
  {
    action: 'SPEND',
    category: 'MA',
    description: 'Maksum',
    amount: 400,
    currency: CURRENCY_ENUM.UAH,
    date: '2023-09-18 19:00:00'
  },
  {
    action: 'SPEND',
    category: 'MA',
    description: 'AdsPower monthly subscription',
    amount: 16,
    currency: CURRENCY_ENUM.USD,
    date: '2023-09-11 19:00:00',
    exchangeRate: 37.45,
  },
  {
    action: 'SPEND',
    category: 'MA',
    description: 'Discord 10 accounts',
    amount: 9,
    currency: CURRENCY_ENUM.USD,
    date: '2023-09-12 19:00:00',
    exchangeRate: 37.45,
  },
  {
    action: 'SPEND',
    category: 'MA',
    description: 'Twitter 10 accounts',
    amount: 9,
    currency: CURRENCY_ENUM.USD,
    date: '2023-09-12 19:00:00',
    exchangeRate: 37.45,
  },
  {
    action: 'SPEND',
    category: 'COMMS',
    description: 'Serhii debt',
    amount: 18_925,
    currency: CURRENCY_ENUM.UAH,
    exchangeRate: 37.85,
    date: '2023-09-15 20:10:00'
  },
  {
    action: 'SPEND',
    category: 'COMMS',
    description: 'Kitty debt',
    amount: 18_750, // 0 USD
    currency: CURRENCY_ENUM.UAH,
    date: '2023-09-15 20:00:00'
  },
  {
    action: 'SPEND',
    category: 'COMMS',
    description: 'Allocation',
    amount: 5_000,
    currency: CURRENCY_ENUM.USD,
    date: '2023-09-08 21:54:00',
    exchangeRate: 38.45
  },
  {
    action: 'SPEND',
    category: 'COMMS',
    description: 'Myself',
    amount: 3_300,
    currency: CURRENCY_ENUM.UAH,
    date: '2023-09-08 21:53:00'
  },
  {
    action: 'BORROW',
    category: 'COMMS',
    description: 'Myself',
    exchangeRate: 38.45,
    amount: 1_000,
    currency: CURRENCY_ENUM.USD,
    date: '2023-09-08 21:36:00'
  },
  {
    action: 'SPEND',
    category: 'Crypto Crew',
    description: 'Subscription',
    amount: 5_050,
    currency: CURRENCY_ENUM.UAH,
    date: '2023-09-11 16:31:00'
  },
  {
    action: 'BORROW',
    category: 'COMMS',
    description: 'Serhii',
    exchangeRate: 38.45,
    amount: 37_000,
    currency: CURRENCY_ENUM.UAH,
    date: '2023-08-30 21:36:01'
  },
  {
    action: 'BORROW',
    category: 'COMMS',
    description: 'Serhii',
    exchangeRate: 38.45,
    amount: 1_000,
    currency: CURRENCY_ENUM.USD,
    date: '2023-08-30 21:36:00'
  },
  {
    action: 'BORROW',
    category: 'COMMS',
    description: 'Kitty',
    exchangeRate: 38.45,
    amount: 75_000,
    currency: CURRENCY_ENUM.UAH,
    date: '2023-08-28 21:36:00'
  },
  {
    action: 'SPEND',
    category: 'Coins',
    description: '',
    amount: 564.081,
    currency: CURRENCY_ENUM.USD,
    date: '2023-09-30 23:59:59'
  },
  {
    action: 'SPEND',
    category: 'Coins',
    description: '',
    amount: 710.08,
    currency: CURRENCY_ENUM.USD,
    date: '2023-08-31 23:59:59'
  },
  {
    action: 'SPEND',
    category: 'Crypto Crew',
    description: 'Subscription',
    amount: 10_800,
    currency: CURRENCY_ENUM.UAH,
    date: '2023-08-12 11:25:00'
  },
  {
    action: 'SPEND',
    category: 'Coins',
    description: '',
    amount: 5225.358,
    currency: CURRENCY_ENUM.USD,
    date: '2023-07-31 23:59:59'
  },
  {
    action: 'SPEND',
    category: 'Crypto Crew',
    description: 'Subscription',
    amount: 3300,
    currency: CURRENCY_ENUM.UAH,
    date: '2023-07-14 18:04:00'
  },
  {
    action: 'SPEND',
    category: 'Coins',
    description: '',
    amount: 2303.983,
    currency: CURRENCY_ENUM.USD,
    date: '2023-05-31 23:59:59'
  },
  {
    action: 'SPEND',
    category: 'Coins',
    description: '',
    amount: 1059.283,
    currency: CURRENCY_ENUM.USD,
    date: '2023-04-30 23:59:59'
  },
  {
    action: 'SPEND',
    category: 'Crypto Crew',
    description: 'Subscription',
    amount: 3300,
    currency: CURRENCY_ENUM.UAH,
    date: '2023-04-07 19:10:00'
  },
  {
    action: 'SPEND',
    category: 'Coins',
    description: '',
    amount: 1557.022,
    currency: CURRENCY_ENUM.USD,
    date: '2023-03-30 23:59:59'
  },
];